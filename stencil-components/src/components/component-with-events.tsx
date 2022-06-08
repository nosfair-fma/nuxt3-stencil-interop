import { Component, Host, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'component-with-events',
  shadow: true,
})
export class ComponentWithEvents {
  @Event() lowercaseevent: EventEmitter<void>;
  @Event() camelCaseEvent: EventEmitter<void>;

  handleClick = () => {
    this.lowercaseevent.emit();
    this.camelCaseEvent.emit();
  }

  render() {
    return (
      <Host>
        <button onClick={this.handleClick}>click to raise events</button>
      </Host>
    );
  }
}
