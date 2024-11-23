import type { ServerLoad } from '@sveltejs/kit';
import { db } from "$lib/server/db.server";

export const load: ServerLoad = async ({ params }) => {
	const id = Number(params.slug);
	const data = await db.links.findUnique({ 
		where: { 
			id: id 
		}
	});
	
	return {
		data
	};
};