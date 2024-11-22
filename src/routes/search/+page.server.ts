import { redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		let response = await fetch('/api/generate-links', {
			method: 'POST',
			body: JSON.stringify({ type: data.get('type'), id: data.get('id') })
		});
		response = await response.json();

		redirect(302, ('/' + response.data.id))
	},
} satisfies Actions;
