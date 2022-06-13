# Switch

[component-header:i2c-switch]

Switches allow the user to toggle an option on or off.

```html preview
<i2c-switch>Switch</i2c-switch>
```

```jsx react
import { SlSwitch } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlSwitch>Switch</SlSwitch>;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html preview
<i2c-switch checked>Checked</i2c-switch>
```

```jsx react
import { SlSwitch } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlSwitch checked>Checked</SlSwitch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html preview
<i2c-switch disabled>Disabled</i2c-switch>
```

```jsx react
import { SlSwitch } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlSwitch disabled>Disabled</SlSwitch>;
```

### Custom Size

Use the available custom properties to make the switch a different size.

```html preview
<i2c-switch style="--width: 80px; --height: 32px; --thumb-size: 26px;">Really big</i2c-switch>
```

```jsx react
import { SlSwitch } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```

[component-metadata:i2c-switch]
