"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BlogCard from "@/components/blog-card";
import SearchBar from "@/components/search-bar";
import BlogPagination from "@/components/blog-pagination";
import BlogLoadingSkeleton from "@/components/blog-loading-skeleton";
import BlogEmptyState from "@/components/blog-empty-state";
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

  // Check if there are active filters
  const hasActiveFilters =
    Boolean(initialQuery) || initialTags.length > 0 || initialSort !== "newest";

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
      {/* Hero Section */}
      <div className="relative pt-40 pb-20 px-4 overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Latest Blog Posts
          </div>
          <Text
            as="h1"
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Blog Posts
          </Text>
          <Text
            as="p"
            styleVariant="muted"
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Discover insights, tutorials, and thoughts on development, design,
            and technology
          </Text>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <SearchBar
              availableTags={availableTags}
              onSearch={handleSearchWithReset}
              initialQuery={initialQuery}
              initialTags={initialTags}
              initialSort={initialSort}
            />
          </div>
        </div>

        {/* Results Count and Sort */}
        <div className="mb-8 flex justify-between items-center">
          <Text as="p" styleVariant="muted" className="text-sm">
            {loading
              ? "Searching..."
              : `${pagination.total} post${
                  pagination.total !== 1 ? "s" : ""
                } found`}
          </Text>
          {!loading && blogs.length > 0 && (
            <div className="text-xs text-muted-foreground">
              Page {pagination.page} of {pagination.totalPages}
            </div>
          )}
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {blogs.map((blog: BlogPost, index: number) => (
            <div
              key={blog.id}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <BlogCard props={blog} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {!loading && pagination.totalPages > 1 && (
          <div className="mt-16">
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
          <BlogEmptyState
            hasFilters={hasActiveFilters}
            onClearFilters={() => handleSearch("", [], "newest", 1)}
          />
        )}

        {/* Loading State */}
        {loading && (
          <div className="space-y-8">
            <BlogLoadingSkeleton count={9} />
            <div className="text-center">
              <div className="relative">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary/20 border-t-primary mx-auto"></div>
                <div
                  className="absolute inset-0 rounded-full h-8 w-8 border-2 border-transparent border-t-primary/40 animate-spin mx-auto"
                  style={{ animationDuration: "0.75s" }}
                ></div>
              </div>
              <Text as="p" styleVariant="muted" className="mt-4">
                Searching posts...
              </Text>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
