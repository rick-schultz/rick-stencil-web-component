/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppCard {
        "cardText": string;
        "cardTitle": string;
        "imgUrl": string;
    }
    interface AppRoot {
        "imageOne": string;
        "imageThree": string;
        "imageTwo": string;
    }
    interface ExampleComponent {
        "exampleProp": string;
    }
}
declare global {
    interface HTMLAppCardElement extends Components.AppCard, HTMLStencilElement {
    }
    var HTMLAppCardElement: {
        prototype: HTMLAppCardElement;
        new (): HTMLAppCardElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLElementTagNameMap {
        "app-card": HTMLAppCardElement;
        "app-root": HTMLAppRootElement;
        "example-component": HTMLExampleComponentElement;
    }
}
declare namespace LocalJSX {
    interface AppCard {
        "cardText"?: string;
        "cardTitle"?: string;
        "imgUrl"?: string;
    }
    interface AppRoot {
        "imageOne"?: string;
        "imageThree"?: string;
        "imageTwo"?: string;
    }
    interface ExampleComponent {
        "exampleProp"?: string;
    }
    interface IntrinsicElements {
        "app-card": AppCard;
        "app-root": AppRoot;
        "example-component": ExampleComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-card": LocalJSX.AppCard & JSXBase.HTMLAttributes<HTMLAppCardElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
        }
    }
}
