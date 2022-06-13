# Radio Button

[component-header:i2c-radio-button]

Radios buttons allow the user to select a single option from a group using a button-like control.

Radio buttons are designed to be used with [radio groups](/components/radio-group). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html preview
<i2c-radio-group label="Select an option">
  <i2c-radio-button name="a" value="1" checked>Option 1</i2c-radio-button>
  <i2c-radio-button name="a" value="2">Option 2</i2c-radio-button>
  <i2c-radio-button name="a" value="3">Option 3</i2c-radio-button>
</i2c-radio-group>
```

```jsx react
import { SlRadioButton, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadioButton name="option" value="1" checked>
      Option 1
    </SlRadioButton>
    <SlRadioButton name="option" value="2">
      Option 2
    </SlRadioButton>
    <SlRadioButton name="option" value="3">
      Option 3
    </SlRadioButton>
  </SlRadioGroup>
);
```

## Examples

### Checked

To set the initial checked state, use the `checked` attribute.

```html preview
<i2c-radio-group label="Select an option">
  <i2c-radio-button name="option" value="1" checked>Option 1</i2c-radio-button>
  <i2c-radio-button name="option" value="2">Option 2</i2c-radio-button>
  <i2c-radio-button name="option" value="3">Option 3</i2c-radio-button>
