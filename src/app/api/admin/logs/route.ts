// import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!,
// );

// export async function GET(req: Request) {
//   // Basic Security: Check for a custom header/secret to prevent public access
//   const authHeader = req.headers.get("x-admin-secret");
//   if (authHeader !== process.env.ADMIN_SECRET_KEY) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const { data, error } = await supabase
//     .from("chat_logs")
//     .select("*")
//     .order("created_at", { ascending: false });

//   if (error)
//     return NextResponse.json({ error: error.message }, { status: 500 });

//   return NextResponse.json(data);
// }

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("x-admin-secret");

    // --- FIX: Check both server-side and client-side keys for local dev compatibility ---
    const validKey =
      process.env.ADMIN_SECRET_KEY || process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY;

    if (!authHeader || authHeader !== validKey) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data, error } = await supabase
      .from("chat_logs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase Fetch Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Admin Logs API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
