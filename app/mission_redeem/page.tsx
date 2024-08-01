import { MissionRedeemForm } from "@/components/mission_redeem/form";
import Header from "@/components/header";
import MissionRedeemList from "@/components/mission_redeem/tables";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function MissionRedeem() {
  const supabase = createClient();

  const { data: mission_redeem } = await supabase
    .from("mission_redeem")
    .select();

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
        <MissionRedeemForm />
        <MissionRedeemList mission_redeem={mission_redeem ?? []} />
      </div>
    </div>
  );
}
