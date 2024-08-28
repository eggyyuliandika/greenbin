"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { TypeOfWaste } from "@/types/custom";

export async function addTypeOfWaste(formData: FormData) {
  const supabase = createClient();
  const text = formData.get("type_of_waste") as string | null;

  if (!text) {
    throw new Error("Text is required");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }

  const { error } = await supabase.from("type_of_waste").insert({
    name: text,
  });

  if (error) {
    console.log(error);
    throw new Error("Error adding type of waste");
  }

  revalidatePath("/dashboard/type_of_waste");
}

export async function deleteTypeWaste(id: number) {
  const supabase = createClient();
  const { error } = await supabase
    .from("type_of_waste")
    .delete()
    .eq("id_type_of_waste", id);

  if (error) {
    console.error("Error deleting type of waste:", error);
    return false;
  }

  revalidatePath("/dashboard/type_of_waste");
  return true;
}

export async function updateTypeWaste(wasteType: TypeOfWaste) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }

  const { error } = await supabase
    .from("type_of_waste")
    .update({
      name: wasteType.name,
    })
    .match({ id_type_of_waste: wasteType.id_type_of_waste });

  if (error) {
    console.log(error);
    throw new Error("Error updating waste");
  }

  revalidatePath("/dashboard/type_of_waste");
}
