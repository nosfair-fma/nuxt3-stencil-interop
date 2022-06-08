import {defineNuxtPlugin} from "#app";
import {renderToString} from "stencil-components/hydrate";

export default defineNuxtPlugin(nuxt => {
    nuxt.hook("app:rendered", () => {
        /*
        - get contents of nuxt.ssrContext.res
        - hydrate via renderToString
        - overwrite contents of nuxt.ssrContext.res
         */
    })
})