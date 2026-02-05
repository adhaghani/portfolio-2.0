"use client";

import { useVisitorCounter } from "@/hooks/use-visitor-counter";
import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function VisitorCounter() {
  const { count, loading } = useVisitorCounter();

  if (loading) return null;

  return (
    <Badge variant="outline" className="gap-2 bg-background/50 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <Users className="w-3 h-3" />
      <span>
        {count} {count === 1 ? "visitor" : "visitors"} online
      </span>
    </Badge>
  );
}
