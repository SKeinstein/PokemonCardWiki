import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const auth = req.cookies.get("site-auth");

    // Allow access to login page and auth API without password
    if (
        req.nextUrl.pathname === "/login" ||
        req.nextUrl.pathname.startsWith("/api/auth")
    ) {
        // If already authenticated, redirect from login to home
        if (req.nextUrl.pathname === "/login" && auth?.value === "authenticated") {
            return NextResponse.redirect(new URL("/", req.url));
        }
        return NextResponse.next();
    }

    // If not authenticated, redirect to login
    if (auth?.value !== "authenticated") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // Match all paths except static files and Next.js internals
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
