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
							label: 'Flujo PISP',
							collapsed: false,
							items: [
								{
									label: 'Introducción',
									link: '/guides/pisp-flow/introduction',
								},
								{
									label: 'Dar de alta un cliente',
									autogenerate: { directory: 'guides/pisp-flow/onboarding' },
									collapsed: true,
								},
								{
									label: 'Operaciones',
									autogenerate: { directory: 'guides/pisp-flow/operations' },
									collapsed: true,
								}
							],
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
