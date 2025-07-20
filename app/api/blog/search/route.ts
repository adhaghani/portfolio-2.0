import { NextRequest, NextResponse } from "next/server";
import { searchBlogs, SearchFilters } from "@/utils/blog-search";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const filters: SearchFilters = {
      query: searchParams.get("q") || undefined,
      tags: searchParams.get("tags")?.split(",").filter(Boolean) || undefined,
      sortBy: (searchParams.get("sort") as any) || "newest",
      page: parseInt(searchParams.get("page") || "1"),
      limit: parseInt(searchParams.get("limit") || "9"),
    };

    const result = await searchBlogs(filters);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Blog search error:", error);
    return NextResponse.json(
      {
        data: [],
        pagination: {
          page: 1,
          limit: 9,
          total: 0,
          totalPages: 0,
          hasNextPage: false,
          hasPrevPage: false,
        },
      },
      { status: 500 }
    );
  }
}
