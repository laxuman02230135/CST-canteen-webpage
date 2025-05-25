import prisma from '../../lib/prisma';

export async function POST(request) {
  try {
    const { title, description, price, image, category } = await request.json();

    // Validate required fields
    if (!title || !description || !price || !image || !category) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create menu item in the database
    const menuItem = await prisma.menuItem.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        image,
        category: category.toUpperCase(),
      },
    });

    return new Response(JSON.stringify(menuItem), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Add menu item error:', error);
    return new Response(JSON.stringify({ error: 'Failed to add menu item' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 