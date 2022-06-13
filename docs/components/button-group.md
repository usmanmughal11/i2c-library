# Button Group

[component-header:i2c-button-group]

Button groups can be used to group related buttons into sections.

```html preview
<i2c-button-group>
  <i2c-button>Left</i2c-button>
  <i2c-button>Center</i2c-button>
  <i2c-button>Right</i2c-button>
</i2c-button-group>
```

```jsx react
import { SlButton, SlButtonGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlButtonGroup>
    <SlButton>Left</SlButton>
    <SlButton>Center</SlButton>
    <SlButton>Right</SlButton>
  </SlButtonGroup>
);
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html preview
<i2c-button-group>
  <i2c-button size="small">Left</i2c-button>
  <i2c-button size="small">Center</i2c-button>
  <i2c-button size="small">Right</i2c-button>
</i2c-button-group>

<br /><br />

<i2c-button-group>
  <i2c-button size="medium">Left</i2c-button>
  <i2c-button size="medium">Center</i2c-button>
  <i2c-button size="medium">Right</i2c-button>
</i2c-button-group>

<br /><br />

<i2c-button-group>
  <i2c-button size="large">Left</i2c-button>
  <i2c-button size="large">Center</i2c-button>
  <i2c-button size="large">Right</i2c-button>
</i2c-button-group>
```

```jsx react
import { SlButton, SlButtonGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButtonGroup>
      <SlButton size="small">Left</SlButton>
      <SlButton size="small">Center</SlButton>
      <SlButton size="small">Right</SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup>
      <SlButton size="medium">Left</SlButton>
      <SlButton size="medium">Center</SlButton>
      <SlButton size="medium">Right</SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup>
      <SlButton size="large">Left</SlButton>
      <SlButton size="large">Center</SlButton>
      <SlButton size="large">Right</SlButton>
    </SlButtonGroup>
  </>
);
```

### Theme Buttons

Theme buttons are supported through the button's `type` attribute.

```html preview
<i2c-button-group>
  <i2c-button variant="primary">Left</i2c-button>
  <i2c-button variant="primary">Center</i2c-button>
  <i2c-button variant="primary">Right</i2c-button>
</i2c-button-group>

<br /><br />

<i2c-button-group>
  <i2c-button variant="success">Left</i2c-button>
  <i2c-button variant="success">Center</i2c-button>
  <i2c-button variant="success">Right</i2c-button>
</i2c-button-group>

<br /><br />

<i2c-button-group>
  <i2c-button variant="neutral">Left</i2c-button>
  <i2c-button variant="neutral">Center</i2c-button>
  <i2c-button variant="neutral">Right</i2c-button>
</i2c-button-group>

<br /><br />

<i2c-button-group>
  <i2c-button variant="warning">Left</i2c-button>
  <i2c-button variant="warning">Center</i2c-button>
  <i2c-button variant="warning">Right</i2c-button>
</i2c-button-group>

<br /><br />

<i2c-button-group>
  <i2c-button variant="danger">Left</i2c-button>
  <i2c-button variant="danger">Center</i2c-button>
  <i2c-button variant="danger">Right</i2c-button>
</i2c-button-group>
```

```jsx react
import { SlButton, SlButtonGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButtonGroup>
      <SlButton variant="primary">Left</SlButton>
      <SlButton variant="primary">Center</SlButton>
      <SlButton variant="primary">Right</SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup>
      <SlButton variant="success">Left</SlButton>
      <SlButton variant="success">Center</SlButton>
      <SlButton variant="success">Right</SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup>
      <SlButton variant="neutral">Left</SlButton>
      <SlButton variant="neutral">Center</SlButton>
      <SlButton variant="neutral">Right</SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup>
      <SlButton variant="warning">Left</SlButton>
      <SlButton variant="warning">Center</SlButton>
      <SlButton variant="warning">Right</SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup>
      <SlButton variant="danger">Left</SlButton>
      <SlButton variant="danger">Center</SlButton>
      <SlButton variant="danger">Right</SlButton>
    </SlButtonGroup>
  </>
);
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html preview
<i2c-button-group>
  <i2c-button size="small" pill>Left</i2c-button>
  <i2c-button size="small" pill>Center</i2c-button>
  <i2c-button size="small" pill>Right</i2c-button>
</i2c-button-group>

<br /><br />

<i2c-button-group>
  <i2c-button size="medium" pill>Left</i2c-button>
  <i2c-button size="medium" pill>Center</i2c-button>
  <i2c-button size="medium" pill>Right</i2c-button>
</i2c-button-group>

<br /><br />

<i2c-button-group>
  <i2c-button size="large" pill>Left</i2c-button>
  <i2c-button size="large" pill>Center</i2c-button>
  <i2c-button size="large" pill>Right</i2c-button>
</i2c-button-group>
```

