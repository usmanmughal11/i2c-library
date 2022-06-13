import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { autoIncrement } from '../../internal/auto-increment';
import styles from './tab-panel.styles';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - The tab panel's content.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --padding - The tab panel's padding.
 */
@customElement('i2c-tab-panel')
export default class SlTabPanel extends LitElement {
  static styles = styles;

  private readonly attrId = autoIncrement();
  private readonly componentId = `i2c-tab-panel-${this.attrId}`;

  /** The tab panel's name. */
  @property({ reflect: true }) name = '';

  /** When true, the tab panel will be shown. */
  @property({ type: Boolean, reflect: true }) active = false;

  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
  }

  render() {
    this.style.display = this.active ? 'block' : 'none';

    return html`
      <div part="base" class="tab-panel" role="tabpanel" aria-hidden=${this.active ? 'false' : 'true'}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'i2c-tab-panel': SlTabPanel;
  }
}
