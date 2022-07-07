# Badge

[component-header:i2c-badge]

Badges are used to draw attention and display statuses or counts.

```html preview
<i2c-badge iconname="circle-fill"> Badge</i2c-badge>
```

```jsx react
import { SlBadge } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlBadge>Badge</SlBadge>;
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html preview
<div>
<i2c-badge variant="primary">Primary</i2c-badge>
<i2c-badge variant="success">Success</i2c-badge>
<i2c-badge variant="neutral">Neutral</i2c-badge>
<i2c-badge variant="warning">Warning</i2c-badge>
<i2c-badge variant="danger">Danger</i2c-badge>
</div>
<br/>
<div>
<i2c-badge variant="light-primary">Primary</i2c-badge>
<i2c-badge variant="light-success">Success</i2c-badge>
<i2c-badge variant="light-neutral">Neutral</i2c-badge>
<i2c-badge variant="light-warning">Warning</i2c-badge>
<i2c-badge variant="light-danger">Danger</i2c-badge>
</div>
```

```jsx react
import { SlBadge } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlBadge variant="primary">Primary</SlBadge>
    <SlBadge variant="success">Success</SlBadge>
    <SlBadge variant="neutral">Neutral</SlBadge>
    <SlBadge variant="warning">Warning</SlBadge>
    <SlBadge variant="danger">Danger</SlBadge>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html preview
<div>
<i2c-badge variant="primary" pill>Primary</i2c-badge>
<i2c-badge variant="success" pill>Success</i2c-badge>
<i2c-badge variant="neutral" pill>Neutral</i2c-badge>
<i2c-badge variant="warning" pill>Warning</i2c-badge>
<i2c-badge variant="danger" pill>Danger</i2c-badge>
</div>
<br/>
<div>
<i2c-badge variant="light-primary" pill>Primary</i2c-badge>
<i2c-badge variant="light-success" pill>Success</i2c-badge>
<i2c-badge variant="light-neutral" pill>Neutral</i2c-badge>
<i2c-badge variant="light-warning" pill>Warning</i2c-badge>
<i2c-badge variant="light-danger" pill>Danger</i2c-badge>
</div>
```

```jsx react
import { SlBadge } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlBadge variant="primary" pill>
      Primary
    </SlBadge>
    <SlBadge variant="success" pill>
      Success
    </SlBadge>
    <SlBadge variant="neutral" pill>
      Neutral
    </SlBadge>
    <SlBadge variant="warning" pill>
      Warning
    </SlBadge>
    <SlBadge variant="danger" pill>
      Danger
    </SlBadge>
  </>
);
```


### Badge Sizes

Use the `size` attribute to Change the badge size.

```html preview
<div>
  <i2c-badge variant="primary" size="small" pill>Primary</i2c-badge>
  <i2c-badge variant="success" size="small" pill>Success</i2c-badge>
  <i2c-badge variant="neutral" size="small" pill>Neutral</i2c-badge>
  <i2c-badge variant="warning" size="small" pill>Warning</i2c-badge>
  <i2c-badge variant="danger" size="small" pill>Danger</i2c-badge>
</div>
<br/>
<div>
  <i2c-badge variant="primary" pill>Primary</i2c-badge>
  <i2c-badge variant="success" pill>Success</i2c-badge>
  <i2c-badge variant="neutral" pill>Neutral</i2c-badge>
  <i2c-badge variant="warning" pill>Warning</i2c-badge>
  <i2c-badge variant="danger" pill>Danger</i2c-badge>
  
</div>
<br/>
<div>
  <i2c-badge variant="primary" size="large" pill>Primary</i2c-badge>
  <i2c-badge variant="success" size="large" pill>Success</i2c-badge>
  <i2c-badge variant="neutral" size="large" pill>Neutral</i2c-badge>
  <i2c-badge variant="warning" size="large" pill>Warning</i2c-badge>
  <i2c-badge variant="danger" size="large" pill>Danger</i2c-badge>
</div>
```


### Pill Badges with Icons

