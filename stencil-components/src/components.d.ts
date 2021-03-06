/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ComponentWithEvents {
    }
    interface ComponentWithShadowDom {
    }
}
export interface ComponentWithEventsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLComponentWithEventsElement;
}
declare global {
    interface HTMLComponentWithEventsElement extends Components.ComponentWithEvents, HTMLStencilElement {
    }
    var HTMLComponentWithEventsElement: {
        prototype: HTMLComponentWithEventsElement;
        new (): HTMLComponentWithEventsElement;
    };
    interface HTMLComponentWithShadowDomElement extends Components.ComponentWithShadowDom, HTMLStencilElement {
    }
    var HTMLComponentWithShadowDomElement: {
        prototype: HTMLComponentWithShadowDomElement;
        new (): HTMLComponentWithShadowDomElement;
    };
    interface HTMLElementTagNameMap {
        "component-with-events": HTMLComponentWithEventsElement;
        "component-with-shadow-dom": HTMLComponentWithShadowDomElement;
    }
}
declare namespace LocalJSX {
    interface ComponentWithEvents {
        "onCamelCaseEvent"?: (event: ComponentWithEventsCustomEvent<void>) => void;
        "onLowercaseevent"?: (event: ComponentWithEventsCustomEvent<void>) => void;
    }
    interface ComponentWithShadowDom {
    }
    interface IntrinsicElements {
        "component-with-events": ComponentWithEvents;
        "component-with-shadow-dom": ComponentWithShadowDom;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "component-with-events": LocalJSX.ComponentWithEvents & JSXBase.HTMLAttributes<HTMLComponentWithEventsElement>;
            "component-with-shadow-dom": LocalJSX.ComponentWithShadowDom & JSXBase.HTMLAttributes<HTMLComponentWithShadowDomElement>;
        }
    }
}
