import { TypeOfWasteForm } from "@/components/type_of_waste/form";
import Header from "@/components/header";
import TypeOfWasteList from "@/components/type_of_waste/tables";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Dashboard from "../page";

export default async function TypeOfWaste() {
  const supabase = createClient();
  const { data: type_of_waste } = await supabase.from("type_of_waste").select();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <Dashboard>
      <div>
        <div>
          <div>
            <TypeOfWasteForm />
            <TypeOfWasteList type_of_waste={type_of_waste ?? []} />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
