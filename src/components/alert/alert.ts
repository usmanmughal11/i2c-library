import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../components/icon-button/icon-button';
import { animateTo, stopAnimations } from '../../internal/animate';
import { emit, waitForEvent } from '../../internal/event';
import { HasSlotController } from '../../internal/slot';
import { watch } from '../../internal/watch';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { LocalizeController } from '../../utilities/localize';
import styles from './alert.styles';

const toastStack = Object.assign(document.createElement('div'), { className: 'i2c-toast-stack' });

/**
 * @since 2.0
 * @status stable
 *
 * @dependency i2c-icon-button
 *
 * @slot - The alert's content.
 * @slot icon - An icon to show in the alert.
 *
 * @event i2c-show - Emitted when the alert opens.
 * @event i2c-after-show - Emitted after the alert opens and all animations are complete.
 * @event i2c-hide - Emitted when the alert closes.
 * @event i2c-after-hide - Emitted after the alert closes and all animations are complete.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart icon - The container that wraps the alert icon.
 * @csspart message - The alert message.
 * @csspart close-button - The close button.
 * @csspart close-button__base - The close button's `base` part.
 *
 * @cssproperty --box-shadow - The alert's box shadow.
 *
 * @animation alert.show - The animation to use when showing the alert.
 * @animation alert.hide - The animation to use when hiding the alert.
 */

@customElement('i2c-alert')
export default class SlAlert extends LitElement {
  static styles = styles;

  private autoHideTimeout: number;
  private readonly hasSlotController = new HasSlotController(this, 'icon', 'avatar','link1', 'link2', 'leftImg');
  private readonly localize = new LocalizeController(this);

  @query('[part="base"]') base: HTMLElement;

  /** Indicates whether or not the alert is open. You can use this in lieu of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Makes the alert closable. */
  @property({ type: Boolean, reflect: true }) closable = false;

  
  @property({ type: Boolean, reflect: true }) iconCenter = false;

  /** The alert's variant. */
  @property({ reflect: true }) variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'default' = 'neutral';

  /** The alert's Layout. */
  @property({ reflect: true }) layout:  'vertical' | 'linear' = 'linear';


  /**
   * The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
   * the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`.
   */
  @property({ type: Number }) duration = Infinity;
  @property({ type: String }) leftImg? ='';



  @property({ type: String }) badge? = '';
  @property({ type: String }) alertTitle? = '';
  @property({ type: String }) link1text? ='';
  @property({ type: String }) link2text? ='';
  @property({ type: String }) link1url? ='';
  @property({ type: String }) link2url? ='';
  @property({ type: String }) target? ='';

  @property() type?: 'notification'|'alert' = 'notification';
 

  firstUpdated() {
    this.base.hidden = !this.open;
  }

