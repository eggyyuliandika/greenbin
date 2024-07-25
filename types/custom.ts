import { Database } from "./supabase";

export type Waste = Database ["public"]["Tables"]["waste"]["Row"]