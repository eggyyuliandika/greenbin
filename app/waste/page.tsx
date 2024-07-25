import Header from "@/components/Header";
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
        <h1>waste</h1>
          <pre>{JSON.stringify(waste, null, 3)}</pre>
      </div>
    </div>

  
  );
}
