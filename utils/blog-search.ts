import { createClient } from "@/utils/supabase/server";

export interface SearchFilters {
  query?: string;
  tags?: string[];
  sortBy?: "newest" | "oldest" | "most_viewed" | "most_liked";
  page?: number;
  limit?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  cover_image_url: string | null;
  published_at: string | null;
  is_published: boolean;
  tags: string[] | null;
  views: number;
  likes: number;
  created_at: string;
  updated_at: string;
}

export interface PaginatedResult<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export async function searchBlogs(
  filters: SearchFilters = {}
): Promise<PaginatedResult<BlogPost>> {
  const supabase = await createClient();

  const page = filters.page || 1;
  const limit = filters.limit || 9; // 3x3 grid by default
  const offset = (page - 1) * limit;

  let query = supabase
    .from("blogs")
    .select("*", { count: "exact" })
    .eq("is_published", true);
  let countQuery = supabase
    .from("blogs")
    .select("*", { count: "exact", head: true })
    .eq("is_published", true);

  // Full-text search
  if (filters.query && filters.query.trim()) {
    const searchConfig = {
      type: "websearch" as const,
      config: "english",
    };
    query = query.textSearch(
      "search_vector",
      filters.query.trim(),
      searchConfig
    );
    countQuery = countQuery.textSearch(
      "search_vector",
      filters.query.trim(),
      searchConfig
    );
  }

  // Tag filtering
  if (filters.tags && filters.tags.length > 0) {
    query = query.overlaps("tags", filters.tags);
    countQuery = countQuery.overlaps("tags", filters.tags);
  }

  // Sorting
  switch (filters.sortBy) {
    case "oldest":
      query = query.order("published_at", { ascending: true });
      break;
    case "most_viewed":
      query = query.order("views", { ascending: false });
      break;
    case "most_liked":
      query = query.order("likes", { ascending: false });
      break;
    case "newest":
    default:
      query = query.order("published_at", { ascending: false });
      break;
  }

  // Apply pagination
  query = query.range(offset, offset + limit - 1);

  // Execute queries
  const [{ data, error, count }, { count: totalCount, error: countError }] =
    await Promise.all([query, countQuery]);

  if (error || countError) {
    console.error("Search error:", error || countError);
    return {
      data: [],
      pagination: {
        page,
        limit,
        total: 0,
        totalPages: 0,
        hasNextPage: false,
        hasPrevPage: false,
      },
    };
  }

  const total = totalCount || 0;
  const totalPages = Math.ceil(total / limit);

  return {
    data: data || [],
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  };
}

// Simplified function for getting initial blog data without pagination
export async function getInitialBlogs(limit: number = 9): Promise<BlogPost[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching initial blogs:", error);
    return [];
  }

  return data || [];
}

export async function getAllTags(): Promise<string[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blogs")
    .select("tags")
    .eq("is_published", true);

  if (error) {
    console.error("Error fetching tags:", error);
    return [];
  }

  // Extract and flatten all unique tags
  const allTags =
    data
      ?.filter((blog) => blog.tags && blog.tags.length > 0)
      .flatMap((blog) => blog.tags || [])
      .filter((tag, index, array) => array.indexOf(tag) === index)
      .sort() || [];

  return allTags;
}

export async function getSearchSuggestions(query: string): Promise<string[]> {
  if (!query || query.length < 2) return [];

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blogs")
    .select("title")
    .eq("is_published", true)
    .ilike("title", `%${query}%`)
    .limit(5);

  if (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }

  return data?.map((blog) => blog.title) || [];
}
