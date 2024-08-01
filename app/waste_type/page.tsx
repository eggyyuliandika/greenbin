import { TypeOfWasteForm } from "@/components/type_of_waste/form";
import Header from "@/components/header";
import TypeOfWasteList from "@/components/type_of_waste/tables";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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
    <div>
      <div>
        <Header />
        <TypeOfWasteForm />
        <TypeOfWasteList type_of_waste={type_of_waste ?? []} />
      </div>
    </div>
  );
}
