// libs/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://drpxmxxffhdrmpidgkam.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRycHhteHhmZmhkcm1waWRna2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMDY5MTcsImV4cCI6MjA2MjU4MjkxN30.g_-SUfA8MIqJe7V9fxTv-ikYCwP0Zwj5dXBHlUV2Ar4';

export const supabase = createClient(supabaseUrl, supabaseKey);
