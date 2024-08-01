import { Database } from "./supabase";

export type Waste = Database["public"]["Tables"]["waste"]["Row"];
export type TypeOfWaste = Database["public"]["Tables"]["type_of_waste"]["Row"];
export type Mission = Database["public"]["Tables"]["mission"]["Row"];
export type MissionRedeem =
  Database["public"]["Tables"]["mission_redeem"]["Row"];
export type Voucher = Database["public"]["Tables"]["voucher"]["Row"];
export type VoucherRedeem =
  Database["public"]["Tables"]["voucher_redeem"]["Row"];
  export type WasteExchange =
    Database["public"]["Tables"]["waste_exchange"]["Row"];
