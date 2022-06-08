import {defineNuxtPlugin} from "#app";
import { defineCustomElement as defineComponentWithEvents } from "stencil-components/dist/components/component-with-events";
import { defineCustomElement as defineComponentWithShadowDom } from "stencil-components/dist/components/component-with-shadow-dom";

export default defineNuxtPlugin(nuxt => {
    defineComponentWithEvents();
    defineComponentWithShadowDom();
})