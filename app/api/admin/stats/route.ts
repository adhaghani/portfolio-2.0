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

    // Get blog statistics
    const [
      { count: totalPosts },
      { count: publishedPosts },
      { count: draftPosts },
    ] = await Promise.all([
      supabase.from("blogs").select("*", { count: "exact", head: true }),
      supabase
        .from("blogs")
        .select("*", { count: "exact", head: true })
        .eq("is_published", true),
      supabase
        .from("blogs")
        .select("*", { count: "exact", head: true })
        .eq("is_published", false),
    ]);

    const stats = {
      totalPosts: totalPosts || 0,
      publishedPosts: publishedPosts || 0,
      draftPosts: draftPosts || 0,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
