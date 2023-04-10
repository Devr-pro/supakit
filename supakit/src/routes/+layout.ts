// src/routes/+layout.ts
import { invalidate } from '$app/navigation';
import {
  PUBLIC_ANON_KEY,
  PUBLIC_URL
} from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  depends('supabase:auth');

  const supabase = createSupabaseLoadClient({
    supabaseUrl: PUBLIC_URL,
    supabaseKey: PUBLIC_ANON_KEY,
    event: { fetch },
    serverSession: data.session
  });

  const {
    data: { session }
  } = await supabase.auth.getSession();

  return { supabase, session };
};