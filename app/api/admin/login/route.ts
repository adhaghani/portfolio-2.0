import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    console.log("Login attempt for email:", email);

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Find admin by email
    const { data: admin, error } = await supabase
      .from("admins")
      .select("*")
      .eq("email", email)
      .eq("is_active", true)
      .single();

    console.log("Database query result:", {
      admin: admin
        ? {
            id: admin.id,
            email: admin.email,
            name: admin.name,
            hasPassword: !!admin.password,
          }
        : "not found",
      error: error?.message || "no error",
    });

    if (error || !admin) {
      console.log("Admin not found or error:", error?.message);
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Simple raw password comparison - no hashing
    const isValidPassword = password === admin.password;

    console.log("Password check:", {
      provided: password,
      storedPassword: admin.password,
      isValid: isValidPassword,
    });

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Update last login
    await supabase
      .from("admins")
      .update({ last_login: new Date().toISOString() })
      .eq("id", admin.id);

    // Create a simple token (you should implement proper JWT)
    const token = `admin_${admin.id}_${Date.now()}`;

    // Return admin data without password
    const { password: _, ...adminData } = admin;

    console.log("Login successful for:", email);

    return NextResponse.json({
      success: true,
      admin: adminData,
      token: token,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