```jsx react
import { SlButton, SlButtonGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButtonGroup>
      <SlButton size="small" pill>
        Left
      </SlButton>
      <SlButton size="small" pill>
        Center
      </SlButton>
      <SlButton size="small" pill>
        Right
      </SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup>
      <SlButton size="medium" pill>
        Left
      </SlButton>
      <SlButton size="medium" pill>
        Center
      </SlButton>
      <SlButton size="medium" pill>
        Right
      </SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup>
      <SlButton size="large" pill>
        Left
      </SlButton>
      <SlButton size="large" pill>
        Center
      </SlButton>
      <SlButton size="large" pill>
        Right
      </SlButton>
    </SlButtonGroup>
  </>
);
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<i2c-button>` element.

```html preview
<i2c-button-group>
  <i2c-button>Button</i2c-button>
  <i2c-button>Button</i2c-button>
  <i2c-dropdown>
    <i2c-button slot="trigger" caret>Dropdown</i2c-button>
    <i2c-menu>
      <i2c-menu-item>Item 1</i2c-menu-item>
      <i2c-menu-item>Item 2</i2c-menu-item>
      <i2c-menu-item>Item 3</i2c-menu-item>
    </i2c-menu>
  </i2c-dropdown>
</i2c-button-group>
```

```jsx react
import { SlButton, SlButtonGroup, SlDropdown, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlButtonGroup>
    <SlButton>Button</SlButton>
    <SlButton>Button</SlButton>
    <SlDropdown>
      <SlButton slot="trigger" caret>
        Dropdown
      </SlButton>
      <SlMenu>
        <SlMenuItem>Item 1</SlMenuItem>
        <SlMenuItem>Item 2</SlMenuItem>
        <SlMenuItem>Item 3</SlMenuItem>
      </SlMenu>
    </SlDropdown>
  </SlButtonGroup>
);
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html preview
<i2c-button-group>
  <i2c-button variant="primary">Save</i2c-button>
  <i2c-dropdown placement="bottom-end">
    <i2c-button slot="trigger" variant="primary" caret>
      <i2c-visually-hidden>More options</i2c-visually-hidden>
    </i2c-button>
    <i2c-menu>
      <i2c-menu-item>Save</i2c-menu-item>
      <i2c-menu-item>Save as&hellip;</i2c-menu-item>
      <i2c-menu-item>Save all</i2c-menu-item>
    </i2c-menu>
  </i2c-dropdown>
</i2c-button-group>
```

```jsx react
import { SlButton, SlButtonGroup, SlDropdown, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlButtonGroup>
    <SlButton variant="primary">Save</SlButton>
    <SlDropdown placement="bottom-end">
      <SlButton slot="trigger" variant="primary" caret></SlButton>
      <SlMenu>
        <SlMenuItem>Save</SlMenuItem>
        <SlMenuItem>Save as&hellip;</SlMenuItem>
        <SlMenuItem>Save all</SlMenuItem>
      </SlMenu>
    </SlDropdown>
  </SlButtonGroup>
);
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html preview
<i2c-button-group>
  <i2c-tooltip content="I'm on the left">
    <i2c-button>Left</i2c-button>
  </i2c-tooltip>

  <i2c-tooltip content="I'm in the middle">
    <i2c-button>Center</i2c-button>
  </i2c-tooltip>

  <i2c-tooltip content="I'm on the right">
    <i2c-button>Right</i2c-button>
  </i2c-tooltip>
</i2c-button-group>
```

