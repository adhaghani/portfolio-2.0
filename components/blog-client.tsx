"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BlogCard from "@/components/blog-card";
import SearchBar from "@/components/search-bar";
import BlogPagination from "@/components/blog-pagination";
import { Text } from "@/components/ui/text";

interface BlogPost {
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

interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface BlogClientProps {
  initialBlogs: BlogPost[];
  availableTags: string[];
}

export default function BlogClient({
  initialBlogs,
  availableTags,
}: BlogClientProps) {
  const searchParams = useSearchParams();
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    limit: 9,
    total: initialBlogs.length,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });

  // Get initial search parameters from URL
  const initialQuery = searchParams.get("q") || "";
  const initialTags =
    searchParams.get("tags")?.split(",").filter(Boolean) || [];
  const initialSort = searchParams.get("sort") || "newest";
  const initialPage = parseInt(searchParams.get("page") || "1");

  // Search function
  const handleSearch = async (
    query: string,
    tags: string[],
    sortBy: string,
    page: number = 1
  ) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (query) params.set("q", query);
      if (tags.length > 0) params.set("tags", tags.join(","));
      if (sortBy !== "newest") params.set("sort", sortBy);
      if (page > 1) params.set("page", page.toString());

      const response = await fetch(`/api/blog/search?${params.toString()}`);
      if (response.ok) {
        const result = await response.json();
        setBlogs(result.data);
        setPagination(result.pagination);
      }
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle pagination change
  const handlePageChange = (newPage: number) => {
    handleSearch(initialQuery, initialTags, initialSort, newPage);
  };

  // Perform initial search if there are URL parameters
  useEffect(() => {
    if (
      initialQuery ||
      initialTags.length > 0 ||
      initialSort !== "newest" ||
      initialPage > 1
    ) {
      handleSearch(initialQuery, initialTags, initialSort, initialPage);
    }
  }, []);

  // Update SearchBar to handle pagination reset
  const handleSearchWithReset = (
    query: string,
    tags: string[],
    sortBy: string
  ) => {
    handleSearch(query, tags, sortBy, 1); // Always reset to page 1 on new search
  };

  return (
    <>
      <div className="pt-40 py-20 px-4">
        <Text as="h1" className="text-center">
          Blog Posts
        </Text>
        <Text as="p" styleVariant="muted" className="text-center">
          Search and explore my blog posts
        </Text>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            availableTags={availableTags}
            onSearch={handleSearchWithReset}
            initialQuery={initialQuery}
            initialTags={initialTags}
            initialSort={initialSort}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <Text as="p" styleVariant="muted" className="text-sm">
            {loading
              ? "Searching..."
              : `${pagination.total} post${
                  pagination.total !== 1 ? "s" : ""
                } found`}
          </Text>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog: BlogPost) => (
            <BlogCard key={blog.id} props={blog} />
          ))}
        </div>

        {/* Pagination */}
        {!loading && pagination.totalPages > 1 && (
          <div className="mt-12">
            <BlogPagination
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              hasNextPage={pagination.hasNextPage}
              hasPrevPage={pagination.hasPrevPage}
              total={pagination.total}
              limit={pagination.limit}
            />
          </div>
        )}

        {/* No Results */}
        {!loading && blogs.length === 0 && (
          <div className="text-center py-20">
            <Text as="p" styleVariant="muted">
              No blog posts found matching your criteria.
            </Text>
            <Text as="p" styleVariant="muted" className="text-sm mt-2">
              Try adjusting your search terms or clearing the filters.
            </Text>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <Text as="p" styleVariant="muted" className="mt-4">
              Searching posts...
            </Text>
          </div>
        )}
      </div>
    </>
  );
}
