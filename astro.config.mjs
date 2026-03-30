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
						{
							label: 'Flujo básico',
							autogenerate: { directory: 'guides/basic-flow' },
							collapsed: false,
						},
						{
							label: 'Flujo 3ppi',
							autogenerate: { directory: 'guides/3ppi-flow' },
							collapsed: false,
						},
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
