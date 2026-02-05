"use client";

import { snippets } from "@/constant/snippets";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/components/markdown-renderer";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Code, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { use, useState, useEffect } from "react";

export default function SnippetDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  if (!slug) return null;

  const snippet = snippets.find((s) => s.slug === slug);

  if (!snippet) {
    notFound();
  }

  const markdownContent = `
\`\`\`${snippet.language}
${snippet.code}
\`\`\`
  `;

  return (
    <div className="py-24 px-4 min-h-screen">
      <BlurFade inView>
        <div className="container mx-auto max-w-4xl">
          <Link href="/snippets">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-0 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Snippets
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <Badge variant="outline" className="capitalize">
                {snippet.language}
              </Badge>
            </div>
            
            <Text as="h1" className="text-3xl md:text-5xl font-bold mb-4">
              {snippet.title}
            </Text>
            
            <Text as="p" styleVariant="muted" className="text-lg md:text-xl">
              {snippet.description}
            </Text>

            <div className="flex flex-wrap gap-2 mt-6">
              {snippet.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <MarkdownRenderer content={markdownContent} />
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
