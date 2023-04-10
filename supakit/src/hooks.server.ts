// src/hooks.server.ts
import {
    PUBLIC_URL,
    PUBLIC_ANON_KEY
} from '$env/static/public';
import { createSupabaseServerClient   } from '@supabase/auth-helpers-sveltekit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    let typearr=["css","font","js"]
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: PUBLIC_URL,
        supabaseKey: PUBLIC_ANON_KEY,
        event
    });

    event.locals.getSession = async () => {
        const {
            data: { session }
        } = await event.locals.supabase.auth.getSession();
        return session;
    };

    return resolve(event, {
		preload: ({ type }) => typearr.includes(type)
	});
};