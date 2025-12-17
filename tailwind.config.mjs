/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            // 1. 背景色専用の設定 (bg-main, bg-card で呼び出せる)
            backgroundColor: {
                'main': '#020617', // ← ここをStitch風の深い黒に変更しました
                'card': '#1e293b',
            },
            // 2. 文字色専用の設定 (text-main, text-muted で呼び出せる)
            textColor: {
                'main': '#f8fafc',
                'muted': '#94a3b8',
            },
            // 3. どちらにも使える共通カラー (bg-primary, text-primary 両方OK)
            colors: {
                'primary': '#3b82f6',
            },
            fontFamily: {
                sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
            },
        },
    },
    plugins: [],
}