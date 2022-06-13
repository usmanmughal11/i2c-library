# Menu

[component-header:i2c-menu]

Menus provide a list of options for the user to choose from.

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html preview
<i2c-menu style="max-width: 200px;">
  <i2c-menu-item value="undo">Undo</i2c-menu-item>
  <i2c-menu-item value="redo">Redo</i2c-menu-item>
  <i2c-divider></i2c-divider>
  <i2c-menu-item value="cut">Cut</i2c-menu-item>
  <i2c-menu-item value="copy">Copy</i2c-menu-item>
  <i2c-menu-item value="paste">Paste</i2c-menu-item>
  <i2c-menu-item value="delete">Delete</i2c-menu-item>
</i2c-menu>
```

```jsx react
import { SlDivider, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuItem value="undo">Undo</SlMenuItem>
    <SlMenuItem value="redo">Redo</SlMenuItem>
    <SlDivider />
    <SlMenuItem value="cut">Cut</SlMenuItem>
    <SlMenuItem value="copy">Copy</SlMenuItem>
    <SlMenuItem value="paste">Paste</SlMenuItem>
    <SlMenuItem value="delete">Delete</SlMenuItem>
  </SlMenu>
);
```

?> Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.

[component-metadata:i2c-menu]
