import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    // Test database connection
    try {
      await prisma.$connect();
      console.log('Database connection successful');
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      return NextResponse.json(
        { 
          message: 'Database connection failed',
          error: dbError.message 
        },
        { status: 500 }
      );
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      console.error('JWT_SECRET environment variable is not set');
      return NextResponse.json(
        { message: 'Authentication service is not properly configured' },
        { status: 500 }
      );
    }

    const { email, password } = await request.json();
    console.log('Login attempt for email:', email);

    if (!email || !password) {
      console.log('Missing email or password');
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    try {
      const user = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      });

      if (!user) {
        console.log('User not found:', email);
        return NextResponse.json(
          { message: 'Invalid login credentials' },
          { status: 401 }
        );
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        console.log('Invalid password for user:', email);
        return NextResponse.json(
          { message: 'Invalid login credentials' },
          { status: 401 }
        );
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      // Set HTTP-only cookie
      const cookie = serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      console.log('Login successful for user:', email);

      const response = NextResponse.json(
        { user: { name: user.name }, message: 'Login successful' },
        { status: 200 }
      );
      response.headers.set('Set-Cookie', cookie);
      return response;
    } catch (dbError) {
      console.error('Database operation error:', {
        message: dbError.message,
        code: dbError.code,
        meta: dbError.meta
      });
      return NextResponse.json(
        { 
          message: 'Database operation failed',
          error: dbError.message 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Login error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return NextResponse.json(
      { 
        message: 'Something went wrong. Please try again later.',
        error: error.message 
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
