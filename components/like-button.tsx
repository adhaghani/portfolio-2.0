"use client";

import React, { useState, useTransition, useEffect } from "react";
import { Heart } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

interface LikeButtonProps {
  blogId: string;
  initialLikes: number;
  className?: string;
}

const LikeButton = ({
  blogId,
  initialLikes,
  className = "",
}: LikeButtonProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Check if user has already liked this post
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    setIsLiked(likedPosts.includes(blogId));
  }, [blogId]);

  const handleLike = async () => {
    if (isPending) return;

    startTransition(async () => {
      try {
        const supabase = createClient();

        // Get current liked posts from localStorage
        const likedPosts = JSON.parse(
          localStorage.getItem("likedPosts") || "[]"
        );
        const wasLiked = likedPosts.includes(blogId);

        // Calculate new like count
        const newLikes = wasLiked ? likes - 1 : likes + 1;

        // Optimistic update
        setLikes(newLikes);
        setIsLiked(!wasLiked);

        // Update localStorage
        let updatedLikedPosts;
        if (wasLiked) {
          updatedLikedPosts = likedPosts.filter((id: string) => id !== blogId);
        } else {
          updatedLikedPosts = [...likedPosts, blogId];
        }
        localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));

        // Update in database
        const { error } = await supabase
          .from("blogs")
          .update({ likes: newLikes })
          .eq("id", blogId);

        if (error) {
          // Revert on error
          setLikes(likes);
          setIsLiked(wasLiked);
          localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
          console.error("Error updating likes:", error);
        }
      } catch (error) {
        // Revert on error
        setLikes(likes);
        setIsLiked(isLiked);
        console.error("Error updating likes:", error);
      }
    });
  };

  return (
    <button
      onClick={handleLike}
      disabled={isPending}
      className={`
        inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium
        transition-all duration-200 transform active:scale-95
        ${
          isLiked
            ? "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400 shadow-sm"
            : "bg-card border text-muted-foreground hover:bg-accent hover:text-foreground"
        }
        ${
          isPending
            ? "opacity-70 cursor-not-allowed"
            : "hover:shadow-sm cursor-pointer"
        }
        ${className}
      `}
      aria-label={`${isLiked ? "Unlike" : "Like"} this post`}
    >
      <Heart
        className={`w-4 h-4 transition-all duration-200 ${
          isLiked ? "fill-current scale-110" : "scale-100"
        }`}
      />
      <span>{likes.toLocaleString()}</span>
      {isPending && (
        <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin ml-1" />
      )}
    </button>
  );
};

export default LikeButton;
