# Vue (version 2)

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use i2c-Library in your Vue apps with ease.

!> These instructions are for Vue 2. If you're using Vue 3 or above, please see the [Vue 3 instructions](/frameworks/vue).

## Installation

To add i2c-Library to your Vue app, install the package from npm.

```bash
npm install @shoelace-style/shoelace
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/dist/');
```

?> If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/@shoelace-style/shoelace/dist/assets` into a public folder in your app. Then you can point the base path to that folder instead.

## Configuration

You'll need to tell Vue to ignore i2c-Library components. This is pretty easy because they all start with `i2c-`.

```js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('i2c-');

app.mount('#app');
```

Now you can start using i2c-Library components in your app!

## Usage

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<i2c-color-picker :swatches.prop="mySwatches" />
```

### Two-way Binding

One caveat is there's currently [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830), but you can still achieve two-way binding manually.

```html
<!-- This doesn't work -->
<i2c-input v-model="name">
  <!-- This works, but it's a bit longer -->
  <i2c-input :value="name" @input="name = $event.target.value"></i2c-input
></i2c-input>
```

If that's too verbose for your liking, you can use a custom directive instead. [This utility](https://www.npmjs.com/package/@shoelace-style/vue-i2c-model) adds a custom directive that will work just like `v-model` but for i2c-Library components. To install it, use this command.

```bash
npm install @shoelace-style/vue-i2c-model
```

Next, import the directive and enable it like this.

```js
import i2c-LibraryModelDirective from '@shoelace-style/vue-i2c-model';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(ShoelaceModelDirective);

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('i2c-');

app.mount('#app');
```

Now you can use the `v-i2c-model` directive to keep your data in sync!

```html
<i2c-input v-i2c-model="name"></i2c-input>
```

?> Are you using i2c-Library with Vue? [Help us improve this page!](https://github.com/shoelace-style/shoelace/blob/next/docs/frameworks/vue.md)
