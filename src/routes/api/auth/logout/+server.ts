import type { RequestHandler } from "./$types";
import {redirect, json} from '@sveltejs/kit';

export const POST: RequestHandler = ({cookies}) => {
    cookies.delete('access_token', {path: '/'});
    cookies.delete('refresh_token', {path: '/'});
    throw redirect(303, '/login');

    if (request.headers.get('accept') === 'application/json'){
        return json({ success: true });
    }
}