import { createClient } from '@supabase/supabase-js';

const URL = 'https://frnlrzwmeusfoysdppst.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZybmxyendtZXVzZm95c2RwcHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNTU0MTEsImV4cCI6MjA3MTYzMTQxMX0.htzT88s2t9DRq6hJpwpOrP34Dmss3KiTTM5YP1iyQ64';

export const supabase = createClient(URL, API_KEY);