import {
  animated_image_styles_default
} from "./chunk.ZJSVUBJV.js";
import {
  watch
} from "./chunk.W6MGCO4G.js";
import {
  emit
} from "./chunk.UY5AQKHP.js";
import {
  e,
  i,
  n,
  t
} from "./chunk.QCFW6O2I.js";
import {
  $,
  s
} from "./chunk.ZU3WVWU5.js";
import {
  __decorateClass
} from "./chunk.K2NRSETB.js";

// src/components/animated-image/animated-image.ts
var SlAnimatedImage = class extends s {
  constructor() {
    super(...arguments);
    this.isLoaded = false;
  }
  handleClick() {
    this.play = !this.play;
  }
  handleLoad() {
    const canvas = document.createElement("canvas");
    const { width, height } = this.animatedImage;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(this.animatedImage, 0, 0, width, height);
    this.frozenFrame = canvas.toDataURL("image/gif");
    if (!this.isLoaded) {
      emit(this, "i2c-load");
      this.isLoaded = true;
    }
  }
  handleError() {
    emit(this, "i2c-error");
  }
  handlePlayChange() {
    if (this.play) {
      this.animatedImage.src = "";
      this.animatedImage.src = this.src;
    }
  }
  handleSrcChange() {
    this.isLoaded = false;
  }
  render() {
    return $`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? "false" : "true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded ? $`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? "true" : "false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                ${this.play ? $`<i2c-icon part="pause-icon" name="pause-fill" library="system"></i2c-icon>` : $`<i2c-icon part="play-icon" name="play-fill" library="system"></i2c-icon>`}
              </div>
            ` : ""}
      </div>
    `;
  }
};
SlAnimatedImage.styles = animated_image_styles_default;
__decorateClass([
  t()
], SlAnimatedImage.prototype, "frozenFrame", 2);
__decorateClass([
  t()
], SlAnimatedImage.prototype, "isLoaded", 2);
__decorateClass([
  i(".animated-image__animated")
], SlAnimatedImage.prototype, "animatedImage", 2);
__decorateClass([
  e()
], SlAnimatedImage.prototype, "src", 2);
__decorateClass([
  e()
], SlAnimatedImage.prototype, "alt", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlAnimatedImage.prototype, "play", 2);
__decorateClass([
  watch("play")
], SlAnimatedImage.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("src")
], SlAnimatedImage.prototype, "handleSrcChange", 1);
SlAnimatedImage = __decorateClass([
  n("i2c-animated-image")
], SlAnimatedImage);

export {
  SlAnimatedImage
};
