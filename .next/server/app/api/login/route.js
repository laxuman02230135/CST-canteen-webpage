"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CCST-canteen-webpage%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCST-canteen-webpage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CCST-canteen-webpage%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCST-canteen-webpage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_CST_canteen_webpage_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/login/route.js */ \"(rsc)/./app/api/login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"D:\\\\CST-canteen-webpage\\\\app\\\\api\\\\login\\\\route.js\",\n    nextConfigOutput,\n    userland: D_CST_canteen_webpage_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDQ1NULWNhbnRlZW4td2VicGFnZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q0NTVC1jYW50ZWVuLXdlYnBhZ2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXNlY29uZC8/MWFiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxDU1QtY2FudGVlbi13ZWJwYWdlXFxcXGFwcFxcXFxhcGlcXFxcbG9naW5cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xvZ2luL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbG9naW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2xvZ2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcQ1NULWNhbnRlZW4td2VicGFnZVxcXFxhcHBcXFxcYXBpXFxcXGxvZ2luXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9sb2dpbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CCST-canteen-webpage%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCST-canteen-webpage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/login/route.js":
/*!********************************!*\
  !*** ./app/api/login/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/prisma */ \"(rsc)/./app/lib/prisma.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie */ \"(rsc)/./node_modules/cookie/index.js\");\n\n\n\n\n\nconst dynamic = \"force-dynamic\";\nasync function POST(request) {\n    try {\n        const JWT_SECRET = process.env.JWT_SECRET;\n        if (!JWT_SECRET) {\n            console.error(\"JWT_SECRET environment variable is not set\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Authentication service is not properly configured\"\n            }, {\n                status: 500\n            });\n        }\n        const { email, password } = await request.json();\n        console.log(\"Login attempt for email:\", email);\n        if (!email || !password) {\n            console.log(\"Missing email or password\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Email and password are required\"\n            }, {\n                status: 400\n            });\n        }\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                email: email.toLowerCase()\n            }\n        });\n        if (!user) {\n            console.log(\"User not found:\", email);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Invalid login credentials\"\n            }, {\n                status: 401\n            });\n        }\n        const isPasswordValid = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password);\n        if (!isPasswordValid) {\n            console.log(\"Invalid password for user:\", email);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Invalid login credentials\"\n            }, {\n                status: 401\n            });\n        }\n        // Generate JWT token\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n            userId: user.id,\n            email: user.email\n        }, JWT_SECRET, {\n            expiresIn: \"7d\"\n        });\n        // Set HTTP-only cookie\n        const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_4__.serialize)(\"token\", token, {\n            httpOnly: true,\n            secure: \"development\" === \"production\",\n            sameSite: \"lax\",\n            path: \"/\",\n            maxAge: 60 * 60 * 24 * 7\n        });\n        console.log(\"Login successful for user:\", email);\n        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: {\n                name: user.name\n            },\n            message: \"Login successful\"\n        }, {\n            status: 200\n        });\n        response.headers.set(\"Set-Cookie\", cookie);\n        return response;\n    } catch (error) {\n        console.error(\"Login error details:\", {\n            message: error.message,\n            stack: error.stack,\n            name: error.name\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Something went wrong. Please try again later.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvZ2luL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyQztBQUNMO0FBQ1Y7QUFDRztBQUNJO0FBRTVCLE1BQU1LLFVBQVUsZ0JBQWdCO0FBRWhDLGVBQWVDLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU1DLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0YsVUFBVTtRQUN6QyxJQUFJLENBQUNBLFlBQVk7WUFDZkcsUUFBUUMsS0FBSyxDQUFDO1lBQ2QsT0FBT1oscURBQVlBLENBQUNhLElBQUksQ0FDdEI7Z0JBQUVDLFNBQVM7WUFBb0QsR0FDL0Q7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNVixRQUFRTSxJQUFJO1FBQzlDRixRQUFRTyxHQUFHLENBQUMsNEJBQTRCRjtRQUV4QyxJQUFJLENBQUNBLFNBQVMsQ0FBQ0MsVUFBVTtZQUN2Qk4sUUFBUU8sR0FBRyxDQUFDO1lBQ1osT0FBT2xCLHFEQUFZQSxDQUFDYSxJQUFJLENBQ3RCO2dCQUFFQyxTQUFTO1lBQWtDLEdBQzdDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNSSxPQUFPLE1BQU1sQixtREFBTUEsQ0FBQ2tCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQ3hDQyxPQUFPO2dCQUFFTCxPQUFPQSxNQUFNTSxXQUFXO1lBQUc7UUFDdEM7UUFFQSxJQUFJLENBQUNILE1BQU07WUFDVFIsUUFBUU8sR0FBRyxDQUFDLG1CQUFtQkY7WUFDL0IsT0FBT2hCLHFEQUFZQSxDQUFDYSxJQUFJLENBQ3RCO2dCQUFFQyxTQUFTO1lBQTRCLEdBQ3ZDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNUSxrQkFBa0IsTUFBTXJCLHFEQUFjLENBQUNlLFVBQVVFLEtBQUtGLFFBQVE7UUFDcEUsSUFBSSxDQUFDTSxpQkFBaUI7WUFDcEJaLFFBQVFPLEdBQUcsQ0FBQyw4QkFBOEJGO1lBQzFDLE9BQU9oQixxREFBWUEsQ0FBQ2EsSUFBSSxDQUN0QjtnQkFBRUMsU0FBUztZQUE0QixHQUN2QztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEscUJBQXFCO1FBQ3JCLE1BQU1VLFFBQVF0Qix3REFBUSxDQUNwQjtZQUFFd0IsUUFBUVIsS0FBS1MsRUFBRTtZQUFFWixPQUFPRyxLQUFLSCxLQUFLO1FBQUMsR0FDckNSLFlBQ0E7WUFBRXFCLFdBQVc7UUFBSztRQUdwQix1QkFBdUI7UUFDdkIsTUFBTUMsU0FBUzFCLGlEQUFTQSxDQUFDLFNBQVNxQixPQUFPO1lBQ3ZDTSxVQUFVO1lBQ1ZDLFFBQVF2QixrQkFBeUI7WUFDakN3QixVQUFVO1lBQ1ZDLE1BQU07WUFDTkMsUUFBUSxLQUFLLEtBQUssS0FBSztRQUN6QjtRQUVBeEIsUUFBUU8sR0FBRyxDQUFDLDhCQUE4QkY7UUFFMUMsTUFBTW9CLFdBQVdwQyxxREFBWUEsQ0FBQ2EsSUFBSSxDQUNoQztZQUFFTSxNQUFNO2dCQUFFa0IsTUFBTWxCLEtBQUtrQixJQUFJO1lBQUM7WUFBR3ZCLFNBQVM7UUFBbUIsR0FDekQ7WUFBRUMsUUFBUTtRQUFJO1FBRWhCcUIsU0FBU0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBY1Q7UUFDbkMsT0FBT007SUFFVCxFQUFFLE9BQU94QixPQUFPO1FBQ2RELFFBQVFDLEtBQUssQ0FBQyx3QkFBd0I7WUFDcENFLFNBQVNGLE1BQU1FLE9BQU87WUFDdEIwQixPQUFPNUIsTUFBTTRCLEtBQUs7WUFDbEJILE1BQU16QixNQUFNeUIsSUFBSTtRQUNsQjtRQUNBLE9BQU9yQyxxREFBWUEsQ0FBQ2EsSUFBSSxDQUN0QjtZQUFFQyxTQUFTO1FBQWdELEdBQzNEO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1zZWNvbmQvLi9hcHAvYXBpL2xvZ2luL3JvdXRlLmpzPzdhOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9wcmlzbWEnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSAnY29va2llJztcclxuXHJcbmV4cG9ydCBjb25zdCBkeW5hbWljID0gJ2ZvcmNlLWR5bmFtaWMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBKV1RfU0VDUkVUID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVDtcclxuICAgIGlmICghSldUX1NFQ1JFVCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdKV1RfU0VDUkVUIGVudmlyb25tZW50IHZhcmlhYmxlIGlzIG5vdCBzZXQnKTtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgbWVzc2FnZTogJ0F1dGhlbnRpY2F0aW9uIHNlcnZpY2UgaXMgbm90IHByb3Blcmx5IGNvbmZpZ3VyZWQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coJ0xvZ2luIGF0dGVtcHQgZm9yIGVtYWlsOicsIGVtYWlsKTtcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnTWlzc2luZyBlbWFpbCBvciBwYXNzd29yZCcpO1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBtZXNzYWdlOiAnRW1haWwgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZCcgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1VzZXIgbm90IGZvdW5kOicsIGVtYWlsKTtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgbWVzc2FnZTogJ0ludmFsaWQgbG9naW4gY3JlZGVudGlhbHMnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNQYXNzd29yZFZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgcGFzc3dvcmQgZm9yIHVzZXI6JywgZW1haWwpO1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBtZXNzYWdlOiAnSW52YWxpZCBsb2dpbiBjcmVkZW50aWFscycgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAxIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBKV1QgdG9rZW5cclxuICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oXHJcbiAgICAgIHsgdXNlcklkOiB1c2VyLmlkLCBlbWFpbDogdXNlci5lbWFpbCB9LFxyXG4gICAgICBKV1RfU0VDUkVULFxyXG4gICAgICB7IGV4cGlyZXNJbjogJzdkJyB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNldCBIVFRQLW9ubHkgY29va2llXHJcbiAgICBjb25zdCBjb29raWUgPSBzZXJpYWxpemUoJ3Rva2VuJywgdG9rZW4sIHtcclxuICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcclxuICAgICAgc2FtZVNpdGU6ICdsYXgnLFxyXG4gICAgICBwYXRoOiAnLycsXHJcbiAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogNywgLy8gNyBkYXlzXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnTG9naW4gc3VjY2Vzc2Z1bCBmb3IgdXNlcjonLCBlbWFpbCk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyB1c2VyOiB7IG5hbWU6IHVzZXIubmFtZSB9LCBtZXNzYWdlOiAnTG9naW4gc3VjY2Vzc2Z1bCcgfSxcclxuICAgICAgeyBzdGF0dXM6IDIwMCB9XHJcbiAgICApO1xyXG4gICAgcmVzcG9uc2UuaGVhZGVycy5zZXQoJ1NldC1Db29raWUnLCBjb29raWUpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignTG9naW4gZXJyb3IgZGV0YWlsczonLCB7XHJcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgIHN0YWNrOiBlcnJvci5zdGFjayxcclxuICAgICAgbmFtZTogZXJyb3IubmFtZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgbWVzc2FnZTogJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiYmNyeXB0Iiwiand0Iiwic2VyaWFsaXplIiwiZHluYW1pYyIsIlBPU1QiLCJyZXF1ZXN0IiwiSldUX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJjb25zb2xlIiwiZXJyb3IiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2ciLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwidG9Mb3dlckNhc2UiLCJpc1Bhc3N3b3JkVmFsaWQiLCJjb21wYXJlIiwidG9rZW4iLCJzaWduIiwidXNlcklkIiwiaWQiLCJleHBpcmVzSW4iLCJjb29raWUiLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIiwicGF0aCIsIm1heEFnZSIsInJlc3BvbnNlIiwibmFtZSIsImhlYWRlcnMiLCJzZXQiLCJzdGFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/login/route.js\n");

/***/ }),

/***/ "(rsc)/./app/lib/prisma.js":
/*!***************************!*\
  !*** ./app/lib/prisma.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.js\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL3ByaXNtYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnQkFBZ0I7QUFDOEI7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUV4QixNQUFNQyxTQUFTRixnQkFBZ0JFLE1BQU0sSUFBSSxJQUFJSCx3REFBWUE7QUFFekQsSUFBSUksSUFBeUIsRUFBY0gsZ0JBQWdCRSxNQUFNLEdBQUdBO0FBRXBFLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1zZWNvbmQvLi9hcHAvbGliL3ByaXNtYS5qcz8wOWQ3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9wcmlzbWEuanNcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcztcclxuXHJcbmNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz8gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/prisma.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/cookie","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CCST-canteen-webpage%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCST-canteen-webpage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();