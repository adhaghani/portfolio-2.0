import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");

    console.log("Admin verification attempt with header:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("No valid authorization header");
      return NextResponse.json(
        { success: false, message: "No token provided" },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    console.log("Extracted token:", token);

    // Parse the simple token format: admin_{id}_{timestamp}
    if (!token || !token.startsWith("admin_")) {
      console.log("Invalid token format");
      return NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 401 }
      );
    }

    // Extract admin ID from token
    const tokenParts = token.split("_");
    if (tokenParts.length !== 3) {
      console.log("Invalid token parts");
      return NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 401 }
      );
    }

    const adminId = tokenParts[1];
    console.log("Verifying admin ID:", adminId);

    const supabase = await createClient();

    // Verify admin exists and is active
    const { data: admin, error } = await supabase
      .from("admins")
      .select("id, email, name, role, is_active")
      .eq("id", adminId)
      .eq("is_active", true)
      .single();

    console.log("Admin verification result:", {
      admin: admin ? { id: admin.id, email: admin.email } : "not found",
      error: error?.message || "no error",
    });

    if (error || !admin) {
      console.log("Admin not found or inactive");
      return NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 401 }
      );
    }

    console.log("Admin verification successful for:", admin.email);

    return NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Token verification error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
