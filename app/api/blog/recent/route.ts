import { NextResponse } from "next/server";
import { getInitialBlogs } from "@/utils/blog-search";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "3");

    const recentPosts = await getInitialBlogs(limit);

    return NextResponse.json({
      success: true,
      data: recentPosts,
    });
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch recent posts",
      },
      { status: 500 }
    );
  }
}
