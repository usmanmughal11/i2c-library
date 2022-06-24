import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { LocalizeController } from '../../utilities/localize';
import styles from './progress-bar.styles';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - A label to show inside the indicator.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart indicator - The progress bar indicator.
 * @csspart label - The progress bar label.
 *
 * @cssproperty --height - The progress bar's height.
 * @cssproperty --track-color - The track color.
 * @cssproperty --indicator-color - The indicator color.
 * @cssproperty --label-color - The label color.
 */
@customElement('i2c-progress-bar')
export default class SlProgressBar extends LitElement {
  static styles = styles;
  private readonly localize = new LocalizeController(this);

  /** The current progress, 0 to 100. */
  @property({ type: Number, reflect: true }) value = 0;

  /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** A custom label for the progress bar's aria label. */
  @property() label = '';
  @property() varient: 'primary' | 'success' | 'danger' | 'warning' | 'gray' = 'primary';

  @property() valPosition?: 'bottom' | 'top' | 'front' | 'tooltipTop' | 'tooltipBottom';
  
  @property() tooltip: true | false = false;

  /** The locale to render the component in. */
  @property() lang: string;

  render() {
    return html`

    ${this.valPosition === 'top' || this.valPosition === 'tooltipTop'?
    html`
    <span part="labelTop" style="left:${this.value-4}%;" class=${classMap({
      'progress-val-label':true,
       'progress-val-top':this.valPosition==='top',
       'progress-val-tooltip-top': this.valPosition === 'tooltipTop',
      })}>

    
    <slot>${this.value}%</slot>
    </span>
    `:''}
      <div
        part="base" 
        class=${classMap({
          'progress-bar': true,
          'progress-bar--indeterminate': this.indeterminate,
          'progress-bar-primary': this.varient === 'primary',
          'progress-bar-success': this.varient === 'success',
          'progress-bar-danger': this.varient === 'danger',
          'progress-bar-warning': this.varient === 'warning',
          'progress-bar-gray': this.varient === 'gray',
          'progress-bar-inline':this.valPosition === 'front'
        })}
        role="progressbar"
        title=${ifDefined(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term('progress')}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${styleMap({ width: `${this.value}%` })}>
          ${!this.indeterminate
            ? html`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              `
            : ''}
        </div>
        <span part="labelFront">
        <slot></slot>
        </span>
      </div>
      ${this.valPosition === 'bottom' || this.valPosition === 'front' || this.valPosition === 'tooltipBottom'?
    html`
    <span part="labelBottom" style="left:${this.value-3}%;" class=${classMap({
      'progress-val-label':true, 
      'progress-val-bottom':this.valPosition === 'bottom',
      'progress-val-front':this.valPosition === 'front',
      'progress-val-tooltip-bottom':this.valPosition === 'tooltipBottom',
    })}>
    <slot>${this.value}%</slot>
    </span>
    `:''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'i2c-progress-bar': SlProgressBar;
  }
}
