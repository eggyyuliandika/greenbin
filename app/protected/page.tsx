import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/header";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <div className="py-6 font-bold bg-purple-950 text-center">
          This is a protected page that you can only see as an authenticated
          user
        </div>
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
        </main>
      </div>
    </div>
  );
}
