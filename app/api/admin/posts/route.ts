import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

async function verifyAdminToken(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.substring(7);

  if (!token || !token.startsWith("admin_")) {
    return null;
  }

  const tokenParts = token.split("_");
  if (tokenParts.length !== 3) {
    return null;
  }

  const adminId = tokenParts[1];
  const supabase = await createClient();

  const { data: admin, error } = await supabase
    .from("admins")
    .select("id, email, name, role, is_active")
    .eq("id", adminId)
    .eq("is_active", true)
    .single();

  if (error || !admin) {
    return null;
  }

  return admin;
}

export async function POST(request: NextRequest) {
  try {
    // Verify admin token
    const admin = await verifyAdminToken(request);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      title,
      slug,
      content,
      excerpt,
      cover_image_url,
      meta_title,
      meta_description,
      tags,
      is_published,
    } = body;

    // Validate required fields
    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Check if slug already exists
    const { data: existingPost } = await supabase
      .from("blogs")
      .select("id")
      .eq("slug", slug)
      .single();

    if (existingPost) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 }
      );
    }

    // Create the blog post
    const { data: newPost, error } = await supabase
      .from("blogs")
      .insert({
        title,
        slug,
        content,
        excerpt,
        cover_image_url,
        meta_title,
        meta_description,
        tags,
        is_published,
        published_at: is_published ? new Date().toISOString() : null,
        views: 0,
        likes: 0,
      })
      .select("id, slug")
      .single();

    if (error) {
      console.error("Error creating post:", error);
      return NextResponse.json(
        { error: "Failed to create post" },
        { status: 500 }
      );
    }

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Post creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
