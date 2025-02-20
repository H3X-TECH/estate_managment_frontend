import { createClient } from "@supabase/supabase-js";

const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

const supabaseClient = createClient(SUPABASE_PROJECT_URL, SUPABASE_API_KEY);

export default supabaseClient;
