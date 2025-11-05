// public/supabase/client.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

/**
 * 1. LOCAL DEV → config.js (window.)
 * 2. DEPLOY   → Netlify / Vercel env vars (process.env)
 */
const SUPABASE_URL   = window.SUPABASE_URL   ?? process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;

console.log('DEBUG: SUPABASE_URL:', SUPABASE_URL);
console.log('DEBUG: ANON_KEY length:', SUPABASE_ANON_KEY?.length ?? 'undefined');

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error(
        'Supabase config missing!\n' +
        ' • Local:  Kiểm tra <script src="/scripts/config.js">\n' +
        ' • Deploy: Kiểm tra Environment Variables trên Netlify/Vercel'
    );
    throw new Error('Supabase config missing');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabase = supabase;          // để các file khác dùng window.supabase
export { supabase };