import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  try {
    // You'll implement JWT verification here on the backend
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
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
