# Installation

You can use i2c-Library via CDN or by installing it locally. You can also [cherry pick](#cherry-picking) individual components for faster load times.

If you're using a framework, make sure to check out the pages for [React](/frameworks/react), [Vue](/frameworks/vue), and [Angular](/frameworks/angular).

## CDN Installation (Easiest)

The easiest way to install i2c-Library is with the CDN. Just add the following tags to your page to get all components and the default light theme.

```html
<!-- https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/dist/themes/light.css -->
<!-- https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/dist/shoelace.js -->
<link rel="stylesheet" href="https://webcomponents-qa.mycardplace.com/dist/themes/light.css" />
<script type="module" src="https://webcomponents-qa.mycardplace.com/dist/i2cLibrary.js"></script>
```

?> If you're only using a handful of components, it will be more efficient to [cherry pick](#cherry-picking) the ones you need.

### Dark Theme

If you prefer to use the [dark theme](/getting-started/themes#dark-theme) instead, use this code and add `<html class="i2c-theme-dark">` to the page.

```html
<link rel="stylesheet" href="https://webcomponents-qa.mycardplace.com/dist/themes/dark.css" />
<script type="module" src="https://webcomponents-qa.mycardplace.com/dist/i2cLibrary.js"></script>
```

### Light & Dark Theme

If you want to load the light or dark theme based on the user's `prefers-color-scheme` setting, use this. The `media` attributes ensure that only the user's preferred theme stylesheet loads and the `onload` attribute sets the appropriate [theme class](/getting-started/themes) on the `<html>` element.

```html
<link
  rel="stylesheet"
  media="(prefers-color-scheme:light)"
  href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/dist/themes/light.css"
/>
<link
  rel="stylesheet"
  media="(prefers-color-scheme:dark)"
  href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/dist/themes/dark.css"
  onload="document.documentElement.classList.add('i2c-theme-dark');"
/>
<script type="module" src="https://webcomponents-qa.mycardplace.com/dist/i2cLibrary.js"></script>
```

Now you can [start using i2c-Library!](/getting-started/usage)

## Cherry Picking

The previous approach is the _easiest_ way to load i2c-Library, but easy isn't always efficient. You'll incur the full size of the library even if you only use a handful of components. This is convenient for prototyping or if you're using most of the components, but it may result in longer load times in production. To improve this, you can cherry pick the components you need.

Cherry picking can be done from your local install or [directly from the CDN](https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/). This will limit the number of files the browser has to download and reduce the amount of bytes being transferred. The disadvantage is that you need to load components manually.

Here's an example that loads only the button component. Again, if you're not using a module resolver, you'll need to adjust the path to point to the folder i2c-Library is in.

```html
<link rel="stylesheet" href="/path/to/shoelace/dist/themes/light.css" />

<script type="module" data-i2clib="/path/to/shoelace/dist">
  import '@shoelace-style/shoelace/dist/components/button/button.js';

  // <i2c-button> is ready to use!
</script>
```

You can copy and paste the code to import a component from the "Importing" section of the component's documentation. Note that some components have dependencies that are automatically imported when you cherry pick. If a component has dependencies, they will be listed in the "Dependencies" section of its docs.

!> Never cherry pick components or utilities from `i2cLibrary.js` as this will cause the browser to load the entire library. Instead, cherry pick from specific modules as shown above.

!> You will see files named `chunk.[hash].js` in the `chunks` directory. Never import these files directly, as they are generated and change from version to version.

## Bundling

i2c-Library is distributed as a collection of standard ES modules that [all modern browsers can understand](https://caniuse.com/es6-module). However, importing a lot of modules can result in a lot of HTTP requests and potentially longer load times. Using a CDN can alleviate this, but some users may wish to further optimize their imports with a bundler.

To use i2c-Library with a bundler, first install i2c-Library along with your bundler of choice.

```bash
npm install @shoelace-style/shoelace
```

Now it's time to configure your bundler. Configurations vary for each tool, but here are some examples to help you get started.

- [Example webpack config](https://github.com/shoelace-style/webpack-example/blob/master/webpack.config.js)
- [Example Rollup config](https://github.com/shoelace-style/rollup-example/blob/master/rollup.config.js)

Once your bundler is configured, you'll be able to import i2c-Library components and utilities.

```js
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

// Set the base path to the folder you copied i2c-Library's assets to
setBasePath('/path/to/shoelace/dist');

// <i2c-button>, <i2c-icon>, <i2c-input>, and <i2c-rating> are ready to use!
```

!> Component modules include side effects for registration purposes. Because of this, importing directly from `@shoelace-style/shoelace` may result in a larger bundle size than necessary. For optimal tree shaking, always cherry pick, i.e. import components and utilities from their respective files, as shown above.
