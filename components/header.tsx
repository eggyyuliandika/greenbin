import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Button } from "./ui/button";
import { signOut } from "@/app/login/action";

export default async function Header() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Greenbin</span>
          </a>
          <div className="flex gap-2">
            <Link href="/waste">Waste</Link>
            <Link href="/waste_type">Waste Type</Link>
            <Link href="/mission">Mission</Link>
            <Link href="/mission_redeem">Mission Redeem</Link>
            <Link href="/voucher">Voucher</Link>
            <Link href="/voucher_redeem">Voucher Redeem</Link>
            <Link href="/waste_exchange">Waste Exchange</Link>
          </div>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {user !== null ? (
            <form action={signOut} className="flex items-center gap-w">
              {/* <p>{user.email}</p> */}
              <Button variant="outline">Sign Out</Button>
            </form>
          ) : (
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