```jsx react
import { SlButton, SlButtonGroup, SlTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButtonGroup>
      <SlTooltip content="I'm on the left">
        <SlButton>Left</SlButton>
      </SlTooltip>

      <SlTooltip content="I'm in the middle">
        <SlButton>Center</SlButton>
      </SlTooltip>

      <SlTooltip content="I'm on the right">
        <SlButton>Right</SlButton>
      </SlTooltip>
    </SlButtonGroup>
  </>
);
```

### Toolbar Example

Create interactive toolbars with button groups.

```html preview
<div class="button-group-toolbar">
  <i2c-button-group label="History">
    <i2c-tooltip content="Undo">
      <i2c-button><i2c-icon name="arrow-counterclockwise" label="Undo"></i2c-icon></i2c-button>
    </i2c-tooltip>
    <i2c-tooltip content="Redo">
      <i2c-button><i2c-icon name="arrow-clockwise" label="Redo"></i2c-icon></i2c-button>
    </i2c-tooltip>
  </i2c-button-group>

  <i2c-button-group label="Formatting">
    <i2c-tooltip content="Bold">
      <i2c-button><i2c-icon name="type-bold" label="Bold"></i2c-icon></i2c-button>
    </i2c-tooltip>
    <i2c-tooltip content="Italic">
      <i2c-button><i2c-icon name="type-italic" label="Italic"></i2c-icon></i2c-button>
    </i2c-tooltip>
    <i2c-tooltip content="Underline">
      <i2c-button><i2c-icon name="type-underline" label="Underline"></i2c-icon></i2c-button>
    </i2c-tooltip>
  </i2c-button-group>

  <i2c-button-group label="Alignment">
    <i2c-tooltip content="Align Left">
      <i2c-button><i2c-icon name="justify-left" label="Align Left"></i2c-icon></i2c-button>
    </i2c-tooltip>
    <i2c-tooltip content="Align Center">
      <i2c-button><i2c-icon name="justify" label="Align Center"></i2c-icon></i2c-button>
    </i2c-tooltip>
    <i2c-tooltip content="Align Right">
      <i2c-button><i2c-icon name="justify-right" label="Align Right"></i2c-icon></i2c-button>
    </i2c-tooltip>
  </i2c-button-group>
</div>

<style>
  .button-group-toolbar i2c-button-group:not(:last-of-type) {
    margin-right: var(--i2c-spacing-x-small);
  }
</style>
```

```jsx react
import { SlButton, SlButtonGroup, SlIcon, SlTooltip } from '@shoelace-style/shoelace/dist/react';

const css = `
  .button-group-toolbar i2c-button-group:not(:last-of-type) {
    margin-right: var(--i2c-spacing-x-small);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <SlButtonGroup label="History">
        <SlTooltip content="Undo">
          <SlButton>
            <SlIcon name="arrow-counterclockwise"></SlIcon>
          </SlButton>
        </SlTooltip>
        <SlTooltip content="Redo">
          <SlButton>
            <SlIcon name="arrow-clockwise"></SlIcon>
          </SlButton>
        </SlTooltip>
      </SlButtonGroup>

      <SlButtonGroup label="Formatting">
        <SlTooltip content="Bold">
          <SlButton>
            <SlIcon name="type-bold"></SlIcon>
          </SlButton>
        </SlTooltip>
        <SlTooltip content="Italic">
          <SlButton>
            <SlIcon name="type-italic"></SlIcon>
          </SlButton>
        </SlTooltip>
        <SlTooltip content="Underline">
          <SlButton>
            <SlIcon name="type-underline"></SlIcon>
          </SlButton>
        </SlTooltip>
      </SlButtonGroup>

      <SlButtonGroup label="Alignment">
        <SlTooltip content="Align Left">
          <SlButton>
            <SlIcon name="justify-left"></SlIcon>
          </SlButton>
        </SlTooltip>
        <SlTooltip content="Align Center">
          <SlButton>
            <SlIcon name="justify"></SlIcon>
          </SlButton>
        </SlTooltip>
        <SlTooltip content="Align Right">
          <SlButton>
            <SlIcon name="justify-right"></SlIcon>
          </SlButton>
        </SlTooltip>
      </SlButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:i2c-button-group]
