# Button

[component-header:i2c-button]

Buttons represent actions that are available to the user.

```html preview
<i2c-button>Button</i2c-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlButton>Button</SlButton>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html preview
<i2c-button variant="default">Default</i2c-button>
<i2c-button variant="primary">Primary</i2c-button>
<i2c-button variant="success">Success</i2c-button>
<i2c-button variant="neutral">Neutral</i2c-button>
<i2c-button variant="warning">Warning</i2c-button>
<i2c-button variant="danger">Danger</i2c-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default">Default</SlButton>
    <SlButton variant="primary">Primary</SlButton>
    <SlButton variant="success">Success</SlButton>
    <SlButton variant="neutral">Neutral</SlButton>
    <SlButton variant="warning">Warning</SlButton>
    <SlButton variant="danger">Danger</SlButton>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html preview
<i2c-button size="small">Small</i2c-button>
<i2c-button size="medium">Medium</i2c-button>
<i2c-button size="large">Large</i2c-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton size="small">Small</SlButton>
    <SlButton size="medium">Medium</SlButton>
    <SlButton size="large">Large</SlButton>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html preview
<i2c-button variant="default" outline>Default</i2c-button>
<i2c-button variant="primary" outline>Primary</i2c-button>
<i2c-button variant="success" outline>Success</i2c-button>
<i2c-button variant="neutral" outline>Neutral</i2c-button>
<i2c-button variant="warning" outline>Warning</i2c-button>
<i2c-button variant="danger" outline>Danger</i2c-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default" outline>
      Default
    </SlButton>
    <SlButton variant="primary" outline>
      Primary
    </SlButton>
    <SlButton variant="success" outline>
      Success
    </SlButton>
    <SlButton variant="neutral" outline>
      Neutral
    </SlButton>
    <SlButton variant="warning" outline>
      Warning
    </SlButton>
    <SlButton variant="danger" outline>
      Danger
    </SlButton>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html preview
<i2c-button size="small" pill>Small</i2c-button>
<i2c-button size="medium" pill>Medium</i2c-button>
<i2c-button size="large" pill>Large</i2c-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton size="small" pill>
      Small
    </SlButton>
    <SlButton size="medium" pill>
      Medium
    </SlButton>
    <SlButton size="large" pill>
      Large
    </SlButton>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons.

```html preview
<i2c-button variant="default" size="small" circle>
  <i2c-icon name="gear" label="Settings"></i2c-icon>
</i2c-button>

<i2c-button variant="default" size="medium" circle>
  <i2c-icon name="gear" label="Settings"></i2c-icon>
</i2c-button>

<i2c-button variant="default" size="large" circle>
  <i2c-icon name="gear" label="Settings"></i2c-icon>
</i2c-button>
```

```jsx react
import { SlButton, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default" size="small" circle>
      <SlIcon name="gear" />
    </SlButton>
    <SlButton variant="default" size="medium" circle>
      <SlIcon name="gear" />
    </SlButton>
    <SlButton variant="default" size="large" circle>
      <SlIcon name="gear" />
    </SlButton>
  </>
);
```

### Text Buttons

Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html preview
<i2c-button variant="text" size="small">Text</i2c-button>
<i2c-button variant="text" size="medium">Text</i2c-button>
<i2c-button variant="text" size="large">Text</i2c-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="text" size="small">
      Text
    </SlButton>
    <SlButton variant="text" size="medium">
      Text
    </SlButton>
    <SlButton variant="text" size="large">
      Text
    </SlButton>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` and `download` attributes.

```html preview
<i2c-button href="https://example.com/">Link</i2c-button>
<i2c-button href="https://example.com/" target="_blank">New Window</i2c-button>
<i2c-button href="/assets/images/i2c_logo.svg" download="shoelace.svg">Download</i2c-button>
<i2c-button href="https://example.com/" disabled>Disabled</i2c-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton href="https://example.com/">Link</SlButton>
    <SlButton href="https://example.com/" target="_blank">
      New Window
    </SlButton>
    <SlButton href="/assets/images/i2c_logo.svg" download="shoelace.svg">
      Download
    </SlButton>
    <SlButton href="https://example.com/" disabled>
      Disabled
    </SlButton>
  </>
);
```

?> When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html preview
<i2c-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</i2c-button>
<i2c-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</i2c-button>
<i2c-button variant="default" size="large" style="width: 100%;">Large</i2c-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Small
    </SlButton>
    <SlButton variant="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Medium
    </SlButton>
    <SlButton variant="default" size="large" style={{ width: '100%' }}>
      Large
    </SlButton>
  </>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<i2c-button variant="default" size="small">
  <i2c-icon slot="prefix" name="gear"></i2c-icon>
  Settings
</i2c-button>

<i2c-button variant="default" size="small">
  <i2c-icon slot="suffix" name="arrow-counterclockwise"></i2c-icon>
  Refresh
</i2c-button>

<i2c-button variant="default" size="small">
  <i2c-icon slot="prefix" name="link-45deg"></i2c-icon>
  <i2c-icon slot="suffix" name="box-arrow-up-right"></i2c-icon>
  Open
</i2c-button>

