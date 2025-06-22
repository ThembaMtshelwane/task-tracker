import dotenv from 'dotenv';
dotenv.config();

export const PORT: number = Number(process.env.PORT || 5000)
export const SUPABASE_URL: string = String(process.env.SUPABASE_URL || "")
export const SUPABASE_API_KEY: string = String(process.env.SUPABASE_API_KEY || "");
export const SUPABASE_TABLE_NAME: string = String(
  process.env.SUPABASE_TABLE_NAME || ""
);