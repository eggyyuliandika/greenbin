export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      mission: {
        Row: {
          amount: string | null
          brand: string | null
          created_at: string
          id_mission: number
          id_waste: number | null
          name: string | null
          periode: string | null
          status: Database["public"]["Enums"]["status"] | null
        }
        Insert: {
          amount?: string | null
          brand?: string | null
          created_at?: string
          id_mission?: number
          id_waste?: number | null
          name?: string | null
          periode?: string | null
          status?: Database["public"]["Enums"]["status"] | null
        }
        Update: {
          amount?: string | null
          brand?: string | null
          created_at?: string
          id_mission?: number
          id_waste?: number | null
          name?: string | null
          periode?: string | null
          status?: Database["public"]["Enums"]["status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "mission_id_waste_fkey"
            columns: ["id_waste"]
            isOneToOne: false
            referencedRelation: "waste"
            referencedColumns: ["id_waste"]
          },
        ]
      }
      mission_redeem: {
        Row: {
          amount: number | null
          id_mission: number | null
          id_mission_redeem: number
          id_user: number | null
          id_waste: number | null
          time: string
        }
        Insert: {
          amount?: number | null
          id_mission?: number | null
          id_mission_redeem?: number
          id_user?: number | null
          id_waste?: number | null
          time?: string
        }
        Update: {
          amount?: number | null
          id_mission?: number | null
          id_mission_redeem?: number
          id_user?: number | null
          id_waste?: number | null
          time?: string
        }
        Relationships: [
          {
            foreignKeyName: "mission_redeem_id_mission_fkey"
            columns: ["id_mission"]
            isOneToOne: false
            referencedRelation: "mission"
            referencedColumns: ["id_mission"]
          },
          {
            foreignKeyName: "mission_redeem_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id_user"]
          },
          {
            foreignKeyName: "mission_redeem_id_waste_fkey"
            columns: ["id_waste"]
            isOneToOne: false
            referencedRelation: "waste"
            referencedColumns: ["id_waste"]
          },
        ]
      }
      type_of_waste: {
        Row: {
          id_type_of_waste: number
          name: string | null
        }
        Insert: {
          id_type_of_waste?: number
          name?: string | null
        }
        Update: {
          id_type_of_waste?: number
          name?: string | null
        }
        Relationships: []
      }
      user: {
        Row: {
          email: string | null
          id_user: number
          password: string | null
          phone: string | null
          point: number | null
          position: string | null
          username: string | null
        }
        Insert: {
          email?: string | null
          id_user?: number
          password?: string | null
          phone?: string | null
          point?: number | null
          position?: string | null
          username?: string | null
        }
        Update: {
          email?: string | null
          id_user?: number
          password?: string | null
          phone?: string | null
          point?: number | null
          position?: string | null
          username?: string | null
        }
        Relationships: []
      }
      voucher: {
        Row: {
          id_voucher: number
          name: string | null
          periode: string | null
          sim_card: string | null
          status: Database["public"]["Enums"]["status"] | null
          stock: number | null
          time: string
          type: string | null
        }
        Insert: {
          id_voucher?: number
          name?: string | null
          periode?: string | null
          sim_card?: string | null
          status?: Database["public"]["Enums"]["status"] | null
          stock?: number | null
          time?: string
          type?: string | null
        }
        Update: {
          id_voucher?: number
          name?: string | null
          periode?: string | null
          sim_card?: string | null
          status?: Database["public"]["Enums"]["status"] | null
          stock?: number | null
          time?: string
          type?: string | null
        }
        Relationships: []
      }
      voucher_redeem: {
        Row: {
          amount: number | null
          id_redeem_voucher: number
          id_user: number | null
          id_voucher: number | null
          status: boolean | null
          time: string
        }
        Insert: {
          amount?: number | null
          id_redeem_voucher?: number
          id_user?: number | null
          id_voucher?: number | null
          status?: boolean | null
          time?: string
        }
        Update: {
          amount?: number | null
          id_redeem_voucher?: number
          id_user?: number | null
          id_voucher?: number | null
          status?: boolean | null
          time?: string
        }
        Relationships: [
          {
            foreignKeyName: "voucher_redeem_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id_user"]
          },
          {
            foreignKeyName: "voucher_redeem_id_voucher_fkey"
            columns: ["id_voucher"]
            isOneToOne: false
            referencedRelation: "voucher"
            referencedColumns: ["id_voucher"]
          },
        ]
      }
      waste: {
        Row: {
          created_at: string
          id_type_of_waste: number | null
          id_waste: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id_type_of_waste?: number | null
          id_waste?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id_type_of_waste?: number | null
          id_waste?: number
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "waste_id_type_of_waste_fkey"
            columns: ["id_type_of_waste"]
            isOneToOne: false
            referencedRelation: "type_of_waste"
            referencedColumns: ["id_type_of_waste"]
          },
        ]
      }
      waste_exchange: {
        Row: {
          amount: number | null
          id_user: number | null
          id_waste: number | null
          id_waste_exchange: number
          pickup_address: string | null
          pickup_name: string | null
          pickup_phonenumber: string | null
          pickup_schedule: string | null
          point: number | null
          time: string
        }
        Insert: {
          amount?: number | null
          id_user?: number | null
          id_waste?: number | null
          id_waste_exchange?: number
          pickup_address?: string | null
          pickup_name?: string | null
          pickup_phonenumber?: string | null
          pickup_schedule?: string | null
          point?: number | null
          time?: string
        }
        Update: {
          amount?: number | null
          id_user?: number | null
          id_waste?: number | null
          id_waste_exchange?: number
          pickup_address?: string | null
          pickup_name?: string | null
          pickup_phonenumber?: string | null
          pickup_schedule?: string | null
          point?: number | null
          time?: string
        }
        Relationships: [
          {
            foreignKeyName: "waste_exchange_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id_user"]
          },
          {
            foreignKeyName: "waste_exchange_id_waste_fkey"
            columns: ["id_waste"]
            isOneToOne: false
            referencedRelation: "waste"
            referencedColumns: ["id_waste"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      status: "Active" | "Non Active" | "Expired"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
