"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addWaste(formData: FormData) {
  const supabase = createClient();
  const text = formData.get("waste") as string | null;

  if (!text) {
    throw new Error("Text is required");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }

  const { error } = await supabase.from("waste").insert({
    name: text,
  });

  if (error) {
    console.log(error);
    throw new Error("Error adding waste");
  }

  revalidatePath("/waste");
}

export async function deleteWaste(id: number) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }

  const { error } = await supabase.from("waste").delete();

  if (error) {
    throw new Error("Error delete waste");
  }

  revalidatePath("/waste");
}

export async function updateWaste(waste: Waste) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }

  const { error } = await supabase.from("waste").update(waste).match({
    id: waste.id,
  });

  if (error) {
   
    throw new Error("Error delete waste");
  }


  revalidatePath("/waste");
}
