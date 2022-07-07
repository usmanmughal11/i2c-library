import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './badge-group.styles';

/**
 * @since 2.0
 * @status experimental
 *
 * @dependency i2c-example
 *
 * @event i2c-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('i2c-badge-group')
export default class I2cBadgeGroup extends LitElement {
  static styles = styles;

  /** An example property. */
  @property({ reflect: true }) variant: 'primary-light' | 'primary'  | 'success-light' | 'success'  | 'neutral-light' |'neutral'| 
                                        'warning-light' | 'warning'  | 'danger-light' |'danger'  = 'neutral';
  
  @property({type:Boolean, reflect:true}) badgeRight = false;

  render() {
    return html`
    <div class="badge-group ${this.badgeRight?'badge-right':''}  badge-group-${this.variant}">
       <span part="badge-group-badge">
         <slot name="badge"></slot>
       </span>
        <span class="badge-title">
          <slot><slot>
        </span>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'i2c-badge-group': I2cBadgeGroup;
  }
}
