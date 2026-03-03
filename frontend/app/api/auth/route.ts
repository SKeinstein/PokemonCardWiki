import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const sitePassword = process.env.SITE_PASSWORD || "pokemon";

  if (password === sitePassword) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("site-auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    return res;
  }

  return NextResponse.json({ ok: false, error: "Invalid password" }, { status: 401 });
}
