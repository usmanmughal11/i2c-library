# Progress Bar

[component-header:i2c-progress-bar]

Progress bars are used to show the status of an ongoing operation.

```html preview
<i2c-progress-bar value="50"></i2c-progress-bar>
```

```jsx react
import { SlProgressBar } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlProgressBar value={50} />;
```

## Examples

### Labels

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html preview
<i2c-progress-bar value="50" label="Upload progress"></i2c-progress-bar>
```

```jsx react
import { SlProgressBar } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlProgressBar value="50" label="Upload progress" />;
```

### Custom Height

Use the `--height` custom property to set the progress bar's height.

```html preview
<i2c-progress-bar value="50" style="--height: 6px;"></i2c-progress-bar>
```

```jsx react
import { SlProgressBar } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlProgressBar value={50} style={{ '--height': '6px' }} />;
```

### Showing Values

Use the default slot to show a value.

```html preview
<i2c-progress-bar value="50" class="progress-bar-values">50%</i2c-progress-bar>

<br />

<i2c-button circle><i2c-icon name="dash" label="Decrease"></i2c-icon></i2c-button>
<i2c-button circle><i2c-icon name="plus" label="Increase"></i2c-icon></i2c-button>

<script>
  const progressBar = document.querySelector('.progress-bar-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { SlButton, SlIcon, SlProgressBar } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [value, setValue] = useState(50);

  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  }

  return (
    <>
      <SlProgressBar value={value}>{value}%</SlProgressBar>

      <br />

      <SlButton circle onClick={() => adjustValue(-10)}>
        <SlIcon name="dash" label="Decrease" />
      </SlButton>

      <SlButton circle onClick={() => adjustValue(10)}>
        <SlIcon name="plus" label="Increase" />
      </SlButton>
    </>
  );
};
```

### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html preview
<i2c-progress-bar indeterminate></i2c-progress-bar>
```

```jsx react
import { SlProgressBar } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlProgressBar indeterminate />;
```

[component-metadata:i2c-progress-bar]