</i2c-radio-group>
```

```jsx react
import { SlRadioButton, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadioButton name="option" value="1" checked>
      Option 1
    </SlRadioButton>
    <SlRadioButton name="option" value="2">
      Option 2
    </SlRadioButton>
    <SlRadioButton name="option" value="3">
      Option 3
    </SlRadioButton>
  </SlRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio button.

```html preview
<i2c-radio-group label="Select an option">
  <i2c-radio-button name="option" value="1" checked>Option 1</i2c-radio-button>
  <i2c-radio-button name="option" value="2">Option 2</i2c-radio-button>
  <i2c-radio-button name="option" value="3" disabled>Option 3</i2c-radio-button>
</i2c-radio-group>
```

```jsx react
import { SlRadioButton, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadioButton name="option" value="1" checked>
      Option 1
    </SlRadioButton>
    <SlRadioButton name="option" value="2">
      Option 2
    </SlRadioButton>
    <SlRadioButton name="option" value="3" disabled>
      Option 3
    </SlRadioButton>
  </SlRadioGroup>
);
```

### Sizes

Use the `size` attribute to change a radio button's size.

```html preview
<i2c-radio-group label="Select an option">
  <i2c-radio-button size="small" name="option" value="1" checked>Option 1</i2c-radio-button>
  <i2c-radio-button size="small" name="option" value="2">Option 2</i2c-radio-button>
  <i2c-radio-button size="small" name="option" value="3">Option 3</i2c-radio-button>
</i2c-radio-group>

<br />

<i2c-radio-group label="Select an option">
  <i2c-radio-button size="medium" name="option" value="1" checked>Option 1</i2c-radio-button>
  <i2c-radio-button size="medium" name="option" value="2">Option 2</i2c-radio-button>
  <i2c-radio-button size="medium" name="option" value="3">Option 3</i2c-radio-button>
</i2c-radio-group>

<br />

<i2c-radio-group label="Select an option">
  <i2c-radio-button size="large" name="option" value="1" checked>Option 1</i2c-radio-button>
  <i2c-radio-button size="large" name="option" value="2">Option 2</i2c-radio-button>
  <i2c-radio-button size="large" name="option" value="3">Option 3</i2c-radio-button>
</i2c-radio-group>
```

```jsx react
import { SlRadioButton, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadioButton size="small" name="option" value="1" checked>Option 1</SlRadioButton>
    <SlRadioButton size="small" name="option" value="2">Option 2</SlRadioButton>
    <SlRadioButton size="small" name="option" value="3">Option 3</SlRadioButton>
  </SlRadioGroup>

  <br />

  <SlRadioGroup label="Select an option">
    <SlRadioButton size="medium" name="option" value="1" checked>Option 1</SlRadioButton>
    <SlRadioButton size="medium" name="option" value="2">Option 2</SlRadioButton>
    <SlRadioButton size="medium" name="option" value="3">Option 3</SlRadioButton>
  </SlRadioGroup>

  <br />

  <SlRadioGroup label="Select an option">
    <SlRadioButton size="large" name="option" value="1" checked>Option 1</SlRadioButton>
    <SlRadioButton size="large" name="option" value="2">Option 2</SlRadioButton>
    <SlRadioButton size="large" name="option" value="3">Option 3</SlRadioButton>
  </SlRadioGroup>
);
```

### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html preview
<i2c-radio-group label="Select an option">
  <i2c-radio-button pill size="small" name="option" value="1" checked>Option 1</i2c-radio-button>
  <i2c-radio-button pill size="small" name="option" value="2">Option 2</i2c-radio-button>
  <i2c-radio-button pill size="small" name="option" value="3">Option 3</i2c-radio-button>
</i2c-radio-group>

<br />

<i2c-radio-group label="Select an option">
  <i2c-radio-button pill size="medium" name="option" value="1" checked>Option 1</i2c-radio-button>
  <i2c-radio-button pill size="medium" name="option" value="2">Option 2</i2c-radio-button>
  <i2c-radio-button pill size="medium" name="option" value="3">Option 3</i2c-radio-button>
</i2c-radio-group>

<br />

<i2c-radio-group label="Select an option">
  <i2c-radio-button pill size="large" name="option" value="1" checked>Option 1</i2c-radio-button>
  <i2c-radio-button pill size="large" name="option" value="2">Option 2</i2c-radio-button>
  <i2c-radio-button pill size="large" name="option" value="3">Option 3</i2c-radio-button>
</i2c-radio-group>
```

```jsx react
import { SlRadioButton, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadioButton pill size="small" name="option" value="1" checked>Option 1</SlRadioButton>
    <SlRadioButton pill size="small" name="option" value="2">Option 2</SlRadioButton>
    <SlRadioButton pill size="small" name="option" value="3">Option 3</SlRadioButton>
  </SlRadioGroup>

  <br />

  <SlRadioGroup label="Select an option">
    <SlRadioButton pill size="medium" name="option" value="1" checked>Option 1</SlRadioButton>
    <SlRadioButton pill size="medium" name="option" value="2">Option 2</SlRadioButton>
    <SlRadioButton pill size="medium" name="option" value="3">Option 3</SlRadioButton>
  </SlRadioGroup>

  <br />

  <SlRadioGroup label="Select an option">
    <SlRadioButton pill size="large" name="option" value="1" checked>Option 1</SlRadioButton>
    <SlRadioButton pill size="large" name="option" value="2">Option 2</SlRadioButton>
    <SlRadioButton pill size="large" name="option" value="3">Option 3</SlRadioButton>
  </SlRadioGroup>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<i2c-radio-group label="Select an option">
  <i2c-radio-button name="a" value="1" checked>
    <i2c-icon slot="prefix" name="archive"></i2c-icon>
    Option 1
  </i2c-radio-button>

  <i2c-radio-button name="a" value="2">
    <i2c-icon slot="suffix" name="bag"></i2c-icon>
    Option 2
  </i2c-radio-button>

  <i2c-radio-button name="a" value="3">
    <i2c-icon slot="prefix" name="gift"></i2c-icon>
    <i2c-icon slot="suffix" name="cart"></i2c-icon>
    Option 3
  </i2c-radio-button>
</i2c-radio-group>
```

```jsx react
import { SlIcon, SlRadioButton, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadioButton name="a" value="1" checked>
      <SlIcon slot="prefix" name="archive" />
      Option 1
    </SlRadioButton>

    <SlRadioButton name="a" value="2">
      <SlIcon slot="suffix" name="bag" />
      Option 2
    </SlRadioButton>

    <SlRadioButton name="a" value="3">
      <SlIcon slot="prefix" name="gift" />
      <SlIcon slot="suffix" name="cart" />
      Option 3
    </SlRadioButton>
  </SlRadioGroup>
);
```

### Buttons with Icons

You can omit button labels and use icons instead. Make sure to set a `label` attribute on each icon so screen readers will announce each option correctly.

```html preview
<i2c-radio-group label="Select an option">
  <i2c-radio-button name="a" value="angry">
    <i2c-icon name="emoji-angry" label="Angry"></i2c-icon>
  </i2c-radio-button>

  <i2c-radio-button name="a" value="sad">
    <i2c-icon name="emoji-frown" label="Sad"></i2c-icon>
  </i2c-radio-button>

  <i2c-radio-button name="a" value="neutral" checked>
    <i2c-icon name="emoji-neutral" label="Neutral"></i2c-icon>
  </i2c-radio-button>

  <i2c-radio-button name="a" value="happy">
    <i2c-icon name="emoji-smile" label="Happy"></i2c-icon>
  </i2c-radio-button>

  <i2c-radio-button name="a" value="laughing">
    <i2c-icon name="emoji-laughing" label="Laughing"></i2c-icon>
  </i2c-radio-button>
</i2c-radio-group>
```

```jsx react
import { SlIcon, SlRadioButton, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadioButton name="a" value="angry">
      <SlIcon name="emoji-angry" label="Angry" />
    </SlRadioButton>

    <SlRadioButton name="a" value="sad">
      <SlIcon name="emoji-frown" label="Sad" />
    </SlRadioButton>

    <SlRadioButton name="a" value="neutral" checked>
      <SlIcon name="emoji-neutral" label="Neutral" />
    </SlRadioButton>

    <SlRadioButton name="a" value="happy">
      <SlIcon name="emoji-smile" label="Happy" />
    </SlRadioButton>

    <SlRadioButton name="a" value="laughing">
      <SlIcon name="emoji-laughing" label="Laughing" />
    </SlRadioButton>
  </SlRadioGroup>
);
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <i2c-radio-group label="Select an option">
    <i2c-radio-button name="a" value="1" checked>Not me</i2c-radio-button>
    <i2c-radio-button name="a" value="2">Me neither</i2c-radio-button>
    <i2c-radio-button name="a" value="3">Choose me</i2c-radio-button>
  </i2c-radio-group>
  <br />
  <i2c-button type="submit" variant="primary">Submit</i2c-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const radioButton = form.querySelectorAll('i2c-radio-button')[2];
  const errorMessage = 'You must choose this option';
  // Set initial validity as soon as the element is defined
  customElements.whenDefined('i2c-radio-button').then(() => {
    radioButton.setCustomValidity(errorMessage);
  });
  // Update validity when a selection is made
  form.addEventListener('i2c-change', () => {
    const isValid = radioButton.checked;
    radioButton.setCustomValidity(isValid ? '' : errorMessage);
  });
  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { SlButton, SlIcon, SlRadioButton, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';
const App = () => {
  const radio = useRef(null);
  const errorMessage = 'You must choose this option';
  function handleChange(event) {
    radio.current.setCustomValidity(radio.current.checked ? '' : errorMessage);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }
  useEffect(() => {
    radio.current.setCustomValidity(errorMessage);
  }, []);
  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <SlRadioGroup label="Select an option">
        <SlRadioButton name="a" value="1" checked onSlChange={handleChange}>
          Not me
        </SlRadioButton>
        <SlRadioButton name="a" value="2" onSlChange={handleChange}>
          Me neither
        </SlRadioButton>
        <SlRadioButton ref={radio} name="a" value="3" onSlChange={handleChange}>
          Choose me
        </SlRadioButton>
      </SlRadioGroup>
      <br />
      <SlButton type="submit" variant="primary">
        Submit
      </SlButton>
    </form>
  );
};
```

[component-metadata:i2c-radio-button]
