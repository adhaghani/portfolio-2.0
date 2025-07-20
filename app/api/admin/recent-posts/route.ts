import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

async function verifyAdminToken(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.substring(7);

  if (!token || !token.startsWith("admin_")) {
    return null;
  }

  const tokenParts = token.split("_");
  if (tokenParts.length !== 3) {
    return null;
  }

  const adminId = tokenParts[1];
  const supabase = await createClient();

  const { data: admin, error } = await supabase
    .from("admins")
    .select("id, email, name, role, is_active")
    .eq("id", adminId)
    .eq("is_active", true)
    .single();

  if (error || !admin) {
    return null;
  }

  return admin;
}

export async function GET(request: NextRequest) {
  try {
    // Verify admin token
    const admin = await verifyAdminToken(request);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = await createClient();

    // Get recent posts
    const { data: recentPosts, error } = await supabase
      .from("blogs")
      .select("id, title, slug, is_published, created_at, views, likes")
      .order("created_at", { ascending: false })
      .limit(5);

    if (error) {
      throw error;
    }

    return NextResponse.json(recentPosts || []);
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
