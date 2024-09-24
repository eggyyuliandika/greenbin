import { VoucherForm } from "@/components/voucher/form";
import Header from "@/components/header";
import VoucherList from "@/components/voucher/tables";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Voucher() {
  const supabase = createClient();
  const { data: voucher } = await supabase.from("voucher").select();
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
          <VoucherForm />
          <VoucherList voucher={voucher ?? []} />
        </div>
      </div>
    </div>
  );
}
