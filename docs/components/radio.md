# Radio

[component-header:i2c-radio]

Radios allow the user to select a single option from a group.

Radios are designed to be used with [radio groups](/components/radio-group).

```html preview
<i2c-radio-group label="Select an option">
  <i2c-radio name="option" value="1" checked>Option 1</i2c-radio>
  <i2c-radio name="option" value="2">Option 2</i2c-radio>
  <i2c-radio name="option" value="3">Option 3</i2c-radio>
</i2c-radio-group>
```

```jsx react
import { SlRadio, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadio name="option" value="1" checked>
      Option 1
    </SlRadio>
    <SlRadio name="option" value="2">
      Option 2
    </SlRadio>
    <SlRadio name="option" value="3">
      Option 3
    </SlRadio>
  </SlRadioGroup>
);
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

To set the initial checked state, use the `checked` attribute.

```html preview
<i2c-radio-group label="Select an option">
  <i2c-radio name="option" value="1" checked>Option 1</i2c-radio>
  <i2c-radio name="option" value="2">Option 2</i2c-radio>
  <i2c-radio name="option" value="3">Option 3</i2c-radio>
</i2c-radio-group>
```

```jsx react
import { SlRadio, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadio name="option" value="1" checked>
      Option 1
    </SlRadio>
    <SlRadio name="option" value="2">
      Option 2
    </SlRadio>
    <SlRadio name="option" value="3">
      Option 3
    </SlRadio>
  </SlRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html preview
<i2c-radio-group label="Select an option">
  <i2c-radio name="option" value="1" checked>Option 1</i2c-radio>
  <i2c-radio name="option" value="2">Option 2</i2c-radio>
  <i2c-radio name="option" value="3" disabled>Option 3</i2c-radio>
</i2c-radio-group>
```

```jsx react
import { SlRadio, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadio name="option" value="1" checked>
      Option 1
    </SlRadio>
    <SlRadio name="option" value="2">
      Option 2
    </SlRadio>
    <SlRadio name="option" value="3" disabled>
      Option 3
    </SlRadio>
  </SlRadioGroup>
);
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <i2c-radio-group label="Select an option">
    <i2c-radio name="a" value="1" checked>Not me</i2c-radio>
    <i2c-radio name="a" value="2">Me neither</i2c-radio>
    <i2c-radio name="a" value="3">Choose me</i2c-radio>
  </i2c-radio-group>
  <br />
  <i2c-button type="submit" variant="primary">Submit</i2c-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const radio = form.querySelectorAll('i2c-radio')[2];
  const errorMessage = 'You must choose this option';
  // Set initial validity as soon as the element is defined
  customElements.whenDefined('i2c-radio').then(() => {
    radio.setCustomValidity(errorMessage);
  });
  // Update validity when a selection is made
  form.addEventListener('i2c-change', () => {
    const isValid = radio.checked;
    radio.setCustomValidity(isValid ? '' : errorMessage);
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
import { SlButton, SlIcon, SlRadio, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';
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
        <SlRadio name="a" value="1" checked onSlChange={handleChange}>
          Not me
        </SlRadio>
        <SlRadio name="a" value="2" onSlChange={handleChange}>
          Me neither
        </SlRadio>
        <SlRadio ref={radio} name="a" value="3" onSlChange={handleChange}>
          Choose me
        </SlRadio>
      </SlRadioGroup>
      <br />
      <SlButton type="submit" variant="primary">
        Submit
      </SlButton>
    </form>
  );
};
```

[component-metadata:i2c-radio]
