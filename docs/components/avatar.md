# Avatar

[component-header:i2c-avatar]

Avatars are used to represent a person or object.

By default, a generic icon will be shown. You can personalize avatars by adding custom icons, initials, and images. You should always provide a `label` for assistive devices.

```html preview
<i2c-avatar label="User avatar"></i2c-avatar>
```

```jsx react
import { SlAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlAvatar label="User avatar" />;
```

## Examples

### Images

To use an image for the avatar, set the `image` and `label` attributes. This will take priority and be shown over initials and icons.

```html preview
<i2c-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a gray tabby kitten looking down"
></i2c-avatar>
```

```jsx react
import { SlAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlAvatar
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a gray tabby kitten looking down"
  />
);
```

### Initials

When you don't have an image to use, you can set the `initials` attribute to show something more personalized than an icon.

```html preview
<i2c-avatar initials="SL" label="Avatar with initials: SL"></i2c-avatar>
```

```jsx react
import { SlAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlAvatar initials="SL" label="Avatar with initials: SL" />;
```

### Custom Icons

When no image or initials are set, an icon will be shown. The default avatar shows a generic "user" icon, but you can customize this with the `icon` slot.

```html preview
<i2c-avatar label="Avatar with an image icon">
  <i2c-icon slot="icon" name="image"></i2c-icon>
</i2c-avatar>

<i2c-avatar label="Avatar with an archive icon">
  <i2c-icon slot="icon" name="archive"></i2c-icon>
</i2c-avatar>

<i2c-avatar label="Avatar with a briefcase icon">
  <i2c-icon slot="icon" name="briefcase"></i2c-icon>
</i2c-avatar>
```

```jsx react
import { SlAvatar, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlAvatar label="Avatar with an image icon">
      <SlIcon slot="icon" name="image" />
    </SlAvatar>

    <SlAvatar label="Avatar with an archive icon">
      <SlIcon slot="icon" name="archive" />
    </SlAvatar>

    <SlAvatar label="Avatar with a briefcase icon">
      <SlIcon slot="icon" name="briefcase" />
    </SlAvatar>
  </>
);
```

### Shapes

Avatars can be shaped using the `shape` attribute.

```html preview
<i2c-avatar shape="square" label="Square avatar"></i2c-avatar>
<i2c-avatar shape="rounded" label="Rounded avatar"></i2c-avatar>
<i2c-avatar shape="circle" label="Circle avatar"></i2c-avatar>
```

```jsx react
import { SlAvatar, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlAvatar shape="square" label="Square avatar" />
    <SlAvatar shape="rounded" label="Rounded avatar" />
    <SlAvatar shape="circle" label="Circle avatar" />
  </>
);
```

### Avatar Groups

You can group avatars with a few lines of CSS.

```html preview
<div class="avatar-group">
  <i2c-avatar
    image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
    label="Avatar 1 of 4"
  ></i2c-avatar>

  <i2c-avatar
    image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 2 of 4"
  ></i2c-avatar>

  <i2c-avatar
    image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 3 of 4"
  ></i2c-avatar>

  <i2c-avatar
    image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
    label="Avatar 4 of 4"
  ></i2c-avatar>
</div>

<style>
  .avatar-group i2c-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group i2c-avatar::part(base) {
    border: solid 2px var(--i2c-color-neutral-0);
  }
</style>
```

```jsx react
import { SlAvatar, SlIcon } from '@shoelace-style/shoelace/dist/react';

const css = `
  .avatar-group i2c-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group i2c-avatar::part(base) {
    border: solid 2px var(--i2c-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="avatar-group">
      <SlAvatar
        image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
        label="Avatar 1 of 4"
      />

      <SlAvatar
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 2 of 4"
      />

      <SlAvatar
        image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 3 of 4"
      />

      <SlAvatar
        image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
        label="Avatar 4 of 4"
      />
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:i2c-avatar]
