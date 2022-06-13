# Usage

i2c-Library components are just regular HTML elements, or [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) to be precise. You can use them like any other element. Each component has detailed documentation that describes its full API, including properties, events, methods, and more.

If you're new to custom elements, often referred to as "web components," this section will familiarize you with how to use them.

## Properties

Many components have properties that can be set using attributes. For example, buttons accept a `size` attribute that maps to the `size` property which dictates the button's size.

```html
<i2c-button size="small">Click me</i2c-button>
```

Some properties are boolean, so they only have true/false values. To activate a boolean property, add the corresponding attribute without a value.

```html
<i2c-button disabled>Click me</i2c-button>
```

In rare cases, a property may require an array, an object, or a function. For example, to customize the color picker's list of preset swatches, you set the `swatches` property to an array of colors. This can be done with JavaScript.

```html
<i2c-color-picker></i2c-color-picker>

<script>
  const colorPicker = document.querySelector('i2c-color-picker');
  colorPicker.swatches = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
</script>
```

Refer to a component's documentation for a complete list of its properties.

## Events

You can listen for standard events such as `click`, `mouseover`, etc. as you normally would. In addition, some components emit custom events. These work the same way as standard events, but are prefixed with `i2c-` to prevent collisions with standard events and other libraries.

```html
<i2c-checkbox>Check me</i2c-checkbox>

<script>
  const checkbox = document.querySelector('i2c-checkbox');
  checkbox.addEventListener('i2c-change', event => {
    console.log(event.target.checked ? 'checked' : 'not checked');
  });
</script>
```

Refer to a component's documentation for a complete list of its custom events.

## Methods

Some components have methods you can call to trigger various behaviors. For example, you can set focus on a i2c-Library input using the `focus()` method.

```html
<i2c-input></i2c-input>

<script>
  const input = document.querySelector('i2c-input');
  input.focus();
</script>
```

Refer to a component's documentation for a complete list of its methods and their arguments.

## Slots

Many components use slots to accept content inside of them. The most common slot is the _default_ slot, which includes any content inside the component that doesn't have a `slot` attribute.

For example, a button's default slot is used to populate its label.

```html
<i2c-button>Click me</i2c-button>
```

Some components also have _named_ slots. A named slot can be populated by adding a child element with the appropriate `slot` attribute. Notice how the icon below has the `slot="prefix"` attribute? This tells the component to place the icon into its `prefix` slot.

```html
<i2c-button>
  <i2c-icon slot="prefix" name="gear"></i2c-icon>
  Settings
</i2c-button>
```

The location of a named slot doesn't matter. You can put it anywhere inside the component and the browser will move it to the right place automatically!

Refer to a component's documentation for a complete list of available slots.

## Don't Use Self-closing Tags

Custom elements cannot have self-closing tags. Similar to `<script>` and `<textarea>`, you must always include the full closing tag.

```html
<!-- Don't do this -->
<i2c-input />

<!-- Always do this -->
<i2c-input></i2c-input>
```

## Differences from Native Elements

You might expect similarly named elements to share the same API as native HTML elements. This is not always the case. i2c-Library components **are not** designed to be one-to-one replacements for their HTML counterparts.

For example, `<button>` and `<i2c-button>` both have a `type` attribute, but it does different things. The former controls whether the button submits a form and the latter controls the button's appearance.

?> **Don't make assumptions about a component's API!** To prevent unexpected behaviors, please take the time to review the documentation and make sure you understand what each attribute, property, method, and event is intended to do.

## Waiting for Components to Load

Web components are registered with JavaScript, so depending on how and when you load i2c-Library, you may notice a [Flash of Undefined Custom Elements (FOUCE)](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/) when the page loads. There are a couple ways to prevent this, both of which are described in the linked article.

One option is to use the [`:defined`](https://developer.mozilla.org/en-US/docs/Web/CSS/:defined) CSS pseudo-class to "hide" custom elements that haven't been registered yet. You can scope it to specific tags or you can hide all undefined custom elements as shown below.

```css
:not(:defined) {
  visibility: hidden;
}
```

As soon as a custom element is registered, it will immediately appear with all of its styles, effectively eliminating FOUCE. Note the use of `visibility: hidden` instead of `display: none` to reduce shifting as elements are registered. The drawback to this approach is that custom elements can potentially appear one by one instead of all at the same time.

Another option is to use [`customElements.whenDefined()`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined), which returns a promise that resolves when the specified element gets registered. You'll probably want to use it with [`Promise.allSettled()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) in case an element fails to load for some reason.

A clever way to use this method is to hide the `<body>` with `opacity: 0` and add a class that fades it in as soon as all your custom elements are defined.

```html
<style>
  body {
    opacity: 0;
  }

  body.ready {
    opacity: 1;
    transition: 0.25s opacity;
  }
</style>

<script type="module">
  await Promise.allSettled([
    customElements.whenDefined('i2c-button'),
    customElements.whenDefined('i2c-card'),
    customElements.whenDefined('i2c-rating')
  ]);

  // Button, card, and rating are registered now! Add
  // the `ready` class so the UI fades in.
  document.body.classList.add('ready');
</script>
```

## Code Completion

### VS Code

i2c-Library ships with a file called `vscode.html-custom-data.json` that can be used to describe its components to Visual Studio Code. This enables code completion for i2c-Library components (also known as "code hinting" or "IntelliSense"). To enable it, you need to tell VS Code where the file is.

1. [Install i2c-Library locally](/getting-started/installation#local-installation)
2. Create a folder called `.vscode` at the root of your project
3. Create a file inside the folder called `settings.json`
4. Add the following to the file

```js
{
  "html.customData": ["./node_modules/@shoelace-style/shoelace/dist/vscode.html-custom-data.json"]
}
```

If `settings.json` already exists, simply add the above line to the root of the object. Note that you may need to restart VS Code for the changes to take affect.

### Other Editors

Most popular editors support custom code completion with a bit of configuration. Please [submit a feature request](https://github.com/shoelace-style/shoelace/issues/new/choose) for your editor of choice. PRs are also welcome!
