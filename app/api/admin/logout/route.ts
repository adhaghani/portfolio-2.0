import { NextResponse } from "next/server";
import { AdminAuthClient } from "@/utils/admin-auth-client";

export async function POST() {
  try {
    await AdminAuthClient.logout();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin logout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
