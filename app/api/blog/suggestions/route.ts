import { NextRequest, NextResponse } from "next/server";
import { getSearchSuggestions } from "@/utils/blog-search";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json([]);
    }

    const suggestions = await getSearchSuggestions(query);
    return NextResponse.json(suggestions);
  } catch (error) {
    console.error("Search suggestions error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
