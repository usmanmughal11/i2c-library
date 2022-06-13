# Menu Item

[component-header:i2c-menu-item]

Menu items provide options for the user to pick from in a menu.

```html preview
<i2c-menu style="max-width: 200px;">
  <i2c-menu-item>Option 1</i2c-menu-item>
  <i2c-menu-item>Option 2</i2c-menu-item>
  <i2c-menu-item>Option 3</i2c-menu-item>
  <i2c-divider></i2c-divider>
  <i2c-menu-item checked>Checked</i2c-menu-item>
  <i2c-menu-item disabled>Disabled</i2c-menu-item>
  <i2c-divider></i2c-divider>
  <i2c-menu-item>
    Prefix Icon
    <i2c-icon slot="prefix" name="gift"></i2c-icon>
  </i2c-menu-item>
  <i2c-menu-item>
    Suffix Icon
    <i2c-icon slot="suffix" name="heart"></i2c-icon>
  </i2c-menu-item>
</i2c-menu>
```

```jsx react
import { SlDivider, SlIcon, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuItem>Option 1</SlMenuItem>
    <SlMenuItem>Option 2</SlMenuItem>
    <SlMenuItem>Option 3</SlMenuItem>
    <SlDivider />
    <SlMenuItem checked>Checked</SlMenuItem>
    <SlMenuItem disabled>Disabled</SlMenuItem>
    <SlDivider />
    <SlMenuItem>
      Prefix Icon
      <SlIcon slot="prefix" name="gift" />
    </SlMenuItem>
    <SlMenuItem>
      Suffix Icon
      <SlIcon slot="suffix" name="heart" />
    </SlMenuItem>
  </SlMenu>
);
```

## Examples

### Checked

Use the `checked` attribute to draw menu items in a checked state.

```html preview
<i2c-menu style="max-width: 200px;">
  <i2c-menu-item>Option 1</i2c-menu-item>
  <i2c-menu-item checked>Option 2</i2c-menu-item>
  <i2c-menu-item>Option 3</i2c-menu-item>
</i2c-menu>
```

```jsx react
import { SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuItem>Option 1</SlMenuItem>
    <SlMenuItem checked>Option 2</SlMenuItem>
    <SlMenuItem>Option 3</SlMenuItem>
  </SlMenu>
);
```

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html preview
<i2c-menu style="max-width: 200px;">
  <i2c-menu-item>Option 1</i2c-menu-item>
  <i2c-menu-item disabled>Option 2</i2c-menu-item>
  <i2c-menu-item>Option 3</i2c-menu-item>
</i2c-menu>
```

```jsx react
import { SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuItem>Option 1</SlMenuItem>
    <SlMenuItem disabled>Option 2</SlMenuItem>
    <SlMenuItem>Option 3</SlMenuItem>
  </SlMenu>
);
```

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html preview
<i2c-menu style="max-width: 200px;">
  <i2c-menu-item>
    <i2c-icon slot="prefix" name="house"></i2c-icon>
    Home
  </i2c-menu-item>

  <i2c-menu-item>
    <i2c-icon slot="prefix" name="envelope"></i2c-icon>
    Messages
    <i2c-badge slot="suffix" variant="primary" pill>12</i2c-badge>
  </i2c-menu-item>

  <i2c-divider></i2c-divider>

  <i2c-menu-item>
    <i2c-icon slot="prefix" name="gear"></i2c-icon>
    Settings
  </i2c-menu-item>
</i2c-menu>
```

```jsx react
import { SlBadge, SlDivider, SlIcon, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuItem>
      <SlIcon slot="prefix" name="house" />
      Home
    </SlMenuItem>

    <SlMenuItem>
      <SlIcon slot="prefix" name="envelope" />
      Messages
      <SlBadge slot="suffix" variant="primary" pill>
        12
      </SlBadge>
    </SlMenuItem>

    <SlDivider />

    <SlMenuItem>
      <SlIcon slot="prefix" name="gear" />
      Settings
    </SlMenuItem>
  </SlMenu>
);
```

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `i2c-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html preview
<i2c-menu class="menu-value" style="max-width: 200px;">
  <i2c-menu-item value="opt-1">Option 1</i2c-menu-item>
  <i2c-menu-item value="opt-2">Option 2</i2c-menu-item>
  <i2c-menu-item value="opt-3">Option 3</i2c-menu-item>
</i2c-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('i2c-select', event => {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  });
</script>
```

```jsx react
import { SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <SlMenu style={{ maxWidth: '200px' }} onSlSelect={handleSelect}>
      <SlMenuItem value="opt-1">Option 1</SlMenuItem>
      <SlMenuItem value="opt-2">Option 2</SlMenuItem>
      <SlMenuItem value="opt-3">Option 3</SlMenuItem>
    </SlMenu>
  );
};
```

[component-metadata:i2c-menu-item]
