# i2c-Library

A forward-thinking library of web components.

- Works with all frameworks 🧩
- Works with CDNs 🚛
- Fully customizable with CSS 🎨
- Includes an official dark theme 🌛
- Built with accessibility in mind ♿️
- Open source 😸

Designed in New Hampshire by i2c digital Design team

---


### What are you using to build i2c-Library?

Components are built with [LitElement](https://lit-element.polymer-project.org/), a custom elements base class that provides an intuitive API and reactive data binding. 

### Forking the Repo

Start With Bitbucket, then clone it locally and install dependencies.

```bash
git clone https://bitbucket.i2cinc.com/scm/grap/i2c-library.git
cd i2c-Library
npm install
```

### Developing

Once you've cloned the repo, run the following command.

```bash
npm start
```

This will spin up the i2c-Library dev server. After the initial build, a browser will open automatically. There is currently no hot module reloading (HMR), as browser's don't provide a way to reregister custom elements, but most changes to the source will reload the browser automatically.

The documentation is powered by Docsify, which uses raw markdown files to generate pages. As such, no static files are built for the docs.

### Building

To generate a production build, run the following command.

```bash
npm run build
```

### Creating New Components

To scaffold a new component, run the following command, replacing `i2c-tag-name` with the desired tag name.

```bash
npm run create i2c-tag-name
```

This will generate a source file, a stylesheet, and a docs page for you. When you start the dev server, you'll find the new component in the "Components" section of the sidebar.