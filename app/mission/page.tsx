// "use client";
import { MissionForm } from "@/components/mission/form";
import Header from "@/components/header";
import MissionList from "@/components/mission/tables";
import {createClient} from "@/utils/supabase/server";
import { redirect } from "next/navigation";
// import Modal from "./popup";
// import { useState } from "react";

export default async function Mission() {
  const supabase = createClient();

  const { data: mission } = await supabase.from("mission").select();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  // const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div>
        <Header />
        <MissionForm />
        <MissionList mission={mission ?? []} />
        {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setShowModal(true)}
          >
            Show Popup
          </button>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div> */}
      </div>
    </div>
  );
}
