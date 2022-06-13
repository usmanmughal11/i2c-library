# Icon

[component-header:i2c-icon]

Icons are symbols that can be used to represent various options within an application.

i2c-Library comes bundled with over 1,500 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These icons are part of the `default` icon library. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

?> Depending on how you're loading i2c-Library, you may need to copy icon assets and/or [set the base path](getting-started/installation#setting-the-base-path) so i2c-Library knows where to load them from. Otherwise, icons may not appear and you'll see 404 Not Found errors in the dev console.

## Default Icons

All available icons in the `default` icon library are shown below. Click or tap on any icon to copy its name, then you can use it in your HTML like this.

```html
<i2c-icon name="icon-name-here"></i2c-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <i2c-input placeholder="Search Icons" clearable>
      <i2c-icon slot="prefix" name="search"></i2c-icon>
    </i2c-input>
    <i2c-select value="outline">
      <i2c-menu-item value="outline">Outlined</i2c-menu-item>
      <i2c-menu-item value="fill">Filled</i2c-menu-item>
      <i2c-menu-item value="all">All icons</i2c-menu-item>
    </i2c-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Examples

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<i2c-icon>` element or an ancestor to change the color.

```html preview
<div style="color: #4a90e2;">
  <i2c-icon name="exclamation-triangle"></i2c-icon>
  <i2c-icon name="archive"></i2c-icon>
  <i2c-icon name="battery-charging"></i2c-icon>
  <i2c-icon name="bell"></i2c-icon>
</div>
<div style="color: #9013fe;">
  <i2c-icon name="clock"></i2c-icon>
  <i2c-icon name="cloud"></i2c-icon>
  <i2c-icon name="download"></i2c-icon>
  <i2c-icon name="file-earmark"></i2c-icon>
</div>
<div style="color: #417505;">
  <i2c-icon name="flag"></i2c-icon>
  <i2c-icon name="heart"></i2c-icon>
  <i2c-icon name="image"></i2c-icon>
  <i2c-icon name="lightning"></i2c-icon>
</div>
<div style="color: #f5a623;">
  <i2c-icon name="mic"></i2c-icon>
  <i2c-icon name="search"></i2c-icon>
  <i2c-icon name="star"></i2c-icon>
  <i2c-icon name="trash"></i2c-icon>
</div>
```

```jsx react
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <SlIcon name="exclamation-triangle"></SlIcon>
      <SlIcon name="archive"></SlIcon>
      <SlIcon name="battery-charging"></SlIcon>
      <SlIcon name="bell"></SlIcon>
    </div>
    <div style={{ color: '#9013fe' }}>
      <SlIcon name="clock"></SlIcon>
      <SlIcon name="cloud"></SlIcon>
      <SlIcon name="download"></SlIcon>
      <SlIcon name="file-earmark"></SlIcon>
    </div>
    <div style={{ color: '#417505' }}>
      <SlIcon name="flag"></SlIcon>
      <SlIcon name="heart"></SlIcon>
      <SlIcon name="image"></SlIcon>
      <SlIcon name="lightning"></SlIcon>
    </div>
    <div style={{ color: '#f5a623' }}>
      <SlIcon name="mic"></SlIcon>
      <SlIcon name="search"></SlIcon>
      <SlIcon name="star"></SlIcon>
      <SlIcon name="trash"></SlIcon>
    </div>
  </>
);
```

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html preview
<div style="font-size: 32px;">
  <i2c-icon name="exclamation-triangle"></i2c-icon>
  <i2c-icon name="archive"></i2c-icon>
  <i2c-icon name="battery-charging"></i2c-icon>
  <i2c-icon name="bell"></i2c-icon>
  <i2c-icon name="clock"></i2c-icon>
  <i2c-icon name="cloud"></i2c-icon>
  <i2c-icon name="download"></i2c-icon>
  <i2c-icon name="file-earmark"></i2c-icon>
  <i2c-icon name="flag"></i2c-icon>
  <i2c-icon name="heart"></i2c-icon>
  <i2c-icon name="image"></i2c-icon>
  <i2c-icon name="lightning"></i2c-icon>
  <i2c-icon name="mic"></i2c-icon>
  <i2c-icon name="search"></i2c-icon>
  <i2c-icon name="star"></i2c-icon>
  <i2c-icon name="trash"></i2c-icon>
