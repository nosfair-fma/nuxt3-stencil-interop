import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('component-with-'),
        },
    },
    modules: [
        "./modules/stencil-ssr.ts"
    ]
})
