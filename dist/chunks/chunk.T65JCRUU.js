import {
  button_styles_default
} from "./chunk.42Q2SCQF.js";
import {
  r
} from "./chunk.ZU3WVWU5.js";

// src/components/radio-button/radio-button.styles.ts
var radio_button_styles_default = r`
  ${button_styles_default}
  label {
    display: inline-block;
    position: relative;
  }
  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;

export {
  radio_button_styles_default
};
