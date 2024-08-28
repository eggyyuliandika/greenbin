import { MissionForm } from "@/components/mission/form";
import Header from "@/components/header";
import MissionList from "@/components/mission/tables";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";



export default async function Mission() {
  const supabase = createClient();
  const { data: mission } = await supabase.from("mission").select();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div>
      <div>
        <Header />
        <div className="p-10">
          <MissionForm />
          <MissionList mission={mission ?? []} />
        </div>
      </div>
    </div>
  );
}
