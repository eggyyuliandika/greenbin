import { WasteForm } from "@/components/waste/form";
import WasteList from "@/components/waste/tables";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Dashboard from "../page";

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
    <Dashboard>
      <div>
        <div>
          <div>
            <WasteForm
              waste={{
                created_at: "",
                id_type_of_waste: null,
                id_waste: 0,
                name: null,
              }}
            />
            <WasteList waste={waste ?? []} />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
