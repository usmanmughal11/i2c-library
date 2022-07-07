import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './badge.styles';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - The badge's content.
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('i2c-badge')
export default class i2cBadge extends LitElement {

  static styles = styles;
  /** The badge's variant. */
  @property({ reflect: true }) variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' 
                                      | 'light-primary' | 'light-success' | 'light-neutral' | 'dark-neutral' | 'light-warning' | 'light-danger'
                                      | 'lighter-primary' | 'lighter-success' | 'lighter-neutral' | 'lighter-warning' | 'lighter-danger' = 'primary';
                                      
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Draws a pill-style badge with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;
  @property({ type: Boolean, reflect: true }) circle = false;

  @property({ type: String }) iconname:'';
  @property({ type: String }) rightIcon:'x';
  @property({ type: String }) imgpath = '';
  @property({ type: Boolean, reflect: true }) closable = false;
  

  /** Makes the badge pulsate to draw attention. */
  @property({ type: Boolean, reflect: true }) pulse = false;

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          badge: true,
          'badge--primary': this.variant === 'primary',
          'badge--success': this.variant === 'success',
          'badge--neutral': this.variant === 'neutral',
          'badge--warning': this.variant === 'warning',
          'badge--danger': this.variant === 'danger',
          'badge--light--primary': this.variant === 'light-primary',
          'badge--light--success': this.variant === 'light-success',
          'badge--light--neutral': this.variant === 'light-neutral',
          'badge--light--warning': this.variant === 'light-warning',
          'badge--light--danger': this.variant === 'light-danger',
          'badge--lighter--primary': this.variant === 'lighter-primary',
          'badge--lighter--success': this.variant === 'lighter-success',
          'badge--lighter--neutral': this.variant === 'lighter-neutral',
          'badge--dark--neutral': this.variant === 'dark-neutral',
          'badge--lighter--warning': this.variant === 'lighter-warning',
          'badge--lighter--danger': this.variant === 'lighter-danger',
          'badge--small': this.size === 'small',
          'badge--medium': this.size === 'medium',
          'badge--large': this.size === 'large',
          'badge--has--img': this.imgpath !== '',
          'badge--has--right--icon': this.rightIcon,
          'badge--has--icon': this.iconname,
          'badge--pill': this.pill,
          'badge--circle': this.circle,
          'badge--pulse': this.pulse
        })}
        role="status"
      >
      ${this.iconname
        ? html`
           <i2c-icon 
            class="badge--icon" name="${this.iconname}"></i2c-icon>
        `:''}
        ${this.imgpath
          ? html`
          <i2c-icon class="badge--img" src="${this.imgpath}"></i2c-icon>
          `:''}
        <slot></slot>
        ${this.rightIcon
          ? html`
              <i2c-icon 
                class="badge--right--icon"
                name="${this.rightIcon}"
              ></i2c-icon-button>
            `
          : ''}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'i2c-badge': i2cBadge;
  }
}
