# Dropdown

[component-header:i2c-dropdown]

Dropdowns expose additional content that "drops down" in a panel.

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker) and [select](/components/select)). The API gives you complete control over showing, hiding, and positioning the panel.

```html preview
<i2c-dropdown>
  <i2c-button slot="trigger" caret>Dropdown</i2c-button>
  <i2c-menu>
    <i2c-menu-item>Dropdown Item 1</i2c-menu-item>
    <i2c-menu-item>Dropdown Item 2</i2c-menu-item>
    <i2c-menu-item>Dropdown Item 3</i2c-menu-item>
    <i2c-divider></i2c-divider>
    <i2c-menu-item checked>Checked</i2c-menu-item>
    <i2c-menu-item disabled>Disabled</i2c-menu-item>
    <i2c-divider></i2c-divider>
    <i2c-menu-item>
      Prefix
      <i2c-icon slot="prefix" name="gift"></i2c-icon>
    </i2c-menu-item>
    <i2c-menu-item>
      Suffix Icon
      <i2c-icon slot="suffix" name="heart"></i2c-icon>
    </i2c-menu-item>
  </i2c-menu>
</i2c-dropdown>
```

```jsx react
import { SlButton, SlDivider, SlDropdown, SlIcon, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlDropdown>
    <SlButton slot="trigger" caret>
      Dropdown
    </SlButton>
    <SlMenu>
      <SlMenuItem>Dropdown Item 1</SlMenuItem>
      <SlMenuItem>Dropdown Item 2</SlMenuItem>
      <SlMenuItem>Dropdown Item 3</SlMenuItem>
      <SlDivider />
      <SlMenuItem checked>Checked</SlMenuItem>
      <SlMenuItem disabled>Disabled</SlMenuItem>
      <SlDivider />
      <SlMenuItem>
        Prefix
        <SlIcon slot="prefix" name="gift" />
      </SlMenuItem>
      <SlMenuItem>
        Suffix Icon
        <SlIcon slot="suffix" name="heart" />
      </SlMenuItem>
    </SlMenu>
  </SlDropdown>
);
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the `i2c-select` event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html preview
<div class="dropdown-selection">
  <i2c-dropdown>
    <i2c-button slot="trigger" caret>Edit</i2c-button>
    <i2c-menu>
      <i2c-menu-item value="cut">Cut</i2c-menu-item>
      <i2c-menu-item value="copy">Copy</i2c-menu-item>
      <i2c-menu-item value="paste">Paste</i2c-menu-item>
    </i2c-menu>
  </i2c-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('i2c-dropdown');

  dropdown.addEventListener('i2c-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

```jsx react
import { SlButton, SlDropdown, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  function handleSelect(event) {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  }

  return (
    <SlDropdown>
      <SlButton slot="trigger" caret>
        Edit
      </SlButton>
      <SlMenu onSlSelect={handleSelect}>
        <SlMenuItem value="cut">Cut</SlMenuItem>
        <SlMenuItem value="copy">Copy</SlMenuItem>
        <SlMenuItem value="paste">Paste</SlMenuItem>
      </SlMenu>
    </SlDropdown>
  );
};
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html preview
<div class="dropdown-selection-alt">
  <i2c-dropdown>
    <i2c-button slot="trigger" caret>Edit</i2c-button>
    <i2c-menu>
      <i2c-menu-item value="cut">Cut</i2c-menu-item>
      <i2c-menu-item value="copy">Copy</i2c-menu-item>
      <i2c-menu-item value="paste">Paste</i2c-menu-item>
    </i2c-menu>
  </i2c-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('i2c-menu-item[value="cut"]');
  const copy = container.querySelector('i2c-menu-item[value="copy"]');
  const paste = container.querySelector('i2c-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

```jsx react
import { SlButton, SlDropdown, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  function handleCut() {
    console.log('cut');
  }

  function handleCopy() {
    console.log('copy');
  }

  function handlePaste() {
    console.log('paste');
  }

  return (
    <SlDropdown>
      <SlButton slot="trigger" caret>
        Edit
      </SlButton>
      <SlMenu>
        <SlMenuItem onClick={handleCut}>Cut</SlMenuItem>
        <SlMenuItem onClick={handleCopy}>Copy</SlMenuItem>
        <SlMenuItem onClick={handlePaste}>Paste</SlMenuItem>
      </SlMenu>
    </SlDropdown>
  );
};
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html preview
<i2c-dropdown placement="top-start">
  <i2c-button slot="trigger" caret>Edit</i2c-button>
  <i2c-menu>
    <i2c-menu-item>Cut</i2c-menu-item>
    <i2c-menu-item>Copy</i2c-menu-item>
    <i2c-menu-item>Paste</i2c-menu-item>
    <i2c-divider></i2c-divider>
    <i2c-menu-item>Find</i2c-menu-item>
    <i2c-menu-item>Replace</i2c-menu-item>
  </i2c-menu>
</i2c-dropdown>
```

```jsx react
import { SlButton, SlDivider, SlDropdown, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlDropdown placement="top-start">
    <SlButton slot="trigger" caret>
      Edit
    </SlButton>
    <SlMenu>
      <SlMenuItem>Cut</SlMenuItem>
      <SlMenuItem>Copy</SlMenuItem>
      <SlMenuItem>Paste</SlMenuItem>
      <SlDivider />
      <SlMenuItem>Find</SlMenuItem>
      <SlMenuItem>Replace</SlMenuItem>
    </SlMenu>
  </SlDropdown>
);
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html preview
<i2c-dropdown distance="30">
  <i2c-button slot="trigger" caret>Edit</i2c-button>
  <i2c-menu>
    <i2c-menu-item>Cut</i2c-menu-item>
    <i2c-menu-item>Copy</i2c-menu-item>
    <i2c-menu-item>Paste</i2c-menu-item>
    <i2c-divider></i2c-divider>
    <i2c-menu-item>Find</i2c-menu-item>
    <i2c-menu-item>Replace</i2c-menu-item>
  </i2c-menu>
</i2c-dropdown>
```

```jsx react
import { SlButton, SlDivider, SlDropdown, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlDropdown distance={30}>
    <SlButton slot="trigger" caret>
      Edit
    </SlButton>
    <SlMenu>
      <SlMenuItem>Cut</SlMenuItem>
      <SlMenuItem>Copy</SlMenuItem>
      <SlMenuItem>Paste</SlMenuItem>
      <SlDivider />
      <SlMenuItem>Find</SlMenuItem>
      <SlMenuItem>Replace</SlMenuItem>
    </SlMenu>
  </SlDropdown>
);
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html preview
<i2c-dropdown skidding="30">
  <i2c-button slot="trigger" caret>Edit</i2c-button>
  <i2c-menu>
    <i2c-menu-item>Cut</i2c-menu-item>
    <i2c-menu-item>Copy</i2c-menu-item>
    <i2c-menu-item>Paste</i2c-menu-item>
    <i2c-divider></i2c-divider>
    <i2c-menu-item>Find</i2c-menu-item>
    <i2c-menu-item>Replace</i2c-menu-item>
  </i2c-menu>
</i2c-dropdown>
```

```jsx react
import { SlButton, SlDivider, SlDropdown, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlDropdown skidding={30}>
    <SlButton slot="trigger" caret>
      Edit
    </SlButton>
    <SlMenu>
      <SlMenuItem>Cut</SlMenuItem>
      <SlMenuItem>Copy</SlMenuItem>
      <SlMenuItem>Paste</SlMenuItem>
      <SlDivider />
      <SlMenuItem>Find</SlMenuItem>
      <SlMenuItem>Replace</SlMenuItem>
    </SlMenu>
  </SlDropdown>
);
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="dropdown-hoist">
  <i2c-dropdown>
    <i2c-button slot="trigger" caret>No Hoist</i2c-button>
    <i2c-menu>
      <i2c-menu-item>Item 1</i2c-menu-item>
      <i2c-menu-item>Item 2</i2c-menu-item>
      <i2c-menu-item>Item 3</i2c-menu-item>
    </i2c-menu>
  </i2c-dropdown>

  <i2c-dropdown hoist>
    <i2c-button slot="trigger" caret>Hoist</i2c-button>
    <i2c-menu>
      <i2c-menu-item>Item 1</i2c-menu-item>
      <i2c-menu-item>Item 2</i2c-menu-item>
      <i2c-menu-item>Item 3</i2c-menu-item>
    </i2c-menu>
  </i2c-dropdown>
</div>

<style>
  .dropdown-hoist {
    border: solid 2px var(--i2c-panel-border-color);
    padding: var(--i2c-spacing-medium);
    overflow: hidden;
  }
</style>
```

```jsx react
import { SlButton, SlDivider, SlDropdown, SlIcon, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--i2c-panel-border-color);
    padding: var(--i2c-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="dropdown-hoist">
      <SlDropdown>
        <SlButton slot="trigger" caret>
          No Hoist
        </SlButton>
        <SlMenu>
          <SlMenuItem>Item 1</SlMenuItem>
          <SlMenuItem>Item 2</SlMenuItem>
          <SlMenuItem>Item 3</SlMenuItem>
        </SlMenu>
      </SlDropdown>

      <SlDropdown hoist>
        <SlButton slot="trigger" caret>
          Hoist
        </SlButton>
        <SlMenu>
          <SlMenuItem>Item 1</SlMenuItem>
          <SlMenuItem>Item 2</SlMenuItem>
          <SlMenuItem>Item 3</SlMenuItem>
        </SlMenu>
      </SlDropdown>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:i2c-dropdown]
