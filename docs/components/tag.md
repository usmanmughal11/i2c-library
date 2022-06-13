# Tag

[component-header:i2c-tag]

Tags are used as labels to organize things or to indicate a selection.

```html preview
<i2c-tag variant="primary">Primary</i2c-tag>
<i2c-tag variant="success">Success</i2c-tag>
<i2c-tag variant="neutral">Neutral</i2c-tag>
<i2c-tag variant="warning">Warning</i2c-tag>
<i2c-tag variant="danger">Danger</i2c-tag>
```

```jsx react
import { SlTag } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlTag variant="primary">Primary</SlTag>
    <SlTag variant="success">Success</SlTag>
    <SlTag variant="neutral">Neutral</SlTag>
    <SlTag variant="warning">Warning</SlTag>
    <SlTag variant="danger">Danger</SlTag>
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html preview
<i2c-tag size="small">Small</i2c-tag>
<i2c-tag size="medium">Medium</i2c-tag>
<i2c-tag size="large">Large</i2c-tag>
```

```jsx react
import { SlTag } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlTag size="small">Small</SlTag>
    <SlTag size="medium">Medium</SlTag>
    <SlTag size="large">Large</SlTag>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html preview
<i2c-tag size="small" pill>Small</i2c-tag>
<i2c-tag size="medium" pill>Medium</i2c-tag>
<i2c-tag size="large" pill>Large</i2c-tag>
```

```jsx react
import { SlTag } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlTag size="small" pill>
      Small
    </SlTag>
    <SlTag size="medium" pill>
      Medium
    </SlTag>
    <SlTag size="large" pill>
      Large
    </SlTag>
  </>
);
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html preview
<div class="tags-removable">
  <i2c-tag size="small" removable>Small</i2c-tag>
  <i2c-tag size="medium" removable>Medium</i2c-tag>
  <i2c-tag size="large" removable>Large</i2c-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('i2c-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable i2c-tag {
    transition: var(--i2c-transition-medium) opacity;
  }
</style>
```

```jsx react
import { SlTag } from '@shoelace-style/shoelace/dist/react';

const css = `
  .tags-removable i2c-tag {
    transition: var(--i2c-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <SlTag size="small" removable onSlRemove={handleRemove}>
          Small
        </SlTag>

        <SlTag size="medium" removable onSlRemove={handleRemove}>
          Medium
        </SlTag>

        <SlTag size="large" removable onSlRemove={handleRemove}>
          Large
        </SlTag>
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:i2c-tag]
