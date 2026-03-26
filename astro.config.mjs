// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Integración CDG",
			sidebar: [
				{
					label: 'Iniciando',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Guías',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Referencia',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
