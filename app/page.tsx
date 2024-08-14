"use server";
import Header from "@/components/header";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Sidebar from "@/components/sidebar";

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createClient();

  const { data: waste } = await supabase.from("waste").select();

  return (
    <div className="flex">
      <Sidebar sidebarOpen={false} />
      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        <Header />
      </div>
    </div>
  );
}
