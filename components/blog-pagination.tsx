"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  total: number;
  limit: number;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
  total,
  limit,
}: BlogPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Create a new URL with updated page parameter
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page"); // Remove page param for page 1 to keep URLs clean
    } else {
      params.set("page", page.toString());
    }
    return `/blog${params.toString() ? `?${params.toString()}` : ""}`;
  };

  // Navigate to page
  const navigateToPage = (page: number) => {
    const url = createPageUrl(page);
    router.push(url, { scroll: false });
  };

  // Calculate result range
  const startResult = (currentPage - 1) * limit + 1;
  const endResult = Math.min(currentPage * limit, total);

  // Generate page numbers to display
  const getVisiblePages = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    // Always include first page
    if (totalPages > 1) {
      range.push(1);
    }

    // Calculate the range around current page
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    // Always include last page if there are multiple pages
    if (totalPages > 1) {
      range.push(totalPages);
    }

    // Remove duplicates and sort
    const uniqueRange = [...new Set(range)].sort((a, b) => a - b);

    // Add ellipsis where needed
    let prev = 0;
    for (const page of uniqueRange) {
      if (page - prev > 1) {
        rangeWithDots.push("...");
      }
      rangeWithDots.push(page);
      prev = page;
    }

    return rangeWithDots;
  };

  return (
    <div className="space-y-4">
      {/* Results Info */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-medium text-foreground">{startResult}</span> to{" "}
          <span className="font-medium text-foreground">{endResult}</span> of{" "}
          <span className="font-medium text-foreground">{total}</span> results
        </p>
      </div>

      {/* Pagination Controls */}
      <Pagination>
        <PaginationContent className="gap-1">
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious
              href={hasPrevPage ? createPageUrl(currentPage - 1) : "#"}
              onClick={(e) => {
                if (!hasPrevPage) {
                  e.preventDefault();
                  return;
                }
                e.preventDefault();
                navigateToPage(currentPage - 1);
              }}
              className={`rounded-lg border-2 transition-all duration-200 ${
                hasPrevPage
                  ? "hover:border-primary/50 hover:bg-primary/5"
                  : "opacity-50 cursor-not-allowed hover:bg-transparent hover:border-border"
              }`}
            />
          </PaginationItem>

          {/* Page Numbers */}
          {getVisiblePages().map((page, index) => (
            <PaginationItem key={index}>
              {page === "..." ? (
                <PaginationEllipsis className="text-muted-foreground" />
              ) : (
                <PaginationLink
                  href={createPageUrl(page as number)}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToPage(page as number);
                  }}
                  isActive={currentPage === page}
                  className={`rounded-lg border-2 transition-all duration-200 ${
                    currentPage === page
                      ? "border-primary bg-primary text-primary-foreground font-semibold shadow-md"
                      : "border-transparent hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* Next Button */}
          <PaginationItem>
            <PaginationNext
              href={hasNextPage ? createPageUrl(currentPage + 1) : "#"}
              onClick={(e) => {
                if (!hasNextPage) {
                  e.preventDefault();
                  return;
                }
                e.preventDefault();
                navigateToPage(currentPage + 1);
              }}
              className={`rounded-lg border-2 transition-all duration-200 ${
                hasNextPage
                  ? "hover:border-primary/50 hover:bg-primary/5"
                  : "opacity-50 cursor-not-allowed hover:bg-transparent hover:border-border"
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Quick Navigation for large datasets */}
      {totalPages > 10 && (
        <div className="flex justify-center items-center gap-2 text-sm">
          <span className="text-muted-foreground">Jump to page:</span>
          <select
            value={currentPage}
            onChange={(e) => navigateToPage(parseInt(e.target.value))}
            className="bg-background border border-muted rounded-lg px-3 py-1 text-sm focus:border-primary focus:outline-none transition-colors"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
