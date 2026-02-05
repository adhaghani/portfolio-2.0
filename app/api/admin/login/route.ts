import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

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

    if (error || !admin) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Simple raw password comparison - no hashing
    const isValidPassword = password === admin.password;

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _unusedPassword, ...adminData } = admin;

    return NextResponse.json({
      success: true,
      admin: adminData,
      token: token,
      message: "Login successful",
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Admin login error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
