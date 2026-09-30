// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://The-Peoples-Clearinghouse.github.io',
  base: 'pch-switch-grpc-clients-doc',
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
									label: 'Consultar cuentas del cliente',
									link: '/guides/pisp-flow/get-customer-accounts-handler',
								},
								{
									label: 'Dar de alta un cliente',
									autogenerate: { directory: 'guides/pisp-flow/onboarding' },
									collapsed: true,
								},
								{
									label: 'Dar de alta un cliente en línea',
									autogenerate: { directory: 'guides/pisp-flow/online-onboarding' },
									collapsed: true,
								},
								{
									label: 'Operaciones',
									autogenerate: { directory: 'guides/pisp-flow/operations' },
									collapsed: true,
								}
							],
						},
						{
							label: 'Pagos offline',
							collapsed: false,
							items: [
								{
									label: 'Introducción',
									link: '/guides/offline-payments/introduction',
								},
								{
									label: 'Reservar fondos para uso offline',
									link: '/guides/offline-payments/offline-funds-reservation-handler',
								},
								{
									label: 'Liquidar un pago offline',
									link: '/guides/offline-payments/settle-offline-transfers-handler',
								},
								{
									label: 'Liberar reserva offline',
									link: '/guides/offline-payments/release-offline-funds-reservation-handler',
								},
								{
									label: 'Integración con app propia',
									autogenerate: { directory: 'guides/offline-payments/own-app' },
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
