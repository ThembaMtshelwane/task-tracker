import { createClient } from "@supabase/supabase-js";
import { SUPABASE_API_KEY, SUPABASE_URL } from "../constants/env.constants";

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
export default supabase;
