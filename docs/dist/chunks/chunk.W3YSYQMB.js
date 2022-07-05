import {
  component_styles_default
} from "./chunk.6HCWEZWU.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/menu/menu.styles.ts
var menu_styles_default = r`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu {
    background: var(--i2c-panel-background-color);
    border: solid var(--i2c-panel-border-width) var(--i2c-panel-border-color);
    border-radius: var(--i2c-border-radius-medium);
    background: var(--i2c-panel-background-color);
    padding: var(--i2c-spacing-x-small) 0;
  }

  ::slotted(i2c-divider) {
    --spacing: var(--i2c-spacing-x-small);
  }
`;

export {
  menu_styles_default
};
