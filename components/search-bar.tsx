"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, Filter, SortAsc } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// Custom debounce function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

interface SearchBarProps {
  availableTags: string[];
  onSearch: (query: string, tags: string[], sortBy: string) => void;
  initialQuery?: string;
  initialTags?: string[];
  initialSort?: string;
}

export default function SearchBar({
  availableTags,
  onSearch,
  initialQuery = "",
  initialTags = [],
  initialSort = "newest",
}: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);
  const [sortBy, setSortBy] = useState(initialSort);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isTagsOpen, setIsTagsOpen] = useState(false);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchQuery: string, tags: string[], sort: string) => {
      onSearch(searchQuery, tags, sort);
      updateURL(searchQuery, tags, sort);
    }, 300),
    [onSearch]
  );

  // Update URL with search parameters
  const updateURL = (searchQuery: string, tags: string[], sort: string) => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (tags.length > 0) params.set("tags", tags.join(","));
    if (sort !== "newest") params.set("sort", sort);

    const newURL = params.toString() ? `/blog?${params.toString()}` : "/blog";

    router.replace(newURL, { scroll: false });
  };

  // Fetch search suggestions
  const fetchSuggestions = async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `/api/blog/suggestions?q=${encodeURIComponent(searchQuery)}`
      );
      if (response.ok) {
        const data = await response.json();
        setSuggestions(data);
      }
    } catch (error) {
      console.error("Failed to fetch suggestions:", error);
    }
  };

  // Handle search input change
  const handleSearchChange = (value: string) => {
    setQuery(value);
    fetchSuggestions(value);
    setShowSuggestions(true);
    debouncedSearch(value, selectedTags, sortBy);
  };

  // Handle tag selection
  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(newTags);
    debouncedSearch(query, newTags, sortBy);
  };

  // Handle sort change
  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
    debouncedSearch(query, selectedTags, newSort);
  };

  // Clear all filters
  const clearFilters = () => {
    setQuery("");
    setSelectedTags([]);
    setSortBy("newest");
    onSearch("", [], "newest");
    router.replace("/blog", { scroll: false });
  };

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "most_viewed", label: "Most Viewed" },
    { value: "most_liked", label: "Most Liked" },
  ];

  const hasActiveFilters =
    query || selectedTags.length > 0 || sortBy !== "newest";

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search blog posts..."
            value={query}
            onChange={(e) => handleSearchChange(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="pl-10 pr-4 bg-background border border-muted focus:border-primary focus:ring-0 focus:outline-none"
          />
        </div>

        {/* Search Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-2 hover:bg-muted transition-colors text-sm"
                onMouseDown={() => {
                  setQuery(suggestion);
                  setShowSuggestions(false);
                  debouncedSearch(suggestion, selectedTags, sortBy);
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Tag Filter */}
        <Popover open={isTagsOpen} onOpenChange={setIsTagsOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="h-8">
              <Filter className="w-4 h-4 mr-2" />
              Tags {selectedTags.length > 0 && `(${selectedTags.length})`}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Filter by Tags</h4>
              <div className="flex flex-wrap gap-1 max-h-48 overflow-y-auto">
                {availableTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-muted transition-colors"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Sort Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8">
              <SortAsc className="w-4 h-4 mr-2" />
              {sortOptions.find((opt) => opt.value === sortBy)?.label}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {sortOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => handleSortChange(option.value)}
                className={sortBy === option.value ? "bg-muted" : ""}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="h-8"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Active Filter Tags */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
              <button
                onClick={() => toggleTag(tag)}
                className="ml-1 hover:text-destructive"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
