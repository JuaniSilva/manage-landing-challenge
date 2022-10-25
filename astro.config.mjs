import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://juanisilva.github.io',
	base: '/manage-landing-challenge',
	integrations: [react(), tailwind()]
});