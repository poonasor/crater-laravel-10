import { defineConfig } from 'vite';
import path from 'path';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    server: {
        watch: {
            ignored: ['**/.env/**'],
        },
    },
    resolve: {
        alias: {
            "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
            '@': path.resolve(__dirname, './resources'),
        }
    },
    plugins: [
        vue(),
        laravel({
            input: ['resources/scripts/main.js'],
            refresh: true,
        }),
    ],
});
