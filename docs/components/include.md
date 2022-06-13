# Include

[component-header:i2c-include]

Includes give you the power to embed external HTML files into the page.

Included files are asynchronously requested using `window.fetch()`. Requests are cached, so the same file can be included multiple times, but only one request will be made.

The included content will be inserted into the `<i2c-include>` element's default slot so it can be easily accessed and styled through the light DOM.

```html preview
<i2c-include src="https://shoelace.style/assets/examples/include.html"></i2c-include>
```

```jsx react
import { SlInclude } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlInclude src="https://shoelace.style/assets/examples/include.html" />;
```

## Examples

### Listening for Events

When an include file loads successfully, the `i2c-load` event will be emitted. You can listen for this event to add custom loading logic to your includes.

If the request fails, the `i2c-error` event will be emitted. In this case, `event.detail.status` will contain the resulting HTTP status code of the request, e.g. 404 (not found).

```html
<i2c-include src="https://shoelace.style/assets/examples/include.html"></i2c-include>

<script>
  const include = document.querySelector('i2c-include');

  include.addEventListener('i2c-load', () => {
    console.log('Success');
  });

  include.addEventListener('i2c-error', event => {
    console.log('Error', event.detail.status);
  });
</script>
```

[component-metadata:i2c-include]
