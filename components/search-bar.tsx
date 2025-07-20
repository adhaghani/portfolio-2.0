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
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <div className="relative group">
          <Input
            type="text"
            placeholder="Search blog posts, topics, or keywords..."
            value={query}
            onChange={(e) => handleSearchChange(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="pl-12 pr-4 h-12 bg-background/80 backdrop-blur-sm border-2 border-muted hover:border-muted-foreground/50 focus:border-primary focus:ring-0 focus:outline-none rounded-xl text-base transition-all duration-200 shadow-sm"
          />
        </div>

        {/* Search Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md border border-muted rounded-xl shadow-xl z-50 overflow-hidden">
            <div className="p-2">
              <div className="text-xs font-medium text-muted-foreground mb-2 px-2">
                Suggestions
              </div>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full text-left px-3 py-2 hover:bg-muted/50 rounded-lg transition-colors text-sm flex items-center gap-2"
                  onMouseDown={() => {
                    setQuery(suggestion);
                    setShowSuggestions(false);
                    debouncedSearch(suggestion, selectedTags, sortBy);
                  }}
                >
                  <Search className="w-3.5 h-3.5 text-muted-foreground" />
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Tag Filter */}
        <Popover open={isTagsOpen} onOpenChange={setIsTagsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 rounded-lg border-2 hover:border-primary/50 transition-all duration-200"
            >
              <Filter className="w-4 h-4 mr-2" />
              Tags{" "}
              {selectedTags.length > 0 && (
                <span className="ml-1 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                  {selectedTags.length}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-80 p-4 rounded-xl border-2"
            align="start"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-sm">Filter by Tags</h4>
                {selectedTags.length > 0 && (
                  <button
                    onClick={() => {
                      setSelectedTags([]);
                      debouncedSearch(query, [], sortBy);
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                {availableTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-muted transition-colors text-xs px-2.5 py-1 rounded-full"
                    onClick={() => toggleTag(tag)}
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Sort Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="h-10 rounded-lg border-2 hover:border-primary/50 transition-all duration-200"
            >
              <SortAsc className="w-4 h-4 mr-2" />
              Sort: {sortOptions.find((opt) => opt.value === sortBy)?.label}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="rounded-xl border-2">
            <DropdownMenuLabel className="text-xs font-semibold">
              Sort by
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {sortOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => handleSortChange(option.value)}
                className={`cursor-pointer rounded-lg ${
                  sortBy === option.value
                    ? "bg-primary/10 text-primary font-medium"
                    : ""
                }`}
              >
                {option.label}
                {sortBy === option.value && <span className="ml-auto">✓</span>}
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
            className="h-10 text-muted-foreground hover:text-foreground transition-colors rounded-lg"
          >
            <X className="w-4 h-4 mr-2" />
            Clear all
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {(selectedTags.length > 0 || query) && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            Active filters:
          </span>

          {query && (
            <Badge variant="secondary" className="gap-1 rounded-full">
              Search: "{query}"
              <button
                onClick={() => {
                  setQuery("");
                  debouncedSearch("", selectedTags, sortBy);
                }}
                className="hover:bg-muted-foreground/20 rounded-full p-0.5 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}

          {selectedTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="gap-1 rounded-full">
              #{tag}
              <button
                onClick={() => toggleTag(tag)}
                className="hover:bg-muted-foreground/20 rounded-full p-0.5 transition-colors"
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
