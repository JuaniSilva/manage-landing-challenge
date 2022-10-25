import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://manage-landing-astro.github.io',
	base: '/my-repo',
	integrations: [react(), tailwind()]
});