"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

// Menambahkan voucher baru
export async function addVoucher(formData: FormData) {
  const supabase = createClient();

  // Mengambil data dari FormData
  const sim_card = formData.get("sim_card") as string | null;
  const name = formData.get("name") as string | null;
  const type = formData.get("type") as string | null;
  const stock = parseInt(formData.get("stock") as string); // Parsing to integer
  const periode = formData.get("periode") as string | null;
  const status = formData.get("status") === "true"; // Boolean conversion

  // Validasi input
  if (!sim_card || !name || !type || isNaN(stock) || !periode) {
    throw new Error("All fields are required and stock must be a valid number");
  }

  // Cek apakah user sudah login
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }

  // Insert voucher ke tabel
  const { error } = await supabase.from("voucher").insert({
    sim_card, // String, nomor atau jenis kartu SIM
    name, // Nama voucher
    type, // Tipe voucher
    stock, // Jumlah stock yang tersedia
    periode, // Periode voucher (bisa berupa string yang mengandung informasi periode)
    status, // Boolean, apakah voucher aktif atau tidak
  });

  if (error) {
    console.error("Error adding voucher:", error);
    throw new Error("Error adding voucher");
  }

  // Revalidate halaman untuk menampilkan data terbaru
  revalidatePath("/voucher");
}

// Menghapus voucher berdasarkan ID
export async function deleteVoucher(id: number) {
  const supabase = createClient();
  const { error } = await supabase
    .from("voucher")
    .delete()
    .eq("id_voucher", id); // Sesuaikan dengan primary key dari tabel voucher

  if (error) {
    console.error("Error deleting voucher:", error);
    return false;
  }

  revalidatePath("/voucher");
  return true;
}

// Memperbarui data voucher
export async function updateVoucher(voucher: any) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("voucher")
    .update({
      sim_card: voucher.sim_card, // Mengubah sim_card
      name: voucher.name, // Mengubah nama
      type: voucher.type, // Mengubah tipe
      stock: voucher.stock, // Mengubah stock
      periode: voucher.periode, // Mengubah periode
      status: voucher.status, // Mengubah status (aktif atau tidak)
    })
    .eq("id_voucher", voucher.id_voucher); // ID dari voucher yang diupdate

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
