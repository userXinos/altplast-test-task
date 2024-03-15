import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

const isDev = process.env.NODE_ENV === 'development';
export default defineConfig({
    base: (isDev ? '/' : `/altplast-test-task/`),
    plugins: [vue()],
});
