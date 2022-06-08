import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-with-shadow-dom',
  shadow: true,
})
export class ComponentWithShadowDom {
  render() {
    return (
      <Host>
        <div class="wrapper">
          i am a component with shadow dom and named slots
          <br />
          <div class="inner">
            <slot name="inner">(default slot content)</slot>
          </div>
        </div>
      </Host>
    );
  }
}
