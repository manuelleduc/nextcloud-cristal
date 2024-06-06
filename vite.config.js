import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		"process.env": {},
	},
	build: {
		lib: {
			entry: resolve(__dirname, './src/main.ts'),
			name: 'nexcloudcristal',
		},
		outDir: 'js',
	},
	plugins: [
		vue(),
	],
	optimizeDeps: {
		esbuildOptions: {
			tsconfigRaw: {
				compilerOptions: {
					// Workaround for a vite bug (see https://github.com/vitejs/vite/issues/13736)
					experimentalDecorators: true,
				},
			},
		},
	},
})
