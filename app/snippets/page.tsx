"use client";

import { Text } from "@/components/ui/text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { snippets } from "@/constant/snippets";
import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";

export default function SnippetsPage() {
  return (
    <div className="py-24 px-4 min-h-screen">
      <BlurFade inView>
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Text as="h1" className="text-4xl font-bold mb-4">
              Code Snippets
            </Text>
            <Text as="p" styleVariant="muted" className="max-w-2xl mx-auto">
              A collection of useful code blocks, hooks, and utilities I use across my projects.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {snippets.map((snippet, idx) => (
              <BlurFade key={snippet.id} delay={idx * 0.1} inView>
                <Link href={`/snippets/${snippet.slug}`}>
                  <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Code className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="capitalize">
                          {snippet.language}
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {snippet.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Text
                        as="p"
                        styleVariant="muted"
                        className="text-sm line-clamp-3"
                      >
                        {snippet.description}
                      </Text>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {snippet.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
