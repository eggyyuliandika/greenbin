"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addMission(formData: FormData) {
  const supabase = createClient();
  const name = formData.get("mission") as string | null;
  const brand = formData.get("brand") as string | null;
  const periode = formData.get("periode") as string | null;
  const amount = parseFloat(formData.get("amount") as string); // Parsing to number
  const status = formData.get("status") === "true"; // Boolean conversion

  // Validasi input
  if (!name || !brand || !periode || isNaN(amount)) {
    throw new Error(
      "All fields are required and amount must be a valid number"
    );
  }

  // Cek user login
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }

  // Insert misi ke tabel
  const { error } = await supabase.from("mission").insert({
    name,
    brand,
    periode, // Pastikan ini format string (bisa berupa tanggal atau periode tertentu)
    amount, // Nilai numerik
    status, // Boolean, apakah misi aktif atau tidak
  });

  if (error) {
    console.log("Error adding mission:", error);
    throw new Error("Error adding mission");
  }

  // Revalidate halaman untuk menampilkan data terbaru
  revalidatePath("/mission");
}

export async function deleteMission(id: number) {
  const supabase = createClient();
  const { error } = await supabase
    .from("mission")
    .delete()
    .eq("id_mission", id);

  if (error) {
    console.error("Error deleting mission:", error);
    return false;
  }

  revalidatePath("/mission");
  return true;
}

export async function updateMission(mission: any) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("mission")
    .update({
      name: mission.name,
      brand: mission.brand,
      periode: mission.periode,
      amount: mission.amount,
      status: mission.status,
    })
    .eq("id_mission", mission.id_mission);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