<br /><br />

<i2c-button variant="default">
  <i2c-icon slot="prefix" name="gear"></i2c-icon>
  Settings
</i2c-button>

<i2c-button variant="default">
  <i2c-icon slot="suffix" name="arrow-counterclockwise"></i2c-icon>
  Refresh
</i2c-button>

<i2c-button variant="default">
  <i2c-icon slot="prefix" name="link-45deg"></i2c-icon>
  <i2c-icon slot="suffix" name="box-arrow-up-right"></i2c-icon>
  Open
</i2c-button>

<br /><br />

<i2c-button variant="default" size="large">
  <i2c-icon slot="prefix" name="gear"></i2c-icon>
  Settings
</i2c-button>

<i2c-button variant="default" size="large">
  <i2c-icon slot="suffix" name="arrow-counterclockwise"></i2c-icon>
  Refresh
</i2c-button>

<i2c-button variant="default" size="large">
  <i2c-icon slot="prefix" name="link-45deg"></i2c-icon>
  <i2c-icon slot="suffix" name="box-arrow-up-right"></i2c-icon>
  Open
</i2c-button>
```

```jsx react
import { SlButton, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default" size="small">
      <SlIcon slot="prefix" name="gear"></SlIcon>
      Settings
    </SlButton>

    <SlButton variant="default" size="small">
      <SlIcon slot="suffix" name="arrow-counterclockwise"></SlIcon>
      Refresh
    </SlButton>

    <SlButton variant="default" size="small">
      <SlIcon slot="prefix" name="link-45deg"></SlIcon>
      <SlIcon slot="suffix" name="box-arrow-up-right"></SlIcon>
      Open
    </SlButton>

    <br />
    <br />

    <SlButton variant="default">
      <SlIcon slot="prefix" name="gear"></SlIcon>
      Settings
    </SlButton>

    <SlButton variant="default">
      <SlIcon slot="suffix" name="arrow-counterclockwise"></SlIcon>
      Refresh
    </SlButton>

    <SlButton variant="default">
      <SlIcon slot="prefix" name="link-45deg"></SlIcon>
      <SlIcon slot="suffix" name="box-arrow-up-right"></SlIcon>
      Open
    </SlButton>

    <br />
    <br />

    <SlButton variant="default" size="large">
      <SlIcon slot="prefix" name="gear"></SlIcon>
      Settings
    </SlButton>

    <SlButton variant="default" size="large">
      <SlIcon slot="suffix" name="arrow-counterclockwise"></SlIcon>
      Refresh
    </SlButton>

    <SlButton variant="default" size="large">
      <SlIcon slot="prefix" name="link-45deg"></SlIcon>
      <SlIcon slot="suffix" name="box-arrow-up-right"></SlIcon>
      Open
    </SlButton>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html preview
<i2c-button size="small" caret>Small</i2c-button>
<i2c-button size="medium" caret>Medium</i2c-button>
<i2c-button size="large" caret>Large</i2c-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton size="small" caret>
      Small
    </SlButton>
    <SlButton size="medium" caret>
      Medium
    </SlButton>
    <SlButton size="large" caret>
      Large
    </SlButton>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

```html preview
<i2c-button variant="default" loading>Default</i2c-button>
<i2c-button variant="primary" loading>Primary</i2c-button>
<i2c-button variant="success" loading>Success</i2c-button>
<i2c-button variant="neutral" loading>Neutral</i2c-button>
<i2c-button variant="warning" loading>Warning</i2c-button>
<i2c-button variant="danger" loading>Danger</i2c-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default" loading>
      Default
    </SlButton>
    <SlButton variant="primary" loading>
      Primary
    </SlButton>
    <SlButton variant="success" loading>
      Success
    </SlButton>
    <SlButton variant="neutral" loading>
      Neutral
    </SlButton>
    <SlButton variant="warning" loading>
      Warning
    </SlButton>
    <SlButton variant="danger" loading>
      Danger
    </SlButton>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

```html preview
<i2c-button variant="default" disabled>Default</i2c-button>
<i2c-button variant="primary" disabled>Primary</i2c-button>
<i2c-button variant="success" disabled>Success</i2c-button>
<i2c-button variant="neutral" disabled>Neutral</i2c-button>
<i2c-button variant="warning" disabled>Warning</i2c-button>
<i2c-button variant="danger" disabled>Danger</i2c-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default" disabled>
      Default
    </SlButton>

    <SlButton variant="primary" disabled>
      Primary
    </SlButton>

    <SlButton variant="success" disabled>
      Success
    </SlButton>

    <SlButton variant="neutral" disabled>
      Neutral
    </SlButton>

    <SlButton variant="warning" disabled>
      Warning
    </SlButton>

    <SlButton variant="danger" disabled>
      Danger
    </SlButton>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `i2c-button[variant="primary"]`).

```html preview
<i2c-button class="pink">Pink Button</i2c-button>

<style>
  i2c-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --i2c-input-height-medium: 48px;
    --i2c-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--i2c-transition-medium) transform ease, var(--i2c-transition-medium) border ease;
  }

  i2c-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  i2c-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  i2c-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```

[component-metadata:i2c-button]
