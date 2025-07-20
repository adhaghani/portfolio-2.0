import React from "react";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, PenTool, Coffee } from "lucide-react";

interface BlogEmptyStateProps {
  hasFilters?: boolean;
  onClearFilters?: () => void;
}

export default function BlogEmptyState({
  hasFilters = false,
  onClearFilters,
}: BlogEmptyStateProps) {
  const suggestions = [
    { icon: BookOpen, text: "React", description: "Frontend development" },
    { icon: PenTool, text: "Design", description: "UI/UX insights" },
    { icon: Coffee, text: "Tech", description: "Technology trends" },
  ];

  if (hasFilters) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
          <Search className="w-12 h-12 text-muted-foreground" />
        </div>
        <Text as="h3" className="text-xl font-semibold mb-3">
          No blog posts found
        </Text>
        <Text as="p" styleVariant="muted" className="mb-6 max-w-md mx-auto">
          No blog posts found matching your criteria. Try adjusting your search
          terms or clearing the filters.
        </Text>
        {onClearFilters && (
          <Button
            onClick={onClearFilters}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Clear All Filters
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="text-center py-20">
      <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
        <BookOpen className="w-16 h-16 text-primary" />
      </div>

      <Text as="h3" className="text-2xl font-semibold mb-4">
        No blog posts yet
      </Text>

      <Text
        as="p"
        styleVariant="muted"
        className="mb-8 max-w-lg mx-auto text-lg"
      >
        This blog is just getting started! Check back soon for insights on
        development, design, and technology.
      </Text>

      <div className="max-w-md mx-auto">
        <Text as="p" styleVariant="muted" className="text-sm mb-4">
          In the meantime, here are some topics you might find interesting:
        </Text>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {suggestions.map((suggestion, index) => {
            const Icon = suggestion.icon;
            return (
              <div
                key={index}
                className="p-4 border border-muted rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <Text as="p" className="font-medium text-sm mb-1">
                  {suggestion.text}
                </Text>
                <Text as="p" styleVariant="muted" className="text-xs">
                  {suggestion.description}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
