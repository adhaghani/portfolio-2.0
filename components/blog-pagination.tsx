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

  // Generate page numbers to display
  const getVisiblePages = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    // Calculate the range of pages to show
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    // Add first page and ellipsis if needed
    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    // Add the calculated range (excluding first and last)
    rangeWithDots.push(...range);

    // Add ellipsis and last page if needed
    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  // Don't render pagination if there's only one page or less
  if (totalPages <= 1) {
    return null;
  }

  const startItem = (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, total);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Results summary */}
      <div className="text-sm text-muted-foreground">
        Showing {startItem}-{endItem} of {total} posts
      </div>

      {/* Pagination controls */}
      <Pagination>
        <PaginationContent>
          {/* Previous button */}
          <PaginationItem>
            {hasPrevPage ? (
              <PaginationPrevious
                href={createPageUrl(currentPage - 1)}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(createPageUrl(currentPage - 1));
                }}
              />
            ) : (
              <PaginationPrevious
                className="pointer-events-none opacity-50"
                aria-disabled="true"
              />
            )}
          </PaginationItem>

          {/* Page numbers */}
          {visiblePages.map((page, index) => (
            <PaginationItem key={index}>
              {page === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href={createPageUrl(page as number)}
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(createPageUrl(page as number));
                  }}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* Next button */}
          <PaginationItem>
            {hasNextPage ? (
              <PaginationNext
                href={createPageUrl(currentPage + 1)}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(createPageUrl(currentPage + 1));
                }}
              />
            ) : (
              <PaginationNext
                className="pointer-events-none opacity-50"
                aria-disabled="true"
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