Use the `iconname` attribute to give badges an icon.

```html preview
<i2c-badge variant="primary" pill iconname="circle-fill">Primary</i2c-badge>
<i2c-badge variant="success" pill iconname="circle-fill">Success</i2c-badge>
<i2c-badge variant="neutral" pill iconname="circle-fill">Neutral</i2c-badge>
<i2c-badge variant="warning" pill iconname="circle-fill">Warning</i2c-badge>
<i2c-badge variant="danger" pill iconname="circle-fill">Danger</i2c-badge>

```

### Pill Badges with image

Use the `iconname` attribute to give badges an icon.

```html preview
<i2c-badge variant="primary" pill imgpath="/assets/images/AU.svg">Primary</i2c-badge>
<i2c-badge variant="success" pill imgpath="/assets/images/AU.svg" >Success</i2c-badge>
<i2c-badge variant="neutral" pill imgpath="/assets/images/AU.svg">Neutral</i2c-badge>
<i2c-badge variant="warning" pill imgpath="/assets/images/AU.svg">Warning</i2c-badge>
<i2c-badge variant="danger" pill imgpath="/assets/images/AU.svg">Danger</i2c-badge>


<br/><br/>
<i2c-badge variant="primary" pill imgpath="/assets/images/avatar.svg">Primary</i2c-badge>
<i2c-badge variant="success" pill imgpath="/assets/images/avatar.svg" >Success</i2c-badge>
<i2c-badge variant="neutral" pill imgpath="/assets/images/avatar.svg">Neutral</i2c-badge>
<i2c-badge variant="warning" pill imgpath="/assets/images/avatar.svg">Warning</i2c-badge>



```


Use the `iconname` attribute to give badges an icon.

```html preview

<i2c-badge variant="primary" pill rightIcon="x">Primary</i2c-badge>
<i2c-badge variant="success" pill rightIcon="x" >Success</i2c-badge>
<i2c-badge variant="neutral" pill rightIcon="x">Neutral</i2c-badge>
<i2c-badge variant="warning" pill rightIcon="x">Warning</i2c-badge>
<i2c-badge variant="danger" pill rightIcon="x">Danger</i2c-badge>


<br/><br/>
<i2c-badge variant="primary" pill rightIcon="arrow-right-short">Primary</i2c-badge>
<i2c-badge variant="success" pill rightIcon="arrow-right-short" >Success</i2c-badge>
<i2c-badge variant="neutral" pill rightIcon="arrow-right-short">Neutral</i2c-badge>
<i2c-badge variant="warning" pill rightIcon="arrow-right-short">Warning</i2c-badge>
<i2c-badge variant="danger" pill rightIcon="arrow-right-short">Danger</i2c-badge>

<br/><br/>
<i2c-badge variant="primary" pill rightIcon="arrow-up-short">Primary</i2c-badge>
<i2c-badge variant="success" pill rightIcon="arrow-up-short" >Success</i2c-badge>
<i2c-badge variant="neutral" pill rightIcon="arrow-up-short">Neutral</i2c-badge>
<i2c-badge variant="warning" pill rightIcon="arrow-up-short">Warning</i2c-badge>


<br/><br/>
<i2c-badge variant="primary" style="--i2c-badge-left-icon-size:14px;" pill iconname="arrow-up-short">Primary</i2c-badge>
<i2c-badge variant="success"  style="--i2c-badge-left-icon-size:14px;" pill iconname="arrow-up-short" >Success</i2c-badge>
<i2c-badge variant="neutral"  style="--i2c-badge-left-icon-size:14px;" pill iconname="arrow-up-short">Neutral</i2c-badge>
<i2c-badge variant="warning"  style="--i2c-badge-left-icon-size:14px;" pill iconname="arrow-up-short">Warning</i2c-badge>
<i2c-badge variant="danger"  style="--i2c-badge-left-icon-size:14px;" pill iconname="arrow-up-short">Danger</i2c-badge>

```




### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html preview
<div class="badge-pulse">
  <i2c-badge variant="primary" circle size="small" pulse>+</i2c-badge>
  <i2c-badge variant="success" circle size="small" pulse>+</i2c-badge>
  <i2c-badge variant="neutral" circle size="small" pulse>+</i2c-badge>
  <i2c-badge variant="warning" circle size="small" pulse>+</i2c-badge>
  <i2c-badge variant="danger" circle size="small" pulse>+</i2c-badge>

</div>
<br/>
<div class="badge-pulse">
  <i2c-badge variant="primary" circle pulse>+</i2c-badge>
  <i2c-badge variant="success" circle pulse>+</i2c-badge>
  <i2c-badge variant="neutral" circle pulse>+</i2c-badge>
  <i2c-badge variant="warning" circle pulse>+</i2c-badge>
  <i2c-badge variant="danger" circle pulse>+</i2c-badge>

</div>
<br/>
<div class="badge-pulse">
  <i2c-badge variant="primary" circle size="large" pulse>+</i2c-badge>
  <i2c-badge variant="success" circle size="large" pulse>+</i2c-badge>
  <i2c-badge variant="neutral" circle size="large" pulse>+</i2c-badge>
  <i2c-badge variant="warning" circle size="large" pulse>+</i2c-badge>
  <i2c-badge variant="danger" circle size="large" pulse>+</i2c-badge>

</div>

<style>
  .badge-pulse i2c-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx react
import { SlBadge } from '@shoelace-style/shoelace/dist/react';

const css = `
  .badge-pulse i2c-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <SlBadge variant="primary" pill pulse>
        1
      </SlBadge>
      <SlBadge variant="success" pill pulse>
        1
      </SlBadge>
      <SlBadge variant="neutral" pill pulse>
        1
      </SlBadge>
      <SlBadge variant="warning" pill pulse>
        1
      </SlBadge>
      <SlBadge variant="danger" pill pulse>
        1
      </SlBadge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html preview
<i2c-button>
  Requests
  <i2c-badge pill>30</i2c-badge>
</i2c-button>

<i2c-button style="margin-inline-start: 1rem;">
  Warnings
  <i2c-badge variant="warning" pill>8</i2c-badge>
</i2c-button>

<i2c-button style="margin-inline-start: 1rem;">
  Errors
  <i2c-badge variant="danger" pill>6</i2c-badge>
</i2c-button>
```

```jsx react
import { SlBadge, SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton>
      Requests
      <SlBadge pill>30</SlBadge>
    </SlButton>

    <SlButton style={{ marginInlineStart: '1rem' }}>
      Warnings
      <SlBadge variant="warning" pill>
        8
      </SlBadge>
    </SlButton>

    <SlButton style={{ marginInlineStart: '1rem' }}>
      Errors
      <SlBadge variant="danger" pill>
        6
      </SlBadge>
    </SlButton>
  </>
);
```

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html preview
<i2c-menu style="max-width: 240px;">
  <i2c-menu-label>Messages</i2c-menu-label>
  <i2c-menu-item>Comments <i2c-badge slot="suffix" variant="neutral" pill>4</i2c-badge></i2c-menu-item>
  <i2c-menu-item>Replies <i2c-badge slot="suffix" variant="neutral" pill>12</i2c-badge></i2c-menu-item>
</i2c-menu>
```

```jsx react
import { SlBadge, SlButton, SlMenu, SlMenuItem, SlMenuLabel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--i2c-panel-border-color)',
      borderRadius: 'var(--i2c-border-radius-medium)'
    }}
  >
    <SlMenuLabel>Messages</SlMenuLabel>
    <SlMenuItem>
      Comments
      <SlBadge slot="suffix" variant="neutral" pill>
        4
      </SlBadge>
    </SlMenuItem>
    <SlMenuItem>
      Replies
      <SlBadge slot="suffix" variant="neutral" pill>
        12
      </SlBadge>
    </SlMenuItem>
  </SlMenu>
);
```

[component-metadata:i2c-badge]
