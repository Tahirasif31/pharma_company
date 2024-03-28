import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wmzcmqfnwynyzfqqqwfi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtemNtcWZud3lueXpmcXFxd2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MjMyODksImV4cCI6MjAyNzE5OTI4OX0.0jjLXjsQmOnpCb_byBe-jWKQQDJHbX6dx0n2KyTTTWY";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
