"use server";

import { Waste } from "@/types/custom";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addWaste(formData: FormData) {
  const supabase = createClient();
  const text = formData.get("waste") as string | null;

  if (!text) {
    throw new Error("Text is required");
  }

  const typeOfWaste = formData.get("type_of_waste") as string | null;
  if (!typeOfWaste) {
    throw new Error("Type of waste is required");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }

  const { error } = await supabase.from("waste").insert({
    name: text,
    type_of_waste: typeOfWaste,
  });

  if (error) {
    console.log(error);
    throw new Error("Error adding waste");
  }

  revalidatePath("/waste");
}

// const fetchWasteType = async () => {
//   const supabase = createClient();
//   try {
//     const { data, error } = await supabase
//       .from("waste")
//       .select("*, type_of_waste (*)");
//     return data;
//   } catch (error) {
//     console.error("Error fetching waste type:", error);
//     return null;
//   }
// };

// fetchWasteType().then((data) => console.log(data));

export async function deleteWaste(id: number) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User is not logged in");
  }

  const { error } = await supabase.from("waste").delete().match({
    id_waste: id,
  });

  if (error) {
    console.log(error);
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

  // Ensure using correct method for update
  const { error } = await supabase
    .from("waste")
    .update({
      name: waste.name,
      type_of_waste: waste.type_of_waste,
    })
    .match({ id_waste: waste.id_waste });

  if (error) {
    console.log(error);
    throw new Error("Error updating waste");
  }

  revalidatePath("/waste");
}
