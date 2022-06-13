# Range

[component-header:i2c-range]

Ranges allow the user to select a single value within a given range using a slider.

```html preview
<i2c-range></i2c-range>
```

```jsx react
import { SlRange } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRange />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the range an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<i2c-range label="Volume" min="0" max="100"></i2c-input>
```

```jsx react
import { SlRange } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRange label="Volume" min={0} max={100} />;
```

### Help Text

Add descriptive help text to a range with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<i2c-range
  label="Volume"
  help-text="Controls the volume of the current song."
  min="0"
  max="100"
></i2c-input>
```

```jsx react
import { SlRange } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRange label="Volume" help-text="Controls the volume of the current song." min={0} max={100} />;
```

### Min, Max, and Step

Use the `min` and `max` attributes to set the range's minimum and maximum values, respectively. The `step` attribute determines the value's interval when increasing and decreasing.

```html preview
<i2c-range min="0" max="10" step="1"></i2c-range>
```

```jsx react
import { SlRange } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRange min={0} max={10} step={1} />;
```

### Disabled

Use the `disabled` attribute to disable a slider.

```html preview
<i2c-range disabled></i2c-range>
```

```jsx react
import { SlRange } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRange disabled />;
```

### Tooltip Placement

By default, the tooltip is shown on top. Set `tooltip` to `bottom` to show it below the slider.

```html preview
<i2c-range tooltip="bottom"></i2c-range>
```

```jsx react
import { SlRange } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRange tooltip="bottom" />;
```

### Disable the Tooltip

To disable the tooltip, set `tooltip` to `none`.

```html preview
<i2c-range tooltip="none"></i2c-range>
```

```jsx react
import { SlRange } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRange tooltip="none" />;
```

### Custom Track Colors

You can customize the active and inactive portions of the track using the `--track-color-active` and `--track-color-inactive` custom properties.

```html preview
<i2c-range
  style="
  --track-color-active: var(--i2c-color-primary-600);
  --track-color-inactive: var(--i2c-color-primary-100);
"
></i2c-range>
```

```jsx react
import { SlRange } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRange
    style={{
      '--track-color-active': 'var(--i2c-color-primary-600)',
      '--track-color-inactive': 'var(--i2c-color-primary-200)'
    }}
  />
);
```

### Custom Tooltip Formatter

You can change the tooltip's content by setting the `tooltipFormatter` property to a function that accepts the range's value as an argument.

```html preview
<i2c-range min="0" max="100" step="1" class="range-with-custom-formatter"></i2c-range>

<script>
  const range = document.querySelector('.range-with-custom-formatter');
  range.tooltipFormatter = value => `Total - ${value}%`;
</script>
```

```jsx react
import { SlRange } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRange min={0} max={100} step={1} tooltipFormatter={value => `Total - ${value}%`} />;
```

[component-metadata:i2c-range]
