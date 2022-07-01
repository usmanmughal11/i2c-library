# Progress Ring

[component-header:i2c-progress-ring]

Progress rings are used to show the progress of a determinate operation in a circular fashion.

```html preview
<i2c-progress-ring value="60"></i2c-progress-ring>
```

```jsx react
import { SlProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlProgressRing value="25" />;
```

## Examples

### Size and Track Width

Use the `--size` custom property to set the diameter of the progress ring.

```html preview
<i2c-progress-ring value="50" style="--size: 64px; --track-width: 6px;"></i2c-progress-ring>
<i2c-progress-ring value="50" style="--size: 160px;"></i2c-progress-ring>
<i2c-progress-ring value="50" style="--size: 200px; --track-width: 20px;" label="50%"></i2c-progress-ring>
<i2c-progress-ring value="50" style="--size: 240px; --track-width: 24px;" label="50%"></i2c-progress-ring>
<!-- <i2c-progress-ring value="50" style="--size: 280px; --track-width: 28px;"></i2c-progress-ring> -->
```

```jsx react
import { SlProgressRing } from '@shoelace-style/shoelace/dist/react';
 
const App = () => <SlProgressRing value="50" style={{ '--size': '200px' }} />;
```


### Colors

To change the color, use the `--track-color` and `--indicator-color` custom properties.

```html preview
<i2c-progress-ring
  value="50"
  style="
    --track-color:var(--i2c-color-danger-50); 
    --indicator-color: var(--i2c-color-danger-600);
  "
></i2c-progress-ring>
<i2c-progress-ring
  value="40"
  style="
    --track-color:var(--i2c-color-orange-100); 
    --indicator-color: var(--i2c-color-warning-600);
  "
></i2c-progress-ring>
<i2c-progress-ring
  value="60"
  style="
    --track-color:var(--i2c-color-success-50); 
    --indicator-color: var(--i2c-color-success-600);
  "
></i2c-progress-ring>
<i2c-progress-ring
  value="70"
  style="
    --track-color:var(--i2c-color-gray-100); 
    --indicator-color: var(--i2c-color-gray-500);
  "
></i2c-progress-ring>
```

```jsx react
import { SlProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlProgressRing
    value="50"
    style={{
      '--track-color': 'pink',
      '--indicator-color': 'deeppink'
    }}
  />
);
```

### Labels

Use the `label` attribute to label the progress ring and tell assistive devices how to announce it.

```html preview
<i2c-progress-ring value="50" labelText="Upload progress" label="50%"></i2c-progress-ring>
```

```jsx react
import { SlProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlProgressRing value="50" label="Upload progress" />;
```

### Showing Values

Use the default slot to show a label inside the progress ring.

```html preview
<i2c-progress-ring value="63" class="progress-ring-values"  label="63%" style="margin-bottom: .5rem;"></i2c-progress-ring>

<br />

<i2c-button circle><i2c-icon name="dash" label="Decrease"></i2c-icon></i2c-button>
<i2c-button circle><i2c-icon name="plus" label="Increase"></i2c-icon></i2c-button>

<script>
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.setAttribute('label',`${value}%`)
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.setAttribute('label',`${value}%`)
  });
</script>
```

```jsx react
import { useState } from 'react';
import { SlButton, SlIcon, SlProgressRing } from '@shoelace-style/shoelace/dist/react';

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
      <SlProgressRing value={value} style={{ marginBottom: '.5rem' }}>
        {value}%
      </SlProgressRing>

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

[component-metadata:i2c-progress-ring]
