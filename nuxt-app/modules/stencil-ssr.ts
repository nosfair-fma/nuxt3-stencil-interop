import {defineNuxtModule} from "@nuxt/kit";
import {renderToString} from "stencil-components/hydrate";

export default defineNuxtModule({
    hooks: {
        "ready": (nuxt) => {
            console.log("called when nuxt is ready")
        },
        "render:route": (url, result, context) => {
            console.log("should be called on route render");
            /*
            - get contents of result.html
            - hydrate via renderToString
            - overwrite contents of result.html
             */
        }
    }
})