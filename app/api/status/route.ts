import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const status = {
    database: "unknown",
    api: "operational",
    timestamp: new Date().toISOString(),
  };

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("blogs").select("count").limit(1).single();
    
    if (!error) {
      status.database = "operational";
    } else {
      status.database = "degraded";
    }
  } catch (error) {
    status.database = "down";
  }

  return NextResponse.json(status);
}
