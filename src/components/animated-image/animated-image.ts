import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import '../../components/icon/icon';
import { emit } from '../../internal/event';
import { watch } from '../../internal/watch';
import styles from './animated-image.styles';

/**
 * @since 2.0
 * @status experimental
 *
 * @dependency i2c-icon
 *
 * @event i2c-load - Emitted when the image loads successfully.
 * @event i2c-error - Emitted when the image fails to load.
 *
 * @part - control-box - The container that surrounds the pause/play icons and provides their background.
 * @part - play-icon - The icon to use for the play button.
 * @part - pause-icon - The icon to use for the pause button.
 *
 * @cssproperty --control-box-size - The size of the icon box.
 * @cssproperty --icon-size - The size of the play/pause icons.
 */
@customElement('i2c-animated-image')
export default class SlAnimatedImage extends LitElement {
  static styles = styles;

  @state() frozenFrame: string;
  @state() isLoaded = false;

  @query('.animated-image__animated') animatedImage: HTMLImageElement;

  /** The image's src attribute. */
  @property() src: string;

  /** The image's alt attribute. */
  @property() alt: string;

  /** When set, the image will animate. Otherwise, it will be paused. */
  @property({ type: Boolean, reflect: true }) play: boolean;

  handleClick() {
    this.play = !this.play;
  }

  handleLoad() {
    const canvas = document.createElement('canvas');
    const { width, height } = this.animatedImage;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d')!.drawImage(this.animatedImage, 0, 0, width, height);
    this.frozenFrame = canvas.toDataURL('image/gif');

    if (!this.isLoaded) {
      emit(this, 'i2c-load');
      this.isLoaded = true;
    }
  }

  handleError() {
    emit(this, 'i2c-error');
  }

  @watch('play')
  handlePlayChange() {
    // When the animation starts playing, reset the src so it plays from the beginning. Since the src is cached, this
    // won't trigger another request.
    if (this.play) {
      this.animatedImage.src = '';
      this.animatedImage.src = this.src;
    }
  }

  @watch('src')
  handleSrcChange() {
    this.isLoaded = false;
  }

  render() {
    return html`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? 'false' : 'true'}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded
          ? html`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? 'true' : 'false'}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                ${this.play
                  ? html`<i2c-icon part="pause-icon" name="pause-fill" library="system"></i2c-icon>`
                  : html`<i2c-icon part="play-icon" name="play-fill" library="system"></i2c-icon>`}
              </div>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'i2c-animated-image': SlAnimatedImage;
  }
}
