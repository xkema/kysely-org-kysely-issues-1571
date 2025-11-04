/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Kysely } from 'kysely';
import { D1Dialect } from 'kysely-d1';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		// start: update
		const db = new Kysely({
			dialect: new D1Dialect({ database: env.DB }),
		});
		const table_metadata = await db.introspection.getTables();
		// end: update
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
