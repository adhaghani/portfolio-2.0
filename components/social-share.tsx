"use client";

import React, { useState } from "react";
import { Share2, Linkedin, Twitter, Facebook, Link, Check } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
  variant?: "button" | "icon";
}

const SocialShare = ({
  url,
  title,
  description = "",
  className = "",
  variant = "button",
}: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const shareData = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    description: encodeURIComponent(description),
  };

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareData.url}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.title}&via=yourhandle`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}`,
  };

  const handleShare = (platform: string) => {
    const link = shareLinks[platform as keyof typeof shareLinks];
    if (link) {
      window.open(
        link,
        "_blank",
        "width=600,height=400,scrollbars=yes,resizable=yes"
      );
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Native Web Share API (mobile devices)
  const handleNativeShare = async () => {
    if ("share" in navigator) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    }
  };

  const hasNativeShare = "share" in navigator;

  if (variant === "icon") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className={className}>
            <Share2 className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={() => handleShare("linkedin")}>
            <Linkedin className="w-4 h-4 mr-2 text-blue-600" />
            Share on LinkedIn
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleShare("twitter")}>
            <Twitter className="w-4 h-4 mr-2 text-blue-400" />
            Share on Twitter
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleShare("facebook")}>
            <Facebook className="w-4 h-4 mr-2 text-blue-700" />
            Share on Facebook
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleCopyLink}>
            {copied ? (
              <Check className="w-4 h-4 mr-2 text-green-600" />
            ) : (
              <Link className="w-4 h-4 mr-2" />
            )}
            {copied ? "Copied!" : "Copy Link"}
          </DropdownMenuItem>
          {hasNativeShare && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleNativeShare}>
                <Share2 className="w-4 h-4 mr-2" />
                More Options
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={className}>
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={() => handleShare("linkedin")}>
          <Linkedin className="w-4 h-4 mr-2 text-blue-600" />
          Share on LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("twitter")}>
          <Twitter className="w-4 h-4 mr-2 text-blue-400" />
          Share on Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("facebook")}>
          <Facebook className="w-4 h-4 mr-2 text-blue-700" />
          Share on Facebook
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleCopyLink}>
          {copied ? (
            <Check className="w-4 h-4 mr-2 text-green-600" />
          ) : (
            <Link className="w-4 h-4 mr-2" />
          )}
          {copied ? "Copied!" : "Copy Link"}
        </DropdownMenuItem>
        {hasNativeShare && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleNativeShare}>
              <Share2 className="w-4 h-4 mr-2" />
              More Options
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SocialShare;
