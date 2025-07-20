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

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Verify admin token
    const admin = await verifyAdminToken(request);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const resolvedParams = await params;
    const body = await request.json();
    const supabase = await createClient();

    // Update the blog post
    const { data, error } = await supabase
      .from("blogs")
      .update({
        ...body,
        updated_at: new Date().toISOString(),
      })
      .eq("id", resolvedParams.id)
      .select("id")
      .single();

    if (error) {
      console.error("Error updating post:", error);
      return NextResponse.json(
        { error: "Failed to update post" },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Post update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Verify admin token
    const admin = await verifyAdminToken(request);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const resolvedParams = await params;
    const supabase = await createClient();

    // Delete the blog post
    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", resolvedParams.id);

    if (error) {
      console.error("Error deleting post:", error);
      return NextResponse.json(
        { error: "Failed to delete post" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Post deletion error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