</div>
```

```jsx react
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <div style={{ fontSize: '32px' }}>
    <SlIcon name="exclamation-triangle" />
    <SlIcon name="archive" />
    <SlIcon name="battery-charging" />
    <SlIcon name="bell" />
    <SlIcon name="clock" />
    <SlIcon name="cloud" />
    <SlIcon name="download" />
    <SlIcon name="file-earmark" />
    <SlIcon name="flag" />
    <SlIcon name="heart" />
    <SlIcon name="image" />
    <SlIcon name="lightning" />
    <SlIcon name="mic" />
    <SlIcon name="search" />
    <SlIcon name="star" />
    <SlIcon name="trash" />
  </div>
);
```

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html preview
<i2c-icon name="star-fill" label="Add to favorites"></i2c-icon>
```

```jsx react
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlIcon name="star-fill" label="Add to favorites" />;
```

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html preview
<i2c-icon src="https://shoelace.style/assets/images/shoe.svg" style="font-size: 8rem;"></i2c-icon>
```

```jsx react
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlIcon src="https://shoelace.style/assets/images/shoe.svg" style={{ fontSize: '8rem' }}></SlIcon>;
```

## Icon Libraries

You can register additional icons to use with the `<i2c-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

i2c-Library ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by i2c-Library components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

To display an icon, set the `library` and `name` attributes of an `<i2c-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<i2c-icon library="my-icons" name="smile"></i2c-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Boxicons

This will register the [Boxicons](https://boxicons.com/) library using the jsDelivr CDN. This library has three variations: regular (`bx-*`), solid (`bxs-*`), and logos (`bxl-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Creative Commons 4.0 License](https://github.com/atisawd/boxicons#license).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <i2c-icon library="boxicons" name="bx-bot"></i2c-icon>
  <i2c-icon library="boxicons" name="bx-cookie"></i2c-icon>
  <i2c-icon library="boxicons" name="bx-joystick"></i2c-icon>
  <i2c-icon library="boxicons" name="bx-save"></i2c-icon>
  <i2c-icon library="boxicons" name="bx-server"></i2c-icon>
  <i2c-icon library="boxicons" name="bx-wine"></i2c-icon>
  <br />
  <i2c-icon library="boxicons" name="bxs-bot"></i2c-icon>
  <i2c-icon library="boxicons" name="bxs-cookie"></i2c-icon>
  <i2c-icon library="boxicons" name="bxs-joystick"></i2c-icon>
  <i2c-icon library="boxicons" name="bxs-save"></i2c-icon>
  <i2c-icon library="boxicons" name="bxs-server"></i2c-icon>
  <i2c-icon library="boxicons" name="bxs-wine"></i2c-icon>
  <br />
  <i2c-icon library="boxicons" name="bxl-apple"></i2c-icon>
  <i2c-icon library="boxicons" name="bxl-chrome"></i2c-icon>
  <i2c-icon library="boxicons" name="bxl-edge"></i2c-icon>
  <i2c-icon library="boxicons" name="bxl-firefox"></i2c-icon>
  <i2c-icon library="boxicons" name="bxl-opera"></i2c-icon>
  <i2c-icon library="boxicons" name="bxl-microsoft"></i2c-icon>
</div>
```

### Lucide

This will register the [Lucide](https://lucide.dev/) icon library using the jsDelivr CDN. This project is a community-maintained fork of the popular [Feather](https://feathericons.com/) icon library.

Icons in this library are licensed under the [MIT License](https://github.com/lucide-icons/lucide/blob/master/LICENSE).

```html preview
<div style="font-size: 24px;">
  <i2c-icon library="lucide" name="feather"></i2c-icon>
  <i2c-icon library="lucide" name="pie-chart"></i2c-icon>
  <i2c-icon library="lucide" name="settings"></i2c-icon>
  <i2c-icon library="lucide" name="map-pin"></i2c-icon>
  <i2c-icon library="lucide" name="printer"></i2c-icon>
  <i2c-icon library="lucide" name="shopping-cart"></i2c-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('lucide', {
    resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`
  });
</script>
```

### Font Awesome

This will register the [Font Awesome Free](https://fontawesome.com/) library using the jsDelivr CDN. This library has three variations: regular (`far-*`), solid (`fas-*`), and brands (`fab-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt). Some of the icons that appear on the Font Awesome website require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <i2c-icon library="fa" name="far-bell"></i2c-icon>
  <i2c-icon library="fa" name="far-comment"></i2c-icon>
  <i2c-icon library="fa" name="far-hand-point-right"></i2c-icon>
  <i2c-icon library="fa" name="far-hdd"></i2c-icon>
  <i2c-icon library="fa" name="far-heart"></i2c-icon>
  <i2c-icon library="fa" name="far-star"></i2c-icon>
  <br />
  <i2c-icon library="fa" name="fas-archive"></i2c-icon>
  <i2c-icon library="fa" name="fas-book"></i2c-icon>
  <i2c-icon library="fa" name="fas-chess-knight"></i2c-icon>
  <i2c-icon library="fa" name="fas-dice"></i2c-icon>
  <i2c-icon library="fa" name="fas-pizza-slice"></i2c-icon>
  <i2c-icon library="fa" name="fas-scroll"></i2c-icon>
  <br />
  <i2c-icon library="fa" name="fab-apple"></i2c-icon>
  <i2c-icon library="fa" name="fab-chrome"></i2c-icon>
  <i2c-icon library="fa" name="fab-edge"></i2c-icon>
  <i2c-icon library="fa" name="fab-firefox"></i2c-icon>
  <i2c-icon library="fa" name="fab-opera"></i2c-icon>
  <i2c-icon library="fa" name="fab-microsoft"></i2c-icon>
</div>
```

### Heroicons

This will register the [Heroicons](https://heroicons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@0.4.2/outline/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <i2c-icon library="heroicons" name="chat"></i2c-icon>
  <i2c-icon library="heroicons" name="cloud"></i2c-icon>
  <i2c-icon library="heroicons" name="cog"></i2c-icon>
  <i2c-icon library="heroicons" name="document-text"></i2c-icon>
  <i2c-icon library="heroicons" name="gift"></i2c-icon>
  <i2c-icon library="heroicons" name="volume-up"></i2c-icon>
</div>
```

### Iconoir

This will register the [Iconoir](https://iconoir.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/lucaburgio/iconoir/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <i2c-icon library="iconoir" name="check-circled-outline"></i2c-icon>
  <i2c-icon library="iconoir" name="drawer"></i2c-icon>
  <i2c-icon library="iconoir" name="keyframes"></i2c-icon>
  <i2c-icon library="iconoir" name="headset-help"></i2c-icon>
  <i2c-icon library="iconoir" name="color-picker"></i2c-icon>
  <i2c-icon library="iconoir" name="wifi"></i2c-icon>
</div>
```

### Ionicons

This will register the [Ionicons](https://ionicons.com/) library using the jsDelivr CDN. This library has three variations: outline (default), filled (`*-filled`), and sharp (`*-sharp`). A mutator function is required to polyfill a handful of styles we're not including.

Icons in this library are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    }
  });
</script>

<div style="font-size: 24px;">
  <i2c-icon library="ionicons" name="alarm"></i2c-icon>
  <i2c-icon library="ionicons" name="american-football"></i2c-icon>
  <i2c-icon library="ionicons" name="bug"></i2c-icon>
  <i2c-icon library="ionicons" name="chatbubble"></i2c-icon>
  <i2c-icon library="ionicons" name="settings"></i2c-icon>
  <i2c-icon library="ionicons" name="warning"></i2c-icon>
  <br />
  <i2c-icon library="ionicons" name="alarm-outline"></i2c-icon>
  <i2c-icon library="ionicons" name="american-football-outline"></i2c-icon>
  <i2c-icon library="ionicons" name="bug-outline"></i2c-icon>
  <i2c-icon library="ionicons" name="chatbubble-outline"></i2c-icon>
  <i2c-icon library="ionicons" name="settings-outline"></i2c-icon>
  <i2c-icon library="ionicons" name="warning-outline"></i2c-icon>
  <br />
  <i2c-icon library="ionicons" name="alarm-sharp"></i2c-icon>
  <i2c-icon library="ionicons" name="american-football-sharp"></i2c-icon>
  <i2c-icon library="ionicons" name="bug-sharp"></i2c-icon>
  <i2c-icon library="ionicons" name="chatbubble-sharp"></i2c-icon>
  <i2c-icon library="ionicons" name="settings-sharp"></i2c-icon>
  <i2c-icon library="ionicons" name="warning-sharp"></i2c-icon>
</div>
```

### Jam Icons

This will register the [Jam Icons](https://jam-icons.com/) library using the jsDelivr CDN. This library has two variations: regular (default) and filled (`*-f`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [MIT License](https://github.com/michaelampr/jam/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <i2c-icon library="jam" name="calendar"></i2c-icon>
  <i2c-icon library="jam" name="camera"></i2c-icon>
  <i2c-icon library="jam" name="filter"></i2c-icon>
  <i2c-icon library="jam" name="leaf"></i2c-icon>
  <i2c-icon library="jam" name="picture"></i2c-icon>
  <i2c-icon library="jam" name="set-square"></i2c-icon>
  <br />
  <i2c-icon library="jam" name="calendar-f"></i2c-icon>
  <i2c-icon library="jam" name="camera-f"></i2c-icon>
  <i2c-icon library="jam" name="filter-f"></i2c-icon>
  <i2c-icon library="jam" name="leaf-f"></i2c-icon>
  <i2c-icon library="jam" name="picture-f"></i2c-icon>
  <i2c-icon library="jam" name="set-square-f"></i2c-icon>
</div>
```

### Material Icons

This will register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <i2c-icon library="material" name="notifications"></i2c-icon>
  <i2c-icon library="material" name="email"></i2c-icon>
  <i2c-icon library="material" name="delete"></i2c-icon>
  <i2c-icon library="material" name="volume_up"></i2c-icon>
  <i2c-icon library="material" name="settings"></i2c-icon>
  <i2c-icon library="material" name="shopping_basket"></i2c-icon>
  <br />
  <i2c-icon library="material" name="notifications_round"></i2c-icon>
  <i2c-icon library="material" name="email_round"></i2c-icon>
  <i2c-icon library="material" name="delete_round"></i2c-icon>
  <i2c-icon library="material" name="volume_up_round"></i2c-icon>
  <i2c-icon library="material" name="settings_round"></i2c-icon>
  <i2c-icon library="material" name="shopping_basket_round"></i2c-icon>
  <br />
  <i2c-icon library="material" name="notifications_sharp"></i2c-icon>
  <i2c-icon library="material" name="email_sharp"></i2c-icon>
  <i2c-icon library="material" name="delete_sharp"></i2c-icon>
  <i2c-icon library="material" name="volume_up_sharp"></i2c-icon>
  <i2c-icon library="material" name="settings_sharp"></i2c-icon>
  <i2c-icon library="material" name="shopping_basket_sharp"></i2c-icon>
</div>
```

### Remix Icon

This will register the [Remix Icon](https://remixicon.com/) library using the jsDelivr CDN. This library groups icons by categories, so the name must include the category and icon separated by a slash, as well as the `-line` or `-fill` suffix as needed. A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Remix-Design/RemixIcon/blob/master/License).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <i2c-icon library="remixicon" name="business/cloud-line"></i2c-icon>
  <i2c-icon library="remixicon" name="design/brush-line"></i2c-icon>
  <i2c-icon library="remixicon" name="business/pie-chart-line"></i2c-icon>
  <i2c-icon library="remixicon" name="development/bug-line"></i2c-icon>
  <i2c-icon library="remixicon" name="media/image-line"></i2c-icon>
  <i2c-icon library="remixicon" name="system/alert-line"></i2c-icon>
  <br />
  <i2c-icon library="remixicon" name="business/cloud-fill"></i2c-icon>
  <i2c-icon library="remixicon" name="design/brush-fill"></i2c-icon>
  <i2c-icon library="remixicon" name="business/pie-chart-fill"></i2c-icon>
  <i2c-icon library="remixicon" name="development/bug-fill"></i2c-icon>
  <i2c-icon library="remixicon" name="media/image-fill"></i2c-icon>
  <i2c-icon library="remixicon" name="system/alert-fill"></i2c-icon>
</div>
```

## Tabler Icons

This will register the [Tabler Icons](https://tabler-icons.io/) library using the jsDelivr CDN. This library features over 1,950 open source icons.

Icons in this library are licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('tabler', {
    resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@1.68.0/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <i2c-icon library="tabler" name="alert-triangle"></i2c-icon>
  <i2c-icon library="tabler" name="arrow-back"></i2c-icon>
  <i2c-icon library="tabler" name="at"></i2c-icon>
  <i2c-icon library="tabler" name="ball-baseball"></i2c-icon>
  <i2c-icon library="tabler" name="cake"></i2c-icon>
  <i2c-icon library="tabler" name="files"></i2c-icon>
  <br />
  <i2c-icon library="tabler" name="keyboard"></i2c-icon>
  <i2c-icon library="tabler" name="moon"></i2c-icon>
  <i2c-icon library="tabler" name="pig"></i2c-icon>
  <i2c-icon library="tabler" name="printer"></i2c-icon>
  <i2c-icon library="tabler" name="ship"></i2c-icon>
  <i2c-icon library="tabler" name="toilet-paper"></i2c-icon>
</div>
```

### Unicons

This will register the [Unicons](https://iconscout.com/unicons) library using the jsDelivr CDN. This library has two variations: line (default) and solid (`*-s`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Iconscout/unicons/blob/master/LICENSE). Some of the icons that appear on the Unicons website, particularly many of the solid variations, require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${
        match[1]
      }.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <i2c-icon library="unicons" name="clock"></i2c-icon>
  <i2c-icon library="unicons" name="graph-bar"></i2c-icon>
  <i2c-icon library="unicons" name="padlock"></i2c-icon>
  <i2c-icon library="unicons" name="polygon"></i2c-icon>
  <i2c-icon library="unicons" name="rocket"></i2c-icon>
  <i2c-icon library="unicons" name="star"></i2c-icon>
  <br />
  <i2c-icon library="unicons" name="clock-s"></i2c-icon>
  <i2c-icon library="unicons" name="graph-bar-s"></i2c-icon>
  <i2c-icon library="unicons" name="padlock-s"></i2c-icon>
  <i2c-icon library="unicons" name="polygon-s"></i2c-icon>
  <i2c-icon library="unicons" name="rocket-s"></i2c-icon>
  <i2c-icon library="unicons" name="star-s"></i2c-icon>
</div>
```

### Customizing the Default Library

The default icon library contains over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These are the icons that display when you use `<i2c-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

This example will load the same set of icons from the jsDelivr CDN instead of your local assets folder.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`
  });
</script>
```

### Customizing the System Library

The system library contains only the icons used internally by i2c-Library components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons i2c-Library uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by i2c-Library.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  fetch('/dist/assets/icons/icons.json')
    .then(res => res.json())  
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('i2c-input');
      const select = container.querySelector('i2c-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const queue = [];
      let inputTimeout;

      // Generate icons
      icons.map(i => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', i.name);
        item.setAttribute('data-terms', [i.name, i.title, ...(i.tags || []), ...(i.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use xlink:href="/assets/icons/sprite.svg#${i.name}"></use>
          </svg>      
        `;

        const tooltip = document.createElement('i2c-tooltip');
        tooltip.content = i.name;
        
        tooltip.appendChild(item);
        list.appendChild(tooltip);

        item.addEventListener('click', () => {
          copyInput.value = i.name;
          copyInput.select();
          document.execCommand('copy');
          tooltip.content = 'Copied!';
          setTimeout(() => tooltip.content = i.name, 1000);
        });
      });

      // Filter as the user types
      input.addEventListener('i2c-input', () => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          [...list.querySelectorAll('.icon-list-item')].map(item => {
            const filter = input.value.toLowerCase();
            if (filter === '') {
              item.hidden = false;
            } else {
              const terms = item.getAttribute('data-terms').toLowerCase();
              item.hidden = terms.indexOf(filter) < 0;
            }
          });
        }, 250);
      });

      // Sort by type and remember preference
      const iconType = localStorage.getItem('i2c-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('i2c-change', () => {
        list.setAttribute('data-type', select.value);
        localStorage.setItem('i2c-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--i2c-panel-border-color);
    border-radius: var(--i2c-border-radius-medium);
    padding: var(--i2c-spacing-medium);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
  }

  .icon-search-controls i2c-input {
    flex: 1 1 auto;
  }

  .icon-search-controls i2c-select {
    width: 10rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .icon-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    margin-top: 1rem;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--i2c-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--i2c-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: var(--i2c-color-primary-50);
    color: var(--i2c-color-primary-600);
  }

  .icon-list[data-type="outline"] .icon-list-item[data-name$="-fill"] {
    display: none;
  }

  .icon-list[data-type="fill"] .icon-list-item:not([data-name$="-fill"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .icon-list {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls i2c-select {
      width: auto;
      margin: 1rem 0 0 0;
    }
  }

  @media screen and (max-width: 500px) {
    .icon-list {
      grid-template-columns: repeat(4, 1fr);
    }    
  }
</style>

[component-metadata:i2c-icon]
