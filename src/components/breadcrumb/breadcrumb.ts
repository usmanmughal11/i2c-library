import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '../../components/icon/icon';
import { LocalizeController } from '../../utilities/localize';
import styles from './breadcrumb.styles';
import type SlBreadcrumbItem from '../../components/breadcrumb-item/breadcrumb-item';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - One or more breadcrumb items to display.
 * @slot separator - The separator to use between breadcrumb items.
 *
 * @dependency i2c-icon
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('i2c-breadcrumb')
export default class SlBreadcrumb extends LitElement {
  static styles = styles;

  @query('slot') defaultSlot: HTMLSlotElement;
  @query('slot[name="separator"]') separatorSlot: HTMLSlotElement;

  private readonly localize = new LocalizeController(this);
  private separatorDir = this.localize.dir();

  /**
   * The label to use for the breadcrumb control. This will not be shown, but it will be announced by screen readers and
   * other assistive devices.
   */
  @property() label = 'Breadcrumb';

  // Generates a clone of the separator element to use for each breadcrumb item
  private getSeparator() {
    const separator = this.separatorSlot.assignedElements({ flatten: true })[0] as HTMLElement;

    // Clone it, remove ids, and slot it
    const clone = separator.cloneNode(true) as HTMLElement;
    [clone, ...clone.querySelectorAll('[id]')].forEach(el => el.removeAttribute('id'));
    clone.setAttribute('data-default', '');
    clone.slot = 'separator';

    return clone;
  }

  handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter(
      item => item.tagName.toLowerCase() === 'i2c-breadcrumb-item'
    ) as SlBreadcrumbItem[];

    items.forEach((item, index) => {
      // Append separators to each item if they don't already have one
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        // No separator exists, add one
        item.append(this.getSeparator());
      } else if (separator.hasAttribute('data-default')) {
        // A default separator exists, replace it
        separator.replaceWith(this.getSeparator());
      } else {
        // The user provided a custom separator, leave it alone
      }

      // The last breadcrumb item is the "current page"
      if (index === items.length - 1) {
        item.setAttribute('aria-current', 'page');
      } else {
        item.removeAttribute('aria-current');
      }
    });
  }

  render() {
    // We clone the separator and inject them into breadcrumb items, so we need to regenerate the default ones when
    // directionality changes. We do this by storing the current separator direction, waiting for render, then calling
    // the function that regenerates them.
    if (this.separatorDir !== this.localize.dir()) {
      this.separatorDir = this.localize.dir();
      this.updateComplete.then(() => this.handleSlotChange());
    }

    return html`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <i2c-icon name=${this.localize.dir() === 'rtl' ? 'chevron-left' : 'chevron-right'} library="system"></i2c-icon>
      </slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'i2c-breadcrumb': SlBreadcrumb;
  }
}
