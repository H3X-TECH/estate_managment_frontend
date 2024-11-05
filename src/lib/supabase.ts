import { createClient } from "@supabase/supabase-js";

const SUPABASE_PROJECT_URL = "https://rzdcjvhymyxftphrkahk.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6ZGNqdmh5bXl4ZnRwaHJrYWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MjQ0MDYsImV4cCI6MjA0NjQwMDQwNn0.Jn5CxfJ5cHxMKXf-5JqEkD4nkyQaf4B-bW4lGNvyLtA";

const supabaseClient = createClient(SUPABASE_PROJECT_URL, SUPABASE_API_KEY);

export default supabaseClient;
