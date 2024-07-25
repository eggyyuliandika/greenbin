import { WasteForm } from "@/components/waste/form";
import Header from "@/components/waste/header";
import WasteList from "@/components/waste/tables";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Waste() {
  const supabase = createClient();

  const { data: waste } = await supabase.from("waste").select();

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
        <WasteForm />
        <WasteList waste={waste ?? []} />
      </div>
    </div>
   
  );
}
