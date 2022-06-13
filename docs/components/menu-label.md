# Menu Label

[component-header:i2c-menu-label]

Menu labels are used to describe a group of menu items.

```html preview
<i2c-menu style="max-width: 200px;">
  <i2c-menu-label>Fruits</i2c-menu-label>
  <i2c-menu-item value="apple">Apple</i2c-menu-item>
  <i2c-menu-item value="banana">Banana</i2c-menu-item>
  <i2c-menu-item value="orange">Orange</i2c-menu-item>
  <i2c-divider></i2c-divider>
  <i2c-menu-label>Vegetables</i2c-menu-label>
  <i2c-menu-item value="broccoli">Broccoli</i2c-menu-item>
  <i2c-menu-item value="carrot">Carrot</i2c-menu-item>
  <i2c-menu-item value="zucchini">Zucchini</i2c-menu-item>
</i2c-menu>
```

```jsx react
import { SlDivider, SlMenu, SlMenuLabel, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuLabel>Fruits</SlMenuLabel>
    <SlMenuItem value="apple">Apple</SlMenuItem>
    <SlMenuItem value="banana">Banana</SlMenuItem>
    <SlMenuItem value="orange">Orange</SlMenuItem>
    <SlDivider />
    <SlMenuLabel>Vegetables</SlMenuLabel>
    <SlMenuItem value="broccoli">Broccoli</SlMenuItem>
    <SlMenuItem value="carrot">Carrot</SlMenuItem>
    <SlMenuItem value="zucchini">Zucchini</SlMenuItem>
  </SlMenu>
);
```

[component-metadata:i2c-menu-label]
