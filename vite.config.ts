import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			sass: {
				additionalData: `
				@import '$lib/sass/variables'
				@import '$lib/sass/mixins'
			  `,
			}
		},
	}
});
