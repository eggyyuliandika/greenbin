import Header from "@/components/Header";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createClient();

  const { data: todos } = await supabase.from("todos").select();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <Header />
      </div>
    </div>
  );
}
