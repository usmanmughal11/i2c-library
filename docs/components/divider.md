# Divider

[component-header:i2c-divider]

Dividers are used to visually separate or group elements.

```html preview
<i2c-divider></i2c-divider>
```

```jsx react
import { SlDivider } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlDivider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html preview
<i2c-divider style="--width: 4px;"></i2c-divider>
```

```jsx react
import { SlDivider } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlDivider style={{ '--width': '4px' }} />;
```

### Color

Use the `--color` custom property to change the color of the divider.

```html preview
<i2c-divider style="--color: tomato;"></i2c-divider>
```

```jsx react
import { SlDivider } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlDivider style={{ '--color': 'tomato' }} />;
```

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html preview
<div style="text-align: center;">
  Above
  <i2c-divider style="--spacing: 2rem;"></i2c-divider>
  Below
</div>
```

```jsx react
import { SlDivider } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    Above
    <SlDivider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <i2c-divider vertical></i2c-divider>
  Middle
  <i2c-divider vertical></i2c-divider>
  Last
</div>
```

```jsx react
import { SlDivider } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <SlDivider vertical />
    Middle
    <SlDivider vertical />
    Last
  </div>
);
```

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html preview
<i2c-menu style="max-width: 200px;">
  <i2c-menu-item value="1">Option 1</i2c-menu-item>
  <i2c-menu-item value="2">Option 2</i2c-menu-item>
  <i2c-menu-item value="3">Option 3</i2c-menu-item>
  <i2c-divider></i2c-divider>
  <i2c-menu-item value="4">Option 4</i2c-menu-item>
  <i2c-menu-item value="5">Option 5</i2c-menu-item>
  <i2c-menu-item value="6">Option 6</i2c-menu-item>
</i2c-menu>
```

```jsx react
import { SlDivider, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuItem value="1">Option 1</SlMenuItem>
    <SlMenuItem value="2">Option 2</SlMenuItem>
    <SlMenuItem value="3">Option 3</SlMenuItem>
    <i2c-divider />
    <SlMenuItem value="4">Option 4</SlMenuItem>
    <SlMenuItem value="5">Option 5</SlMenuItem>
    <SlMenuItem value="6">Option 6</SlMenuItem>
  </SlMenu>
);
```

[component-metadata:i2c-divider]
