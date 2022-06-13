# Checkbox

[component-header:i2c-checkbox]

Checkboxes allow the user to toggle an option on or off.

```html preview
<i2c-checkbox>Checkbox</i2c-checkbox>
```

```jsx react
import { SlCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlCheckbox>Checkbox</SlCheckbox>;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html preview
<i2c-checkbox checked>Checked</i2c-checkbox>
```

```jsx react
import { SlCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlCheckbox checked>Checked</SlCheckbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html preview
<i2c-checkbox indeterminate>Indeterminate</i2c-checkbox>
```

```jsx react
import { SlCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlCheckbox indeterminate>Indeterminate</SlCheckbox>;
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html preview
<i2c-checkbox disabled>Disabled</i2c-checkbox>
```

```jsx react
import { SlCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlCheckbox disabled>Disabled</SlCheckbox>;
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <i2c-checkbox>Check me</i2c-checkbox>
  <br />
  <i2c-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</i2c-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('i2c-checkbox');
  const errorMessage = `Don't forget to check me!`;
  // Set initial validity as soon as the element is defined
  customElements.whenDefined('i2c-checkbox').then(() => {
    checkbox.setCustomValidity(errorMessage);
  });
  // Update validity on change
  checkbox.addEventListener('i2c-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });
  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { SlButton, SlCheckbox } from '@shoelace-style/shoelace/dist/react';
const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Don't forget to check me!`;
  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }
  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);
  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <SlCheckbox ref={checkbox} onSlChange={handleChange}>
        Check me
      </SlCheckbox>
      <br />
      <SlButton type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </SlButton>
    </form>
  );
};
```

[component-metadata:i2c-checkbox]