  /** Shows the alert. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'i2c-after-show');
  }

  /** Hides the alert */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'i2c-after-hide');
  }

  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */
  async toast() {
    return new Promise<void>(resolve => {
      if (toastStack.parentElement === null) {
        document.body.append(toastStack);
      }

      toastStack.appendChild(this);

      // Wait for the toast stack to render
      requestAnimationFrame(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- force a reflow for the initial transition
        this.clientWidth;
        this.show();
      });

      this.addEventListener(
        'i2c-after-hide',
        () => {
          toastStack.removeChild(this);
          resolve();

          // Remove the toast stack from the DOM when there are no more alerts
          if (toastStack.querySelector('i2c-alert') === null) {
            toastStack.remove();
          }
        },
        { once: true }
      );
    });
  }

  restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }

  handleCloseClick() {
    this.hide();
  }

  handleMouseMove() {
    this.restartAutoHide();
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      emit(this, 'i2c-show');

      if (this.duration < Infinity) {
        this.restartAutoHide();
      }

      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, 'alert.show', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);

      emit(this, 'i2c-after-show');
    } else {
      // Hide
      emit(this, 'i2c-hide');

      clearTimeout(this.autoHideTimeout);

      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, 'alert.hide', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;

      emit(this, 'i2c-after-hide');
    }
  }

  @watch('duration')
  handleDurationChange() {
    this.restartAutoHide();
  }

  render() {
    const hasIconSlot = this.hasSlotController.test('icon');
    const hasAvatarSlot = this.hasSlotController.test('avatar');
    const hasLink1 = this.hasSlotController.test('link1');
    const hasLink2 = this.hasSlotController.test('link2');

    return html`
    ${this.type==='notification'? html`
    
      <div
        part="base"
        class=${classMap({
          alert: true,
          'alert--open': this.open,
          'alert--closable': this.closable,
          'alert--vertical': this.layout === 'vertical',
          'alert--has-icon': hasIconSlot,
          'alert--has-avatar':hasAvatarSlot,
          'alert--has-link1':hasLink1,
          'alert--has-link2':hasLink2,
          'content-middle':this.iconCenter,
          'alert--has-left-img':this.leftImg !== '',
          'alert--primary': this.variant === 'primary',
          'alert--success': this.variant === 'success',
          'alert--neutral': this.variant === 'neutral',
          'alert--warning': this.variant === 'warning',
          'alert--danger': this.variant === 'danger',
          'alert--default': this.variant === 'default',
          'alert--type-notification': this.type === 'notification',
        })}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open ? 'false' : 'true'}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>
        ${this.leftImg !== '' ? html`
        <span part="leftImg" class="alert__left_mg" style="background:var(--i2c-color-gray-50) url(${this.leftImg ? this.leftImg:''}) no-repeat center center;">
             <slot name="leftImg"></slot>
        </span>
        `:''}
          <span part="avatar" class="alert__avatar">
             <slot name="avatar"></slot>
          </span>
          <div part="message" class="alert__message">
          <slot></slot>
          ${this.hasSlotController.test('link1') ? html` 
          <div class="alert__links">
            <span part="link1" class="alert__link">
              <slot name="link1"></slot>
            </span>
            <span part="link2" class="alert__link">
              <slot name="link2"></slot>
            </span>
          </div>
        `:''}
        </div>
       
        ${this.closable
          ? html`
              <i2c-icon-button size="small"
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                @click=${this.handleCloseClick}
              ></i2c-icon-button>
            `
          : ''}
      </div>
   
      `: html`
      <div  
      part="base"
      class=${classMap({
        'linear--alert': true,
        'linear--alert--has-icon': hasIconSlot,
        'linear--alert--has-link1':hasLink1,
        'linear--alert--has-link2':hasLink2,
        'linear--alert--primary': this.variant === 'primary',
        'linear--alert--success': this.variant === 'success',
        'linear--alert--neutral': this.variant === 'neutral',
        'linear--alert--warning': this.variant === 'warning',
        'linear--alert--danger': this.variant === 'danger',
        'linear--alert--default': this.variant === 'default',
        'linear--alert--has--badge':this.badge !== '',
      })}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      >
              <div>
              ${this.badge!=='' || this.title!==''? html`
                <div class="alert-title ">
                ${this.badge!==''? html`
                  <span class="linear--alert--badge">${this.badge}</span>
                `:''}
                ${this.title!==''? html`
                  <span class="linear--alert--title">${this.title}</span>
                   `:''}
                </div>
                `:''}
                <div part="message" class="linear--alert--msg">
                    <slot></slot>
                </div>
              </div>
              ${this.link1text!==''? html`
              <div class="linear--alert--links">
                <a href="${this.link1url}" class="linear--alert--link">${this.link1text}</a>
                ${this.link2text!==''? html`
                <a href="${this.link2url}" class="linear--alert--link">${this.link2text} <i2c-icon name="arrow-right-short"></i2c-icon> </a>
                `:''}  
              </div>
              `:''}
            </div>
      `}
      `;
  }
}

setDefaultAnimation('alert.show', {
  keyframes: [
    { opacity: 0, transform: 'scale(0.8)' },
    { opacity: 1, transform: 'scale(1)' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('alert.hide', {
  keyframes: [
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(0.8)' }
  ],
  options: { duration: 250, easing: 'ease' }
});

declare global {
  interface HTMLElementTagNameMap {
    'i2c-alert': SlAlert;
  }
}
