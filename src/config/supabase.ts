import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_APP_ANON_KEY;

const supabase = createClient(
	"https://wjrnfbdtgbxdlzyysujg.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqcm5mYmR0Z2J4ZGx6eXlzdWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3NDY0MjcsImV4cCI6MTk5NzMyMjQyN30.4E9erU7yDObX46GZzGUBFIMSHkvuPgwn3uUtuLQD2S0"
);

export default supabase;
