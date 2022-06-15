# Changelog

i2c-Library follows [Semantic Versioning](https://semver.org/). Breaking changes in components with the <i2c-badge variant="primary" pill>Stable</i2c-badge> badge will not be accepted until the next major version. As such, all contributions must consider the project's roadmap and take this into consideration. Features that are deemed no longer necessary will be deprecated but not removed.

Components with the <i2c-badge variant="warning" pill>Experimental</i2c-badge> badge should not be used in production. They are made available as release candidates for development and testing purposes. As such, changes to experimental components will not be subject to semantic versioning.

_During the beta period, these restrictions may be relaxed in the event of a mission-critical bug._ 🐛

## Next

- Added support for RTL animations in the Animation Registry
- Improved RTL animations for `<i2c-drawer>` [#784](https://github.com/shoelace-style/shoelace/issues/784)
- Improved RTL styles for `<i2c-button-group>` [#783](https://github.com/shoelace-style/shoelace/issues/783)
- Improved RTL styles for the toast stack [#785](https://github.com/shoelace-style/shoelace/issues/785)

## 2.0.0-beta.75

- Added Persian translation [#774](https://github.com/shoelace-style/shoelace/pull/774)
- Added `color-scheme` to light and dark themes to improve rendering of browser-provided UI [#776](https://github.com/shoelace-style/shoelace/issues/776)
- Added `--track-width` custom property to `<i2c-tab-group>`
- Fixed focus rings for `<i2c-input>`, `<i2c-select>`, and `<i2c-textarea>` in Safari since they don't use `:focus-visible` [#767](https://github.com/shoelace-style/shoelace/issues/767)
- Fixed a bug where calling `HTMLFormElement.reportValidity()` would skip i2c-Library form controls [#772](https://github.com/shoelace-style/shoelace/issues/772)
- Fixed a bug that prevented `<i2c-tooltip>` from closing when disabled [#775](https://github.com/shoelace-style/shoelace/issues/775)
- Fixed a bug that allowed `<i2c-icon-button>` to emit a `click` event when disabled [#781](https://github.com/shoelace-style/shoelace/issues/781)
- Improved the default icon for `<i2c-image-comparer>` so it's more intuitive and removed `grip-vertical` from system icon library
- Improved RTL styles for many components [#768](https://github.com/shoelace-style/shoelace/pull/768)
- Improved base path logic to execute only when `getBasePath()` is first called to better support SSR [#778](https://github.com/shoelace-style/shoelace/issues/778)
- Improved `DOMParser` instantiation in `<i2c-icon>` to better support SSR [#778](https://github.com/shoelace-style/shoelace/issues/778)
- Reverted menu item caching due to regression [#766](https://github.com/shoelace-style/shoelace/issues/766)
- Updated Floating UI to 0.5.2

## 2.0.0-beta.74

- 🚨 BREAKING: reworked focus rings to use outlines instead of box shadows
  - Removed the `--i2c-focus-ring-alpha` design token
  - Refactored `--i2c-focus-ring` to be an `outline` property instead of a `box-shadow` property
  - Added `--i2c-focus-ring-color`, `--i2c-focus-ring-style`, and `--i2c-focus-ring-offset`
- 🚨 BREAKING: removed `variant` from `<i2c-radio-button>`
- Added `i2c-label-change` event to `<i2c-menu-item>`
- Added `blur()`, `click()`, and `focus()` methods as well as `i2c-blur` and `i2c-focus` events to `<i2c-icon-button>` [#730](https://github.com/shoelace-style/shoelace/issues/730)
- Added Tabler Icons example to icons page
- Fixed a bug where updating a menu item's label wouldn't update the display label in `<i2c-select>` [#729](https://github.com/shoelace-style/shoelace/issues/729)
- Fixed a bug where the FormData event polyfill was causing issues with older browsers [#747](https://github.com/shoelace-style/shoelace/issues/747)
- Fixed a bug that caused a console error when setting `value` to `null` or `undefined` in `<i2c-input>`, `<i2c-select>`, and `<i2c-textarea>` [#751](https://github.com/shoelace-style/shoelace/pull/751)
- Fixed a bug that caused `<i2c-checkbox>` and `<i2c-radio>` controls without a `value` to submit as `null` instead of `on` like native inputs [#744](https://github.com/shoelace-style/shoelace/issues/744)
- Fixed a bug that caused `<i2c-dropdown>` and dependent components to add unexpected padding around the panel [#743](https://github.com/shoelace-style/shoelace/issues/743)
- Fixed a bug that prevented `valueAsDate` and `valueAsNumber` from updating synchronously [#760](https://github.com/shoelace-style/shoelace/issues/760)
- Fixed a bug that caused `<i2c-menu-item>` to load icons from the default library instead of the system library [#765](https://github.com/shoelace-style/shoelace/issues/765)
- Fixed a bug in `<i2c-input>` that prevented a canceled `keydown` event from submitting the containing form when pressing enter [#764](https://github.com/shoelace-style/shoelace/issues/764)
- Improved behavior of clearable and password toggle buttons in `<i2c-input>` and `<i2c-select>` [#745](https://github.com/shoelace-style/shoelace/issues/745)
- Improved performance of `<i2c-select>` by caching menu items instead of traversing for them each time
- Improved drag utility so initial click/touch events can be accepted [#758](https://github.com/shoelace-style/shoelace/issues/758)
- Improved `<i2c-color-picker>` to use an HSB grid instead of HSL to be more consistent with existing color picker implementations [#762](https://github.com/shoelace-style/shoelace/issues/762)
- Improved `<i2c-color-picker>` so the cursor is hidden and the preview is larger when dragging the grid
- Refactored `<i2c-menu>` to be more performant by caching menu items on slot change
- Reverted form submit logic [#718](https://github.com/shoelace-style/shoelace/issues/718)
- Updated the `disabled` attribute so it reflects in `<i2c-dropdown>` [#741](https://github.com/shoelace-style/shoelace/discussions/741)
- Updated the `name` and `icon` attribute so they reflect in `<i2c-icon>` [#742](https://github.com/shoelace-style/shoelace/pull/742)
- Updated Lit to 2.2.5
- Updated Bootstrap Icons to 1.8.3
- Updated TypeScript to 4.7.2
- Updated esbuild to 0.14.40
- Updated all other dependencies to latest versions

## 2.0.0-beta.73

- Added `button` part to `<i2c-radio-button>`
- Added custom validity examples and tests to `<i2c-checkbox>`, `<i2c-radio>`, and `<i2c-radio-button>`
- Added `enterkeyhint` attribute to `<i2c-input>` and `<i2c-textarea>`
- Fixed a bug that prevented `setCustomValidity()` from working with `<i2c-radio-button>`
- Fixed a bug where the right border of a checked `<i2c-radio-button>` was the wrong color
- Fixed a bug that prevented a number of properties, methods, etc. from being documented in `<i2c-radio>` and `<i2c-radio-button>`
- Fixed a bug in `<i2c-avatar>` that prevented valid images from showing after an invalid or missing image was provided [#717](https://github.com/shoelace-style/shoelace/issues/717)
- Fixed a bug that resulted in a console error being thrown on keydown in `<i2c-dropdown>` [#719](https://github.com/shoelace-style/shoelace/issues/719)
- Fixed a bug that prevented `<i2c-dropdown>` from being closed when opened initially [#720](https://github.com/shoelace-style/shoelace/issues/720)
- Fixed a bug that caused the test runner to fail when using a locale other than en-US [#726](https://github.com/shoelace-style/shoelace/issues/726)
- Improved form submit logic so most user-added event listeners will run after form data is attached and validation occurs [#718](https://github.com/shoelace-style/shoelace/issues/718)
- Improved accessibility of `<i2c-tooltip>` so screen readers announce the content on hover/focus [#219](https://github.com/shoelace-style/shoelace/issues/219)
- Improved accessibility of form controls by exposing clear buttons and password visibility buttons to screen readers while keeping them out of the tab order [#727](https://github.com/shoelace-style/shoelace/issues/727)
- Updated `<i2c-tab-group>` and `<i2c-menu>` to cycle through tabs and menu items instead of stopping at the first/last when using the keyboard
- Removed path aliasing (again) because it doesn't work with Web Test Runner's esbuild plugin

## 2.0.0-beta.72

- 🚨 BREAKING: refactored parts in `<i2c-input>`, `<i2c-range>`, `<i2c-select>`, and `<i2c-textarea>` to allow you to customize the label and help text position
  - Added `form-control-input` part
  - Renamed `label` to `form-control-label`
  - Renamed `help-text` to `form-control-help-text`
- 🚨 BREAKING: removed status from the `i2c-error` event payload in `<i2c-icon>`
- Added the experimental `<i2c-radio-button>` component
- Added `button-group` and `button-group__base` parts to `<i2c-radio-group>`
- Added the `label` attribute and slot to `<i2c-color-picker>` to improve accessibility with screen readers
- Fixed a bug that prevented form submission from working as expected in some cases
- Fixed a bug that prevented `<i2c-split-panel>` from toggling `vertical` properly [#703](https://github.com/shoelace-style/shoelace/issues/703)
- Fixed a bug that prevented `<i2c-color-picker>` from rendering a color initially [#704](https://github.com/shoelace-style/shoelace/issues/704)
- Fixed a bug that caused focus trapping to fail when used inside a shadow root [#709](https://github.com/shoelace-style/shoelace/issues/709)
- Improved accessibility throughout the docs
- Improved accessibility of `<i2c-dropdown>` so the trigger's expanded state is announced correctly
- Improved accessibility of `<i2c-format-date>` but rendering a `<time>` element instead of plain text
- Improved accessibility of `<i2c-select>` so disabled controls announce correct
- Improved accessibility in `<i2c-tag>` so remove buttons have labels
- Refactored `<i2c-radio>` to move selection logic into `<i2c-radio-group>`
- Updated slot detection logic so it ignores visually hidden elements
- Upgraded the status of `<i2c-visually-hidden>` from experimental to stable

## 2.0.0-beta.71

- 🚨 BREAKING: refactored exported parts to ensure composed components and their parts can be targeted via CSS
  - Refactored the `eye-dropper-button` part and added `eye-dropper-button__base`, `eye-dropper-button__prefix`, `eye-dropper-button__label`, `eye-dropper-button__suffix`, and `eye-dropper-button__caret` parts to `<i2c-color-picker>`
  - Refactored the `format-button` part and added `format-button__base`, `format-button__prefix`, `format-button__label`, `format-button__suffix`, and `format-button__caret` parts to `<i2c-color-picker>`
  - Moved the `close-button` part in `<i2c-alert>` to the internal `<i2c-icon-button>` and removed the `<span>` that wrapped it
  - Moved the `close-button` part in `<i2c-dialog>` and `<i2c-drawer>` to point to the host element and added the `close-button__base` part
  - Renamed parts in `<i2c-select>` from `tag-base` to `tag__base`, `tag-content` to `tag__content`, and `tag-remove-button` to `tag__remove-button`
  - Moved the `close-button` part in `<i2c-tab>` to the internal `<i2c-icon-button>` and added the `close-button__base` part
  - Moved the `scroll-button` part in `<i2c-tab-group>` to the internal `<i2c-icon-button>` and added the `scroll-button__base`, `scroll-button--start`, and `scroll-button--end` parts
  - Moved the `remove-button` part in `<i2c-tag>` to the internal `<i2c-icon-button>` and added the `remove-button__base` part
- 🚨 BREAKING: removed `checked-icon` part from `<i2c-menu-item>` in preparation for parts refactor
- 🚨 BREAKING: changed the `typeToSelect()` method's argument from `String` to `KeyboardEvent` in `<i2c-menu>` to support more advanced key combinations
- Added `form`, `formaction`, `formmethod`, `formnovalidate`, and `formtarget` attributes to `<i2c-button>` [#699](https://github.com/shoelace-style/shoelace/issues/699)
- Added Prettier and ESLint to markdown files
- Added background color and border to `<i2c-menu>`
- Added more tests for `<i2c-input>`, `<i2c-select>`, and `<i2c-textarea>`
- Fixed a bug that prevented forms from submitting when pressing <kbd>Enter</kbd> inside of an `<i2c-input>` [#700](https://github.com/shoelace-style/shoelace/issues/700)
- Fixed a bug in `<i2c-input>` that prevented the `valueAsDate` and `valueAsNumber` properties from working when set before the component was initialized
- Fixed a bug in `<i2c-dropdown>` where pressing <kbd>Home</kbd> or <kbd>End</kbd> wouldn't select the first or last menu items, respectively
- Improved `autofocus` behavior in Safari for `<i2c-dialog>` and `<i2c-drawer>` [#693](https://github.com/shoelace-style/shoelace/issues/693)
- Improved type to select logic in `<i2c-menu>` so it supports <kbd>Backspace</kbd> and gives users more time before resetting
- Improved checkmark size and positioning in `<i2c-menu-item>`
- Improved accessibility in form controls that have help text so they're announced correctly in various screen readers
- Removed feature detection for `focus({ preventScroll })` since it no longer works in Safari
- Removed the `--i2c-tooltip-arrow-start-end-offset` design token
- Removed the `pattern` attribute from `<i2c-textarea>` as it was documented incorrectly and never supported
- Replaced Popper positioning dependency with Floating UI in `<i2c-dropdown>` and `<i2c-tooltip>`

## 2.0.0-beta.70

- Added `tag-base`, `tag-content`, and `tag-remove-button` parts to `<i2c-select>` [#682](https://github.com/shoelace-style/shoelace/discussions/682)
- Added support for focusing elements with `autofocus` when `<i2c-dialog>` and `<i2c-drawer>` open [#688](https://github.com/shoelace-style/shoelace/issues/688)
- Added the `placement` attribute to `<i2c-select>` [#687](https://github.com/shoelace-style/shoelace/pull/687)
- Added Danish translation [#690](https://github.com/shoelace-style/shoelace/pull/690)
- Fixed a bug that allowed `<i2c-dropdown>` to go into an incorrect state when activating the trigger while disabled [#684](https://github.com/shoelace-style/shoelace/pull/684)
- Fixed a bug where Safari would sometimes not focus after preventing `i2c-initial-focus` [#688](https://github.com/shoelace-style/shoelace/issues/688)
- Fixed a bug where the active tab indicator in `<i2c-tab-group>` would be misaligned when using disabled tabs [#695](https://github.com/shoelace-style/shoelace/pull/695)
- Improved the size of the remove button in `<i2c-tag>`
- Removed Google Analytics from the docs

## 2.0.0-beta.69

- Added `web-types.json` to improve the dev experience for WebStorm/PHPStorm users [#328](https://github.com/shoelace-style/shoelace/issues/328)
- Fixed a bug that caused an error when pressing up/down in `<i2c-select>`
- Fixed a bug that caused `<i2c-details>` to not show when double clicking the summary while open [#662](https://github.com/shoelace-style/shoelace/issues/662)
- Fixed a bug that prevented the first/last menu item from receiving focus when pressing up/down in `<i2c-dropdown>`
- Fixed a bug that caused the active tab indicator in `<i2c-tab-group>` to render incorrectly when used inside an element that animates [#671](https://github.com/shoelace-style/shoelace/pull/671)
- Fixed a bug that allowed values in `<i2c-range>` to be invalid according to its `min|max|step` [#674](https://github.com/shoelace-style/shoelace/issues/674)
- Updated Lit to 2.1.4
- Updated all other dependencies to latest versions

## 2.0.0-beta.68

- Fixed path aliases in generated files so they're relative again [#669](https://github.com/shoelace-style/shoelace/pull/669)

## 2.0.0-beta.67

- Fixed a TypeScript config regression introduced in [#647](https://github.com/shoelace-style/shoelace/pull/647) that removed the `rootDir`, breaking the expected build output

## 2.0.0-beta.66

- Attempted to fix a bug that prevented types from being generated in the build

## 2.0.0-beta.65

- 🚨 BREAKING: the `unit` property of `<i2c-format-bytes>` has changed to `byte | bit` instead of `bytes | bits`
- Added `display-label` part to `<i2c-select>` [#650](https://github.com/shoelace-style/shoelace/issues/650)
- Added `--spacing` CSS custom property to `<i2c-divider>` [#664](https://github.com/shoelace-style/shoelace/pull/664)
- Added `event.detail.source` to the `i2c-request-close` event in `<i2c-dialog>` and `<i2c-drawer>`
- Fixed a bug that caused `<i2c-progress-ring>` to render the wrong size when `--track-width` was increased [#656](https://github.com/shoelace-style/shoelace/issues/656)
- Fixed a bug that allowed `<i2c-details>` to open and close when disabled using a screen reader [#658](https://github.com/shoelace-style/shoelace/issues/658)
- Fixed a bug in the FormData event polyfill that threw an error in some environments [#666](https://github.com/shoelace-style/shoelace/issues/666)
- Implemented stricter linting to improve consistency and reduce errors, which resulted in many small refactors throughout the codebase [#647](https://github.com/shoelace-style/shoelace/pull/647)
- Improved accessibility of `<i2c-dialog>` and `<i2c-drawer>` by making the title an `<h2>` and adding a label to the close button
- Improved search results in the documentation
- Refactored `<i2c-format-byte>` to use `Intl.NumberFormat` so it supports localization
- Refactored themes so utility styles are no longer injected as `<style>` elements to support stricter CSP rules [#571](https://github.com/shoelace-style/shoelace/issues/571)
- Restored the nicer animation on `<i2c-spinner>` and verified it works in Safari
- Updated Feather icon example to use Lucide [#657](https://github.com/shoelace-style/shoelace/issues/657)
- Updated minimum Node version to 14.17
- Updated Lit to 2.1.2
- Updated to Bootstrap Icons to 1.8.1
- Updated all other dependencies to latest versions

## 2.0.0-beta.64

- 🚨 BREAKING: removed `<i2c-form>` because all form components submit with `<form>` now ([learn more](/getting-started/form-controls))
- 🚨 BREAKING: changed `submit` attribute to `type="submit"` on `<i2c-button>`
- 🚨 BREAKING: changed the `alt` attribute to `label` in `<i2c-avatar>` for consistency with other components
- Added `role="status"` to `<i2c-spinner>`
- Added `valueAsDate` and `valueAsNumber` properties to `<i2c-input>` [#570](https://github.com/shoelace-style/shoelace/issues/570)
- Added `start`, `end`, and `panel` parts to `<i2c-split-panel>` [#639](https://github.com/shoelace-style/shoelace/issues/639)
- Fixed broken spinner animation in Safari [#633](https://github.com/shoelace-style/shoelace/issues/633)
- Fixed an a11y bug in `<i2c-tooltip>` where `aria-describedby` referenced an id in the shadow root
- Fixed a bug in `<i2c-radio>` where tabbing didn't work properly in Firefox [#596](https://github.com/shoelace-style/shoelace/issues/596)
- Fixed a bug in `<i2c-input>` where clicking the left/right edge of the control wouldn't focus it
- Fixed a bug in `<i2c-input>` where autofill had strange styles [#644](https://github.com/shoelace-style/shoelace/pull/644)
- Improved `<i2c-spinner>` track color when used on various backgrounds
- Improved a11y in `<i2c-radio>` so VoiceOver announces radios properly in a radio group
- Improved the API for the experimental `<i2c-split-panel>` component by making `position` accept a percentage and adding the `position-in-pixels` attribute
- Refactored `<i2c-breadcrumb-item>`, `<i2c-button>`, `<i2c-card>`, `<i2c-dialog>`, `<i2c-drawer>`, `<i2c-input>`, `<i2c-range>`, `<i2c-select>`, and `<i2c-textarea>` to use a Reactive Controller for slot detection
- Refactored internal id usage in `<i2c-details>`, `<i2c-dialog>`, `<i2c-drawer>`, and `<i2c-dropdown>`
- Removed `position: relative` from the common component stylesheet
- Updated Lit to 2.1.0
- Updated all other dependencies to latest versions

## 2.0.0-beta.63

- 🚨 BREAKING: changed the `type` attribute to `variant` in `<i2c-alert>`, `<i2c-badge>`, `<i2c-button>`, and `<i2c-tag>` since it's more appropriate and to disambiguate from other `type` attributes
- 🚨 BREAKING: removed `base` part from `<i2c-divider>` to simplify the styling API
- Added the experimental `<i2c-split-panel>` component
- Added `focus()` and `blur()` methods to `<i2c-select>` [#625](https://github.com/shoelace-style/shoelace/pull/625)
- Fixed a bug where setting `tooltipFormatter` on `<i2c-range>` in JSX causes React@experimental to error out
- Fixed a bug where clicking on a slotted icon in `<i2c-button>` wouldn't submit forms [#626](https://github.com/shoelace-style/shoelace/issues/626)
- Added the `i2c-` prefix to generated ids for `<i2c-tab>` and `<i2c-tab-panel>`
- Refactored `<i2c-button>` to use Lit's static expressions to reduce code
- Simplified `<i2c-spinner>` animation

## 2.0.0-beta.62

- 🚨 BREAKING: changed the `locale` attribute to `lang` in `<i2c-format-bytes>`, `<i2c-format-date>`, `<i2c-format-number>`, and `<i2c-relative-time>` to be consistent with how localization is handled
- Added localization support including translations for English, German, German (Switzerland), Spanish, French, Hebrew, Japanese, Dutch, Polish, Portuguese, and Russian translations [#419](https://github.com/shoelace-style/shoelace/issues/419)
- CodePen examples will now open in light or dark depending on your current preference
- Fixed a bug where tag names weren't being generated in `vscode.html-custom-data.json` [#593](https://github.com/shoelace-style/shoelace/pull/593)
- Fixed a bug in `<i2c-tooltip>` where the tooltip wouldn't reposition when content changed
- Fixed a bug in `<i2c-select>` where focusing on a filled control showed the wrong focus ring
- Fixed a bug where setting `value` initially on `<i2c-color-picker>` didn't work in React [#602](https://github.com/shoelace-style/shoelace/issues/602)
- Updated filled inputs to have the same appearance when focused
- Updated `color` dependency from 3.1.3 to 4.0.2
- Updated `<i2c-format-bytes>`, `<i2c-format-date>`, `<i2c-format-number>`, and `<i2c-relative-time>` to work like other localized components
- Upgraded the status of `<i2c-qr-code>` from experimental to stable
- Updated to Bootstrap Icons to 1.7.2
- Upgraded color to 4.1.0

## 2.0.0-beta.61

This release improves the dark theme by shifting luminance in both directions, slightly condensing the spectrum. This results in richer colors in dark mode. It also reduces theme stylesheet sizes by eliminating superfluous gray palette variations.

In [beta.48](#_200-beta48), I introduced a change to color tokens that allowed you to access alpha values at the expense of a verbose, non-standard syntax. After considering feedback from the community, I've decided to revert this change so the `rgb()` function is no longer required. Many users reported never using it for alpha, and even more reported having trouble remembering to use `rgb()` and that it was causing more harm than good.

Furthermore, both Safari and Firefox have implemented [`color-mix()`](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix()>) behind a flag, so access to alpha channels and other capabilities are coming to the browser soon.

If you're using color tokens in your own stylesheet, simply remove the `rgb()` to update to this version.

```css
.your-styles {
  /* change this */
  color: rgb(var(--i2c-color-primary-500));

  /* to this */
  color: var(--i2c-color-primary-500);
}
```

Thank you for your help and patience with testing i2c-Library. I promise, we're not far from a stable release!

- 🚨 BREAKING: removed blue gray, cool gray, true gray, and warm gray color palettes
- 🚨 BREAKING: removed `--i2c-focus-ring-color`, and `--i2c-focus-ring-alpha` (use `--i2c-focus-ring` instead)
- 🚨 BREAKING: removed `--i2c-surface-base` and `--i2c-surface-base-alt` tokens (use the neutral palette instead)
- Added experimental `<i2c-visually-hidden>` component
- Added `clear-icon` slot to `<i2c-select>` [#591](https://github.com/shoelace-style/shoelace/issues/591)
- Fixed a bug in `<i2c-progress-bar>` where the label would show in the default slot
- Improved the dark theme palette so colors are bolder and don't appear washed out
- Improved a11y of `<i2c-avatar>` by representing it as an image with an `alt` [#579](https://github.com/shoelace-style/shoelace/issues/579)
- Improved a11y of the scroll buttons in `<i2c-tab-group>`
- Improved a11y of the close button in `<i2c-tab>`
- Improved a11y of `<i2c-tab-panel>` by removing an invalid `aria-selected` attribute [#579](https://github.com/shoelace-style/shoelace/issues/579)
- Improved a11y of `<i2c-icon>` by not using a variation of the `name` attribute for labels (use the `label` prop instead)
- Moved `role` from the shadow root to the host element in `<i2c-menu>`
- Removed redundant `role="menu"` in `<i2c-dropdown>`
- Slightly faster animations for showing and hiding `<i2c-dropdown>`
- Updated to Bootstrap Icons to 1.7.1
- Upgraded the status of `<i2c-mutation-observer>` from experimental to stable

## 2.0.0-beta.60

- Added React examples and CodePen links to all components
- Changed the `attr` in experimental `<i2c-mutation-observer>` to require `"*"` instead of `""` to target all attributes
- Fixed a bug in `<i2c-progress-bar>` where the `label` attribute didn't set the label
- Fixed a bug in `<i2c-rating>` that caused disabled and readonly controls to transition on hover
- The `panel` property of `<i2c-tab>` is now reflected
- The `name` property of `<i2c-tab-panel>` is now reflected

## 2.0.0-beta.59

- Added React wrappers as first-class citizens
- Added eye dropper to `<i2c-color-picker>` when the browser supports the [EyeDropper API](https://wicg.github.io/eyedropper-api/)
- Fixed a bug in `<i2c-button-group>` where buttons groups with only one button would have an incorrect border radius
- Improved the `<i2c-color-picker>` trigger's border in dark mode
- Switched clearable icon from `x-circle` to `x-circle-fill` to make it easier to recognize
- Updated to Bootstrap Icons to 1.7.0
- Updated to Lit 2.0.2

## 2.0.0-beta.58

This version once again restores the bundled distribution because the unbundled + CDN approach is currently confusing and [not working properly](https://github.com/shoelace-style/shoelace/issues/559#issuecomment-949662331). Unbundling the few dependencies i2c-Library has is still a goal of the project, but [this jsDelivr bug](https://github.com/jsdelivr/jsdelivr/issues/18337) needs to be resolved before we can achieve it.

I sincerely apologize for the instability of the last few beta releases as a result of this effort.

- Added experimental `<i2c-animated-image>` component
- Added `label` attribute to `<i2c-progress-bar>` and `<i2c-progress-ring>` to improve a11y
- Fixed a bug where the tooltip would show briefly when clicking a disabled `<i2c-range>`
- Fixed a bug that caused a console error when `<i2c-range>` was used
- Fixed a bug where the `nav` part in `<i2c-tab-group>` was on the incorrect element [#563](https://github.com/shoelace-style/shoelace/pull/563)
- Fixed a bug where non-integer aspect ratios were calculated incorrectly in `<i2c-responsive-media>`
- Fixed a bug in `<i2c-range>` where setting `value` wouldn't update the active and inactive portion of the track [#572](https://github.com/shoelace-style/shoelace/pull/572)
- Reverted to publishing the bundled dist and removed `/+esm` links from the docs
- Updated to Bootstrap Icons to 1.6.1

## 2.0.0-beta.57

- Fix CodePen links and CDN links

## 2.0.0-beta.56

This release is the second attempt at unbundling dependencies. This will be a breaking change only if your configuration _does not_ support bare module specifiers. CDN users and bundler users will be unaffected, but note the URLs for modules on the CDN must have the `/+esm` now.

- Added the `hoist` attribute to `<i2c-tooltip>` [#564](https://github.com/shoelace-style/shoelace/issues/564)
- Unbundled dependencies and configured external imports to be packaged with bare module specifiers

## 2.0.0-beta.55

- Revert unbundling due to issues with the CDN not handling bare module specifiers as expected

## 2.0.0-beta.54

i2c-Library doesn't have a lot of dependencies, but this release unbundles most of them so you can potentially save some extra kilobytes. This will be a breaking change only if your configuration _does not_ support bare module specifiers. CDN users and bundler users will be unaffected.

- 🚨 BREAKING: renamed the `i2c-clear` event to `i2c-remove`, the `clear-button` part to `remove-button`, and the `clearable` property to `removable` in `<i2c-tag>`
- Added the `disabled` prop to `<i2c-resize-observer>`
- Fixed a bug in `<i2c-mutation-observer>` where setting `disabled` initially didn't work
- Unbundled dependencies and configured external imports to be packaged with bare module specifiers

## 2.0.0-beta.53

- 🚨 BREAKING: removed `<i2c-menu-divider>` (use `<i2c-divider>` instead)
- 🚨 BREAKING: removed `percentage` attribute from `<i2c-progress-bar>` and `<i2c-progress-ring>` (use `value` instead)
- 🚨 BREAKING: switched the default `type` of `<i2c-tag>` from `primary` to `neutral`
- Added the experimental `<i2c-mutation-observer>` component
- Added the `<i2c-divider>` component
- Added `--i2c-color-neutral-0` and `--i2c-color-neutral-50` as early surface tokens to improve the appearance of alert, card, and panels in dark mode
- Added the `--i2c-panel-border-width` design token
- Added missing background color to `<i2c-details>`
- Added the `--padding` custom property to `<i2c-tab-panel>`
- Added the `outline` variation to `<i2c-button>` [#522](https://github.com/shoelace-style/shoelace/issues/522)
- Added the `filled` variation to `<i2c-input>`, `<i2c-textarea>`, and `<i2c-select>` and supporting design tokens
- Added the `control` part to `<i2c-select>` so you can target the main control with CSS [#538](https://github.com/shoelace-style/shoelace/issues/538)
- Added a border to `<i2c-badge>` to improve contrast when drawn on various background colors
- Added `--track-color-active` and `--track-color-inactive` custom properties to `<i2c-range>` [#550](https://github.com/shoelace-style/shoelace/issues/550)
- Added the undocumented custom properties `--thumb-size`, `--tooltip-offset`, `--track-height` on `<i2c-range>`
- Changed the default `distance` in `<i2c-dropdown>` from `2` to `0` [#538](https://github.com/shoelace-style/shoelace/issues/538)
- Fixed a bug where `<i2c-select>` would be larger than the viewport when it had lots of options [#544](https://github.com/shoelace-style/shoelace/issues/544)
- Fixed a bug where `<i2c-progress-ring>` wouldn't animate in Safari
- Updated the default height of `<i2c-progress-bar>` from `16px` to `1rem` and added a subtle shadow to indicate depth
- Removed the `lit-html` dependency and moved corresponding imports to `lit` [#546](https://github.com/shoelace-style/shoelace/issues/546)

## 2.0.0-beta.52

- 🚨 BREAKING: changed the `--stroke-width` custom property of `<i2c-spinner>` to `--track-width` for consistency
- 🚨 BREAKING: removed the `size` and `stroke-width` attributes from `<i2c-progress-ring>` so it's fully customizable with CSS (use the `--size` and `--track-width` custom properties instead)
- Added the `--speed` custom property to `<i2c-spinner>`
- Added the `--size` and `--track-width` custom properties to `<i2c-progress-ring>`
- Added tests for `<i2c-badge>` [#530](https://github.com/shoelace-style/shoelace/pull/530)
- Fixed a bug where `<i2c-tab>` wasn't using a border radius token [#523](https://github.com/shoelace-style/shoelace/issues/523)
- Fixed a bug in the Remix Icons example where some icons would 404 [#528](https://github.com/shoelace-style/shoelace/issues/528)
- Updated `<i2c-progress-ring>` to use only CSS for styling
- Updated `<i2c-spinner>` to use an SVG and improved the indicator animation
- Updated to Lit 2.0 and lit-html 2.0 🔥

## 2.0.0-beta.51

A number of users had trouble counting characters that repeat, so this release improves design token patterns so that "t-shirt sizes" are more accessible. For example, `--i2c-font-size-xxx-large` has become `--i2c-font-size-3x-large`. This change applies to all design tokens that use this scale.

- 🚨 BREAKING: all t-shirt size design tokens now use `2x`, `3x`, `4x` instead of `xx`, `xxx`, `xxxx`
- Added missing `--i2c-focus-ring-*` tokens to dark theme
- Added an "Importing" section to all components with copy/paste code to make cherry picking easier
- Improved the documentation search with a custom plugin powered by [Lunr](https://lunrjs.com/)
- Improved the `--i2c-shadow-x-small` elevation
- Improved visibility of elevations and overlays in dark theme
- Reduced the size of `<i2c-color-picker>` slightly to better accommodate mobile devices
- Removed `<i2c-icon>` dependency from `<i2c-color-picker>` and improved the copy animation

## 2.0.0-beta.50

- Added `<i2c-breadcrumb>` and `<i2c-breadcrumb-item>` components
- Added `--i2c-letter-spacing-denser`, `--i2c-letter-spacing-looser`, `--i2c-line-height-denser`, and `--i2c-line-height-looser` design tokens
- Fixed a bug where form controls would error out when the value was set to `undefined` [#513](https://github.com/shoelace-style/shoelace/pull/513)

## 2.0.0-beta.49

This release changes the way focus states are applied to elements. In browsers that support [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible), it will be used. In unsupportive browsers ([currently only Safari](https://caniuse.com/mdn-css_selectors_focus-visible)), `:focus` will be used instead. This means the browser will determine whether a focus ring should be shown based on how the user interacts with the page.

This release also fixes a critical bug in the color scale where `--i2c-color-neutral-0` and `--i2c-color-neutral-1000` were reversed.

- 🚨 BREAKING: fixed a bug where `--i2c-color-neutral-0` and `--i2c-color-neutral-1000` were inverted (swap them to update)
- 🚨 BREAKING: removed the `no-fieldset` property from `<i2c-radio-group>` (fieldsets are now hidden by default; use `fieldset` to show them)
- 🚨 BREAKING: removed `--focus-ring` custom property from `<i2c-input>`, `<i2c-select>`, `<i2c-tab>` for consistency with other form controls
- Added `--swatch-size` custom property to `<i2c-color-picker>`
- Added `date` to `<i2c-input>` as a supported `type`
- Added the `--i2c-focus-ring` design token for a more convenient way to apply focus ring styles
- Adjusted elevation tokens to use neutral in light mode and black in dark mode
- Adjusted `--i2c-overlay-background-color` in dark theme to be black instead of gray
- Fixed a bug in `<i2c-color-picker>` where the opacity slider wasn't showing the current color
- Fixed a bug where Edge in Windows would show the native password toggle next to the custom password toggle [#508](https://github.com/shoelace-style/shoelace/issues/508)
- Fixed a bug where pressing up/down in `<i2c-tab-group>` didn't select the next/previous tab in vertical placements
- Improved size of `<i2c-color-picker>`
- Improved icon contrast in `<i2c-input>`
- Improved contrast of `<i2c-switch>`
- Improved `:focus-visible` behavior in many components
- Removed elevation from `<i2c-color-picker>` when rendered inline
- Removed custom `:focus-visible` logic in favor of a directive that outputs `:focus-visible` or `:focus` depending on browser support
- Updated to Lit 2.0.0-rc.3
- Updated to lit-html 2.0.0-rc.4

## 2.0.0-beta.48

This release improves theming by offering both light and dark themes that can be used autonomously. It also improves contrast in most components, adds a variety of new color primitives, and changes the way color tokens are consumed.

Previously, color tokens were in hexadecimal format. Now, i2c-Library now uses an `R G B` format that requires you to use the `rgb()` function in your CSS.

```css
.example {
  /* rgb() is required now */
  color: var(--i2c-color-neutral-500);
}
```

This is more verbose than previous versions, but it has the advantage of letting you set the alpha channel of any color token.

```css
.example-with-alpha {
  /* easily adjust opacity for any color token */
  color: rgb(var(--i2c-color-neutral-500) / 50%);
}
```

This change applies to all design tokens that implement a color. Refer to the [color tokens](/tokens/color) page for more details.

- 🚨 BREAKING: all design tokens that implement colors have been converted to `R G B` and must be used with the `rgb()` function
- 🚨 BREAKING: removed `--i2c-color-black|white` color tokens (use `--i2c-color-neutral-0|1000` instead)
- 🚨 BREAKING: removed `--i2c-color-primary|success|warning|info|danger-text` design tokens (use theme or primitive colors instead)
- 🚨 BREAKING: removed `info` variant from `<i2c-alert>`, `<i2c-badge>`, `<i2c-button>`, and `<i2c-tag>` (use `neutral` instead)
- 🚨 BREAKING: removed `--i2c-color-info-*` design token (use `--i2c-color-neutral-*` instead)
- 🚨 BREAKING: renamed `dist/themes/base.css` to `dist/themes/light.css`
- 🚨 BREAKING: removed `--i2c-focus-ring-color-primary` tokens (use color tokens and `--i2c-focus-ring-width|alpha` instead)
- 🚨 BREAKING: removed `--tabs-border-color` from `<i2c-tab-group>` (use `--track-color` instead)
- 🚨 BREAKING: changed the default value for `effect` to `none` in `<i2c-skeleton>` (use `sheen` to restore the original behavior)
- Added new color primitives to the base set of design tokens
- Added `--i2c-color-*-950` swatches to all color palettes
- Added a console error that appears when menu items have duplicate values in `<i2c-select>`
- Added CodePen link to code examples
- Added `prefix` and `suffix` slots to `<i2c-select>` [#501](https://github.com/shoelace-style/shoelace/pull/501)
- Added `--indicator-color` custom property to `<i2c-tab-group>`
- Exposed base and dark stylesheets so they can be imported via JavaScript [#438](https://github.com/shoelace-style/shoelace/issues/438)
- Fixed a bug in `<i2c-menu>` where pressing <kbd>Enter</kbd> after using type to select would result in the wrong value
- Fixed a bug in `<i2c-radio-group>` where clicking a radio button would cause the wrong control to be focused
- Fixed a bug in `<i2c-button>` and `<i2c-icon-button>` where an unintended `ref` attribute was present
- Fixed a bug in the focus-visible utility that failed to respond to mouseup events
- Fixed a bug where clicking on a menu item would persist its hover/focus state
- Fixed a bug in `<i2c-select>` where it would erroneously intercept important keyboard shortcuts [#504](https://github.com/shoelace-style/shoelace/issues/504)
- Improved contrast throughout all components [#128](https://github.com/shoelace-style/shoelace/issues/128)
- Refactored thumb position logic in `<i2c-switch>` [#490](https://github.com/shoelace-style/shoelace/pull/490)
- Reworked the dark theme to use an inverted + shifted design token approach instead of component-specific selectors

## 2.0.0-beta.47

This release improves how component dependencies are imported. If you've been cherry picking, you no longer need to import component dependencies manually. This significantly improves developer experience, making i2c-Library even easier to use. For transparency, component dependencies will continue to be listed in the docs.

- Added "Reflects" column to the properties table
- Dependencies are now automatically imported for all components
- Fixed a bug where tabbing into `<i2c-radio-group>` would not always focus the checked radio
- Fixed a bug in component styles that prevented the box sizing reset from being applied
- Fixed a regression in `<i2c-color-picker>` where dragging the grid handle wasn't smooth
- Fixed a bug where slot detection could incorrectly match against slots of child elements [#481](https://github.com/shoelace-style/shoelace/pull/481)
- Fixed a bug in `<i2c-input>` where focus would move to the end of the input when typing in Safari [#480](https://github.com/shoelace-style/shoelace/issues/480)
- Improved base path utility logic

## 2.0.0-beta.46

This release improves the developer experience of `<i2c-animation>`. Previously, an animation was assumed to be playing unless the `pause` attribute was set. This behavior has been reversed and `pause` has been removed. Now, animations will not play until the new `play` attribute is applied.

This is a lot more intuitive and makes it easier to activate animations imperatively. In addition, the `play` attribute is automatically removed automatically when the animation finishes or cancels, making it easier to restart finite animations. Lastly, the animation's timing is now accessible through the new `currentTime` property instead of `getCurrentTime()` and `setCurrentTime()`.

In addition, i2c-Library no longer uses Sass. Component styles now use Lit's template literal styles and theme files use pure CSS.

- 🚨 BREAKING: removed the `pause` attribute from `<i2c-animation>` (use `play` to start and stop the animation instead)
- 🚨 BREAKING: removed `getCurrentTime()` and `setCurrentTime()` from `<i2c-animation>` (use the `currentTime` property instead)
- 🚨 BREAKING: removed the `close-on-select` attribute from `<i2c-dropdown>` (use `stay-open-on-select` instead)
- Added the `currentTime` property to `<i2c-animation>` to control the current time without methods
- Fixed a bug in `<i2c-range>` where the tooltip wasn't showing in Safari [#477](https://github.com/shoelace-style/shoelace/issues/477)
- Fixed a bug in `<i2c-menu>` where pressing <kbd>Enter</kbd> in a menu didn't work with click handlers
- Reworked `<i2c-menu>` and `<i2c-menu-item>` to use a roving tab index and improve keyboard accessibility
- Reworked tabbable logic to be more performant [#466](https://github.com/shoelace-style/shoelace/issues/466)
- Switched component stylesheets from Sass to Lit's template literal styles
- Switched theme stylesheets from Sass to CSS

## 2.0.0-beta.45

This release changes the way component metadata is generated. Previously, the project used TypeDoc to analyze components and generate a very large file with type data. The data was then parsed and converted to an easier-to-consume file called `metadata.json`. Alas, TypeDoc is expensive to run and the metadata format wasn't standard.

Thanks to an amazing effort by [Pascal Schilp](https://twitter.com/passle_), the world has a simpler, faster way to gather metadata using the [Custom Elements Manifest Analyzer](https://github.com/open-wc/custom-elements-manifest). Not only is this tool faster, but the data follows the evolving `custom-elements.json` format. This is exciting because a standard format for custom elements opens the door for many potential uses, including documentation generation, framework adapters, IDE integrations, third-party uses, and more. [Check out Pascal's great article](https://dev.to/open-wc/introducing-custom-elements-manifest-gkk) for more info about `custom-elements.json` and the new analyzer.

The docs have been updated to use the new `custom-elements.json` file. If you're relying on the old `metadata.json` file for any purpose, this will be a breaking change for you.

- 🚨 BREAKING: removed the `i2c-overlay-click` event from `<i2c-dialog>` and `<i2c-drawer>` (use `i2c-request-close` instead) [#471](https://github.com/shoelace-style/shoelace/discussions/471)
- 🚨 BREAKING: removed `metadata.json` (use `custom-elements.json` instead)
- Added `custom-elements.json` for component metadata
- Added `i2c-request-close` event to `<i2c-dialog>` and `<i2c-drawer>`
- Added `dialog.denyClose` and `drawer.denyClose` animations
- Fixed a bug in `<i2c-color-picker>` where setting `value` immediately wouldn't trigger an update
- Fixed a bug in `<i2c-dialog>` and `<i2c-drawer>` where setting `open` initially didn't set a focus trap
- Fixed a bug that resulted in form controls having incorrect validity when `disabled` was initially set [#473](https://github.com/shoelace-style/shoelace/issues/473)
- Fixed a bug in the docs that caused the metadata file to be requested twice
- Fixed a bug where tabbing out of a modal would cause the browser to lag [#466](https://github.com/shoelace-style/shoelace/issues/466)
- Updated the docs to use the new `custom-elements.json` for component metadata

## 2.0.0-beta.44

- 🚨 BREAKING: all `invalid` props on form controls now reflect validity before interaction [#455](https://github.com/shoelace-style/shoelace/issues/455)
- Allow `null` to be passed to disable animations in `setDefaultAnimation()` and `setAnimation()`
- Converted build scripts to ESM
- Fixed a bug in `<i2c-checkbox>` where `invalid` did not update properly
- Fixed a bug in `<i2c-dropdown>` where a `keydown` listener wasn't cleaned up properly
- Fixed a bug in `<i2c-select>` where `i2c-blur` was emitted prematurely [#456](https://github.com/shoelace-style/shoelace/issues/456)
- Fixed a bug in `<i2c-select>` where no selection with `multiple` resulted in an incorrect value [#457](https://github.com/shoelace-style/shoelace/issues/457)
- Fixed a bug in `<i2c-select>` where `i2c-change` was emitted immediately after connecting to the DOM [#458](https://github.com/shoelace-style/shoelace/issues/458)
- Fixed a bug in `<i2c-select>` where non-printable keys would cause the menu to open
- Fixed a bug in `<i2c-select>` where `invalid` was not always updated properly
- Reworked the `@watch` decorator to use `update` instead of `updated` resulting in better performance and flexibility

## 2.0.0-beta.43

- Added `?` to optional arguments in methods tables in the docs
- Added the `scrollPosition()` method to `<i2c-textarea>` to get/set scroll position
- Added initial tests for `<i2c-dialog>`, `<i2c-drawer>`, `<i2c-dropdown>`, and `<i2c-tooltip>`
- Fixed a bug in `<i2c-tab-group>` where scrollable tab icons were not displaying correctly
- Fixed a bug in `<i2c-dialog>` and `<i2c-drawer>` where preventing clicks on the overlay no longer worked as described [#452](https://github.com/shoelace-style/shoelace/issues/452)
- Fixed a bug in `<i2c-dialog>` and `<i2c-drawer>` where setting initial focus no longer worked as described [#453](https://github.com/shoelace-style/shoelace/issues/453)
- Fixed a bug in `<i2c-card>` where the `slotchange` listener wasn't attached correctly [#454](https://github.com/shoelace-style/shoelace/issues/454)
- Fixed lifecycle bugs in a number of components [#451](https://github.com/shoelace-style/shoelace/issues/451)
- Removed `fill: both` from internal animate utility so styles won't "stick" by default [#450](https://github.com/shoelace-style/shoelace/issues/450)

## 2.0.0-beta.42

This release addresses an issue with the `open` attribute no longer working in a number of components, as a result of the changes in beta.41. It also removes a small but controversial feature that complicated show/hide logic and led to a poor experience for developers and end users.

There are two ways to show/hide affected components: by calling `show() | hide()` and by toggling the `open` prop. Previously, it was possible to call `event.preventDefault()` in an `i2c-show | i2c-hide ` handler to stop the component from showing/hiding. The problem becomes obvious when you set `el.open = false`, the event gets canceled, and in the next cycle `el.open` has reverted to `true`. Not only is this unexpected, but it also doesn't play nicely with frameworks. Additionally, this made it impossible to await `show() | hide()` since there was a chance they'd never resolve.

Technical reasons aside, canceling these events seldom led to a good user experience, so the decision was made to no longer allow `i2c-show | i2c-hide` to be cancelable.

- 🚨 BREAKING: `i2c-show` and `i2c-hide` events are no longer cancelable
- Added Iconoir example to the icon docs
- Added Web Test Runner
- Added initial tests for `<i2c-alert>` and `<i2c-details>`
- Changed the `cancelable` default to `false` for the internal `@event` decorator
- Fixed a bug where toggling `open` stopped working in `<i2c-alert>`, `<i2c-dialog>`, `<i2c-drawer>`, `<i2c-dropdown>`, and `<i2c-tooltip>`
- Fixed a bug in `<i2c-range>` where setting a value outside the default `min` or `max` would clamp the value [#448](https://github.com/shoelace-style/shoelace/issues/448)
- Fixed a bug in `<i2c-dropdown>` where placement wouldn't adjust properly when shown [#447](https://github.com/shoelace-style/shoelace/issues/447)
- Fixed a bug in the internal `shimKeyframesHeightAuto` utility that caused `<i2c-details>` to measure heights incorrectly [#445](https://github.com/shoelace-style/shoelace/issues/445)
- Fixed a number of imports that should have been type imports
- Updated Lit to 2.0.0-rc.2
- Updated esbuild to 0.12.4

## 2.0.0-beta.41

This release changes how components animate. In previous versions, CSS transitions were used for most show/hide animations. Transitions are problematic due to the way `transitionend` works. This event fires once _per transition_, and it's impossible to know which transition to look for when users can customize any possible CSS property. Because of this, components previously required the `opacity` property to transition. If a user were to prevent `opacity` from transitioning, the component wouldn't hide properly and the `i2c-after-show|hide` events would never emit.

CSS animations, on the other hand, have a more reliable `animationend` event. Alas, `@keyframes` don't cascade and can't be injected into a shadow DOM via CSS, so there would be no good way to customize them.

The most elegant solution I found was to use the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API), which offers more control over animations at the expense of customizations being done in JavaScript. Fortunately, through the [Animation Registry](/getting-started/customizing#animations), you can customize animations globally and/or per component with a minimal amount of code.

- 🚨 BREAKING: changed `left` and `right` placements to `start` and `end` in `<i2c-drawer>`
- 🚨 BREAKING: changed `left` and `right` placements to `start` and `end` in `<i2c-tab-group>`
- 🚨 BREAKING: removed `--hide-duration`, `--hide-timing-function`, `--show-duration`, and `--show-timing-function` custom properties from `<i2c-tooltip>` (use the Animation Registry instead)
- Added the Animation Registry
- Fixed a bug where removing `<i2c-dropdown>` from the DOM and adding it back destroyed the popover reference [#443](https://github.com/shoelace-style/shoelace/issues/443)
- Updated animations for `<i2c-alert>`, `<i2c-dialog>`, `<i2c-drawer>`, `<i2c-dropdown>`, and `<i2c-tooltip>` to use the Animation Registry instead of CSS transitions
- Improved a11y by respecting `prefers-reduced-motion` for all show/hide animations
- Improved `--show-delay` and `--hide-delay` behavior in `<i2c-tooltip>` so they only apply on hover
- Removed the internal popover utility

## 2.0.0-beta.40

- 🚨 BREAKING: renamed `<i2c-responsive-embed>` to `<i2c-responsive-media>` and added support for images and videos [#436](https://github.com/shoelace-style/shoelace/issues/436)
- Fixed a bug where setting properties before an element was defined would render incorrectly [#425](https://github.com/shoelace-style/shoelace/issues/425)
- Fixed a bug that caused all modules to be imported when cherry picking certain components [#439](https://github.com/shoelace-style/shoelace/issues/439)
- Fixed a bug where the scrollbar would reposition `<i2c-dialog>` on hide causing it to jump [#424](https://github.com/shoelace-style/shoelace/issues/424)
- Fixed a bug that prevented the project from being built in a Windows environment
- Improved a11y in `<i2c-progress-ring>`
- Removed `src/utilities/index.ts` to prevent tree-shaking confusion (please import utilities directly from their respective modules)
- Removed global `[hidden]` styles so they don't affect anything outside of components
- Updated to Bootstrap Icons 1.5.0
- Updated React docs to use [`@shoelace-style/react`](https://github.com/shoelace-style/react)
- Updated NextJS docs [#434](https://github.com/shoelace-style/shoelace/pull/434)
- Updated TypeScript to 4.2.4

## 2.0.0-beta.39

- Added experimental `<i2c-qr-code>` component
- Added `system` icon library and updated all components to use this instead of the default icon library [#420](https://github.com/shoelace-style/shoelace/issues/420)
- Updated to esbuild 0.8.57
- Updated to Lit 2.0.0-rc.1 and lit-html 2.0.0-rc.2

## 2.0.0-beta.38

- 🚨 BREAKING: `<i2c-radio>` components must be located inside an `<i2c-radio-group>` for proper accessibility [#218](https://github.com/shoelace-style/shoelace/issues/218)
- Added `<i2c-radio-group>` component [#218](https://github.com/shoelace-style/shoelace/issues/218)
- Added `--header-spacing`, `--body-spacing`, and `--footer-spacing` custom properties to `<i2c-drawer>` and `<i2c-dialog>` [#409](https://github.com/shoelace-style/shoelace/issues/409)
- Fixed a bug where `<i2c-menu-item>` prefix and suffix slots wouldn't always receive the correct spacing
- Fixed a bug where `<i2c-badge>` used `--i2c-color-white` instead of the correct design tokens [#407](https://github.com/shoelace-style/shoelace/issues/407)
- Fixed a bug in `<i2c-dialog>` and `<i2c-drawer>` where the escape key would cause parent components to close
- Fixed a race condition bug in `<i2c-icon>` [#410](https://github.com/shoelace-style/shoelace/issues/410)
- Improved focus trap behavior in `<i2c-dialog>` and `<i2c-drawer>`
- Improved a11y in `<i2c-dialog>` and `<i2c-drawer>` by restoring focus to trigger on close
- Improved a11y in `<i2c-radio>` with Windows high contrast mode [#215](https://github.com/shoelace-style/shoelace/issues/215)
- Improved a11y in `<i2c-select>` by preventing the chevron icon from being announced
- Internal: removed the `options` argument from the modal utility as focus trapping is now handled internally

## 2.0.0-beta.37

- Added `click()` method to `<i2c-checkbox>`, `<i2c-radio>`, and `<i2c-switch>`
- Added the `activation` attribute to `<i2c-tab-group>` to allow for automatic and manual tab activation
- Added `npm run create <tag>` script to scaffold new components faster
- Fixed a bug in `<i2c-tooltip>` where events weren't properly cleaned up on disconnect
- Fixed a bug in `<i2c-tooltip>` where they wouldn't display after toggling `disabled` off and on again [#391](https://github.com/shoelace-style/shoelace/issues/391)
- Fixed a bug in `<i2c-details>` where `show()` and `hide()` would toggle the control when disabled
- Fixed a bug in `<i2c-color-picker>` where setting `value` wouldn't update the control
- Fixed a bug in `<i2c-tab-group>` where tabs that are initially disabled wouldn't receive the indicator on activation [#403](https://github.com/shoelace-style/shoelace/issues/403)
- Fixed incorrect event names for `i2c-after-show` and `i2c-after-hide` in `<i2c-details>`
- Improved a11y for disabled buttons that are rendered as links
- Improved a11y for `<i2c-button-group>` by adding the correct `role` attribute
- Improved a11y for `<i2c-input>`, `<i2c-range>`, `<i2c-select>`, and `<i2c-textarea>` so labels and helper text are read properly by screen readers
- Removed `i2c-show`, `i2c-hide`, `i2c-after-show`, `i2c-after-hide` events from `<i2c-color-picker>` (the color picker's visibility cannot be controlled programmatically so these shouldn't have been exposed; the dropdown events now bubble up so you can listen for those instead)
- Reworked `<i2c-button-group>` so it doesn't require light DOM styles

## 2.0.0-beta.36

- 🚨 BREAKING: renamed `setFocus()` to `focus()` in button, checkbox, input, menu item, radio, range, rating, select, switch, and tab
- 🚨 BREAKING: renamed `removeFocus()` to `blur()` in button, checkbox, input, menu item, radio, range, rating, select, switch, and tab
- Added `click()` method to `<i2c-button>`
- Fixed a bug where toggling `open` on `<i2c-drawer>` would skip the transition
- Fixed a bug where `<i2c-color-picker>` could be opened when disabled
- Fixed a bug in `<i2c-color-picker>` that caused erratic slider behaviors [#388](https://github.com/shoelace-style/shoelace/issues/388) [#389](https://github.com/shoelace-style/shoelace/issues/389)
- Fixed a bug where `<i2c-details>` wouldn't always render the correct height when open initially [#357](https://github.com/shoelace-style/shoelace/issues/357)
- Renamed `components.json` to `metadata.json`
- Updated to the prerelease versions of LitElement and lit-html
- Updated to Bootstrap Icons 1.4.1

## 2.0.0-beta.35

- Fixed a bug in `<i2c-animation>` where `i2c-cancel` and `i2c-finish` events would never fire
- Fixed a bug where `<i2c-alert>` wouldn't always transition properly
- Fixed a bug where using `<i2c-menu>` inside a shadow root would break keyboard selections [#382](https://github.com/shoelace-style/shoelace/issues/382)
- Fixed a bug where toggling `multiple` in `<i2c-select>` would lead to a stale display label
- Fixed a bug in `<i2c-tab-group>` where changing `placement` could result in the active tab indicator being drawn a few pixels off
- Fixed a bug in `<i2c-button>` where link buttons threw an error on focus, blur, and click
- Improved `@watch` decorator to run after update instead of during
- Updated `<i2c-menu-item>` checked icon to `check` instead of `check2`
- Upgraded the status of `<i2c-resize-observer>` from experimental to stable

## 2.0.0-beta.34

This release changes the way components are registered if you're [cherry picking](/getting-started/installation?id=cherry-picking) or [using a bundler](/getting-started/installation?id=bundling). This recommendation came from the LitElement team and simplifies i2c-Library's dependency graph. It also eliminates the need to call a `register()` function before using each component.

From now on, importing a component will register it automatically. The caveat is that bundlers may not tree shake the library properly if you import from `@shoelace-style/shoelace`, so the recommendation is to import components and utilities from their corresponding files instead.

- 🚨 BREAKING: removed `all.i2cLibrary.js` (use `i2cLibrary.js` instead)
- 🚨 BREAKING: component modules now have a side effect, so bundlers may not tree shake properly when importing from `@shoelace-style/shoelace` (see the [installation page](/getting-started/installation?id=bundling) for more details and how to update)
- Added `i2c-clear` event to `<i2c-select>`
- Fixed a bug where dynamically changing menu items in `<i2c-select>` would cause the display label to be blank [#374](https://github.com/shoelace-style/shoelace/discussions/374)
- Fixed a bug where setting the `value` attribute or property on `<i2c-input>` and `<i2c-textarea>` would trigger validation too soon
- Fixed the margin in `<i2c-menu-label>` to align with menu items
- Fixed `autofocus` attributes in `<i2c-input>` and `<i2c-textarea>`
- Improved types for `autocapitalize` in `<i2c-input>` and `<i2c-textarea>`
- Reverted the custom `@tag` decorator in favor of `@customElement` to enable auto-registration

## 2.0.0-beta.33

- Fixed a bug where link buttons could have incorrect `target`, `download`, and `rel` props
- Fixed `aria-label` and `aria-labelledby` props in `<i2c-dialog>` and `<i2c-drawer>`
- Fixed `tabindex` attribute in `<i2c-menu>`
- Fixed a bug in `<i2c-select>` where tags would always render as pills
- Fixed a bug in `<i2c-button>` where calling `setFocus()` would throw an error

## 2.0.0-beta.32

- Added tag name maps so TypeScript can identify i2c-Library elements [#371](https://github.com/shoelace-style/shoelace/pull/371)
- Fixed a bug where the active tab indicator wouldn't render properly on tabs styled with `flex-end` [#355](https://github.com/shoelace-style/shoelace/issues/355)
- Fixed a bug where `i2c-change` wasn't emitted by `<i2c-checkbox>` or `<i2c-switch>` [#370](https://github.com/shoelace-style/shoelace/issues/370)
- Fixed a bug where some props weren't being watched correctly in `<i2c-alert>` and `<i2c-color-picker>`
- Improved `@watch` decorator so watch handlers don't run before the first render
- Removed guards that were added due to previous watch handler behavior

## 2.0.0-beta.31

- Add touch support to `<i2c-rating>` [#362](https://github.com/shoelace-style/shoelace/pull/362)
- Fixed a bug where the `open` attribute on `<i2c-details>` would prevent it from opening [#357](https://github.com/shoelace-style/shoelace/issues/357)
- Fixed event detail type parsing so component class names are shown instead of `default`

## 2.0.0-beta.30

- Fix default exports for all components so cherry picking works again [#365](https://github.com/shoelace-style/shoelace/issues/365)
- Revert FOUC base style because it interferes with some framework and custom element use cases

## 2.0.0-beta.29

**This release migrates component implementations from Shoemaker to LitElement.** Due to feedback from the community, i2c-Library will rely on a more heavily tested library for component implementations. This gives you a more solid foundation and reduces my maintenance burden. Thank you for all your comments, concerns, and encouragement! Aside from that, everything else from beta.28 still applies plus the following.

- 🚨 BREAKING: removed the `symbol` property from `<i2c-rating>` and reverted to `getSymbol` for optimal flexibility
- Added `vscode.html-custom-data.json` to the build to support IntelliSense (see [the usage section](/getting-started/usage#code-completion) for details)
- Added a base style to prevent FOUC before components are defined
- Fixed bug where TypeScript types weren't being generated [#364](https://github.com/shoelace-style/shoelace/pull/364)
- Improved vertical padding in `<i2c-tooltip>`
- Moved chunk files into a separate folder
- Reverted menu item active styles
- Updated esbuild to 0.8.54

## 2.0.0-beta.28

**This release includes a major under the hood overhaul of the library and how it's distributed.** Until now, i2c-Library was developed with Stencil. This release moves to a lightweight tool called Shoemaker, a homegrown utility that provides declarative templating and data binding while reducing the boilerplate required for said features.

This change in tooling addresses a number of longstanding bugs and limitations. It also gives us more control over the library and build process while streamlining development and maintenance. Instead of two different distributions, i2c-Library now offers a single, standards-compliant collection of ES modules. This may affect how you install and use the library, so please refer to the [installation page](/getting-started/installation) for details.

!> Due to the large number of internal changes, I would consider this update to be less stable than previous ones. If you're using i2c-Library in a production app, consider holding off until the next beta to allow for more exhaustive testing from the community. Please report any bugs you find on the [issue tracker](https://github.com/shoelace-style/shoelace/issues).

The component API remains the same except for the changes noted below. Thanks for your patience as I work diligently to make i2c-Library more stable and future-proof. 🙌

- 🚨 BREAKING: removed the custom elements bundle (you can import ES modules directly)
- 🚨 BREAKING: removed `getAnimationNames()` and `getEasingNames()` methods from `<i2c-animation>` (you can import them from `utilities/animation.js` instead)
- 🚨 BREAKING: removed the `<i2c-icon-library>` component since it required imperative initialization (you can import the `registerIconLibrary()` function from `utilities/icon-library.js` instead)
- 🚨 BREAKING: removed the experimental `<i2c-theme>` component due to technical limitations (you should set the `i2c-theme-{name}` class on the `<body>` instead)
- 🚨 BREAKING: moved the base stylesheet from `dist/shoelace.css` to `dist/themes/base.css`
- 🚨 BREAKING: moved `icons` into `assets/icons` to make future assets easier to colocate
- 🚨 BREAKING: changed `getSymbol` property in `<i2c-rating>` to `symbol` (it now accepts a string or a function that returns an icon name)
- 🚨 BREAKING: renamed `setAssetPath()` to `setBasePath()` and added the ability to set the library's base path with a `data-i2clib` attribute (`setBasePath()` is exported from `utilities/base-path.js`)
- Fixed `min` and `max` types in `<i2c-input>` to allow numbers and strings [#330](https://github.com/shoelace-style/shoelace/issues/330)
- Fixed a bug where `<i2c-checkbox>`, `<i2c-radio>`, and `<i2c-switch>` controls would shrink with long labels [#325](https://github.com/shoelace-style/shoelace/issues/325)
- Fixed a bug in `<i2c-select>` where the dropdown menu wouldn't reposition when the box resized [#340](https://github.com/shoelace-style/shoelace/issues/340)
- Fixed a bug where ignoring clicks and clicking the overlay would prevent the escape key from closing the dialog/drawer [#344](https://github.com/shoelace-style/shoelace/pull/344)
- Removed the lazy loading dist (importing `i2cLibrary.js` will load and register all components now)
- Switched from Stencil to Shoemaker
- Switched to a custom build powered by [esbuild](https://esbuild.github.io/)
- Updated to Bootstrap Icons 1.4.0

## 2.0.0-beta.27

- Added `handle-icon` slot to `<i2c-image-comparer>` [#311](https://github.com/shoelace-style/shoelace/issues/311)
- Added `label` and `helpText` props and slots to `<i2c-range>` [#318](https://github.com/shoelace-style/shoelace/issues/318)
- Added "Integrating with NextJS" tutorial to the docs, courtesy of [crutchcorn](https://github.com/crutchcorn)
- Added `content` slot to `<i2c-tooltip>` [#322](https://github.com/shoelace-style/shoelace/pull/322)
- Fixed a bug in `<i2c-select>` where removing a tag would toggle the dropdown
- Fixed a bug in `<i2c-input>` and `<i2c-textarea>` where the input might not exist when the value watcher is called [#313](https://github.com/shoelace-style/shoelace/issues/313)
- Fixed a bug in `<i2c-details>` where hidden elements would receive focus when tabbing [#323](https://github.com/shoelace-style/shoelace/issues/323)
- Fixed a bug in `<i2c-icon>` where `i2c-error` would only be emitted for network failures [#326](https://github.com/shoelace-style/shoelace/pull/326)
- Reduced the default line-height for `<i2c-tooltip>`
- Updated `<i2c-menu-item>` focus styles
- Updated `<i2c-select>` so tags will wrap when `multiple` is true
- Updated to Stencil 2.4.0

## 2.0.0-beta.26

- 🚨 BREAKING: Fixed animations bloat
  - Removed ~400 baked-in Animista animations because they were causing ~200KB of bloat (they can still be used with custom keyframes)
  - Reworked animations into a separate module ([`@shoelace-style/animations`](https://github.com/shoelace-style/animations)) so it's more maintainable and animations are sync with the latest version of animate.css
  - Animation and easing names are now camelCase (e.g. `easeInOut` instead of `ease-in-out`)
- Added initial E2E tests [#169](https://github.com/shoelace-style/shoelace/pull/169)
- Added the `FocusOptions` argument to all components that have a `setFocus()` method
- Added `i2c-initial-focus` event to `<i2c-dialog>` and `<i2c-drawer>` so focus can be customized to a specific element
- Added `close-button` part to `<i2c-tab>` so the close button can be customized
- Added `scroll-button` part to `<i2c-tab-group>` so the scroll buttons can be customized
- Fixed a bug where `i2c-hide` would be emitted twice when closing an alert with `hide()`
- Fixed a bug in `<i2c-color-picker>` where the toggle button was smaller than the preview button in Safari
- Fixed a bug in `<i2c-tab-group>` where activating a nested tab group didn't work properly [#299](https://github.com/shoelace-style/shoelace/issues/299)
- Fixed a bug in `<i2c-tab-group>` where removing tabs would throw an error
- Fixed a bug in `<i2c-alert>`, `<i2c-dialog>`, `<i2c-drawer>`, `<i2c-select>`, and `<i2c-tag>` where the close button's base wasn't exported so it couldn't be styled
- Removed `text` type from `<i2c-badge>` as it was erroneously copied and never had styles
- Updated `<i2c-tab-group>` so the `active` property is reflected to its attribute
- Updated the docs to show dependencies instead of dependents which is much more useful when working with the custom elements bundle
- Updated to Bootstrap Icons 1.3.0

## 2.0.0-beta.25

- 🚨 BREAKING: Reworked color tokens
  - Theme colors are now inspired by Tailwind's professionally-designed color palette
  - Color token variations now range from 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
  - Color token variations were inverted, e.g. 50 is lightest and 950 is darkest
  - All component styles were adapted to use the new color tokens, but visual changes are subtle
  - The dark theme was adapted use the new color tokens
  - HSL is no longer used because it is not perceptually uniform (this may be revisited when all browsers support [LCH colors](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/))
- 🚨 BREAKING: Refactored `<i2c-select>` to improve accessibility [#216](https://github.com/shoelace-style/shoelace/issues/216)
  - Removed the internal `<i2c-input>` because it was causing problems with a11y and virtual keyboards
  - Removed `input`, `prefix` and `suffix` parts
- 🚨 BREAKING: Removed `copy-button` part from `<i2c-color-picker>` since copying is now done by clicking the preview
- Added `getFormattedValue()` method to `<i2c-color-picker>` so you can retrieve the current value in any format
- Added visual separators between solid buttons in `<i2c-button-group>`
- Added `help-text` attribute to `<i2c-input>`, `<i2c-textarea>`, and `<i2c-select>`
- Fixed a bug where moving the mouse while `<i2c-dropdown>` is closing would remove focus from the trigger
- Fixed a bug where `<i2c-menu-item>` didn't set a default color in the dark theme
- Fixed a bug where `<i2c-color-picker>` preview wouldn't update in Safari
- Fixed a bug where removing an icon's `name` or `src` wouldn't remove the previously rendered SVG [#285](https://github.com/shoelace-style/shoelace/issues/285)
- Fixed a bug where disabled link buttons didn't appear disabled
- Improved button spacings and added split button example
- Improved elevation tokens in dark theme
- Improved accessibility in `<i2c-tooltip>` by allowing escape to dismiss it [#219](https://github.com/shoelace-style/shoelace/issues/219)
- Improved slot detection in `<i2c-card>`, `<i2c-dialog>`, and `<i2c-drawer>`
- Made `@types/resize-observer-browser` a dependency so users don't have to install it manually
- Refactored internal label + help text logic into a functional component used by `<i2c-input>`, `<i2c-textarea>`, and `<i2c-select>`
- Removed `i2c-blur` and `i2c-focus` events from `<i2c-menu>` since menus can't have focus as of 2.0.0-beta.22
- Updated `<i2c-spinner>` so the indicator is more obvious
- Updated to Bootstrap Icons 1.2.2

## 2.0.0-beta.24

- Added `<i2c-format-date>` component
- Added `indeterminate` state to `<i2c-progress-bar>` [#274](https://github.com/shoelace-style/shoelace/issues/274)
- Added `--track-color`, `--indicator-color`, and `--label-color` to `<i2c-progress-bar>` [#276](https://github.com/shoelace-style/shoelace/issues/276)
- Added `allow-scripts` attribute to `<i2c-include>` [#280](https://github.com/shoelace-style/shoelace/issues/280)
- Fixed a bug where `<i2c-menu-item>` color variable was incorrect [#272](https://github.com/shoelace-style/shoelace/issues/272)
- Fixed a bug where `<i2c-dialog>` and `<i2c-drawer>` would emit the `i2c-hide` event twice [#275](https://github.com/shoelace-style/shoelace/issues/275)
- Fixed a bug where calling `event.preventDefault()` on certain form elements wouldn't prevent `<i2c-form>` from submitting [#277](https://github.com/shoelace-style/shoelace/issues/277)
- Fixed drag handle orientation in `<i2c-image-comparer>`
- Restyled `<i2c-spinner>` so the track is visible and the indicator is smaller.
- Removed `resize-observer-polyfill` in favor of `@types/resize-observer-browser` since all target browsers support `ResizeObserver`
- Upgraded the status of `<i2c-form>`, `<i2c-image-comparer>`, and `<i2c-include>` from experimental to stable

## 2.0.0-beta.23

- Added `<i2c-format-number>` component
- Added `<i2c-relative-time>` component
- Added `closable` attribute to `<i2c-tab>`
- Added experimental `<i2c-resize-observer>` utility
- Added experimental `<i2c-theme>` utility and updated theming documentation
- Fixed a bug where `<i2c-menu-item>` wouldn't render properly in the dark theme
- Fixed a bug where `<i2c-select>` would show an autocomplete menu
- Improved placeholder contrast in dark theme
- Updated to Bootstrap Icons 1.1.0
- Updated to Stencil 2.3.0

## 2.0.0-beta.22

- 🚨 BREAKING: Refactored `<i2c-menu>` and `<i2c-menu-item>` to improve accessibility by using proper focus states [#217](https://github.com/shoelace-style/shoelace/issues/217)
  - Moved `tabindex` from `<i2c-menu>` to `<i2c-menu-item>`
  - Removed the `active` attribute from `<i2c-menu-item>` because synthetic focus states are bad for accessibility
  - Removed the `i2c-activate` and `i2c-deactivate` events from `<i2c-menu-item>` (listen for `focus` and `blur` instead)
  - Updated `<i2c-select>` so keyboard navigation still works
- Added `no-scroll-controls` attribute to `<i2c-tab-group>` [#253](https://github.com/shoelace-style/shoelace/issues/253)
- Fixed a bug where setting `open` initially wouldn't show `<i2c-dialog>` or `<i2c-drawer>` [#255](https://github.com/shoelace-style/shoelace/issues/255)
- Fixed a bug where `disabled` could be set when buttons are rendered as links
- Fixed a bug where hoisted dropdowns would render in the wrong position when placed inside `<i2c-dialog>` [#252](https://github.com/shoelace-style/shoelace/issues/252)
- Fixed a bug where boolean aria attributes didn't explicitly set `true|false` string values in the DOM
- Fixed a bug where `aria-describedby` was never set on tooltip targets in `<i2c-tooltip>`
- Fixed a bug where setting `position` on `<i2c-image-comparer>` wouldn't update the divider's position
- Fixed a bug where the check icon was announced to screen readers in `<i2c-menu-item>`
- Improved `<i2c-icon-button>` accessibility by encouraging proper use of `label` and hiding the internal icon from screen readers [#220](https://github.com/shoelace-style/shoelace/issues/220)
- Improved `<i2c-dropdown>` accessibility by attaching `aria-haspopup` and `aria-expanded` to the slotted trigger
- Refactored position logic to remove an unnecessary state variable in `<i2c-image-comparer>`
- Refactored design tokens to use `rem` instead of `px` for input height and spacing [#221](https://github.com/shoelace-style/shoelace/issues/221)
- Removed `console.log` from modal utility
- Updated to Stencil 2.2.0

## 2.0.0-beta.21

- Added `label` slot to `<i2c-input>`, `<i2c-select>`, and `<i2c-textarea>` [#248](https://github.com/shoelace-style/shoelace/issues/248)
- Added `label` slot to `<i2c-dialog>` and `<i2c-drawer>`
- Added experimental `<i2c-include>` component
- Added status code to the `i2c-error` event in `<i2c-icon>`
- Fixed a bug where initial transitions didn't show in `<i2c-dialog>` and `<i2c-drawer>` [#247](https://github.com/shoelace-style/shoelace/issues/247)
- Fixed a bug where indeterminate checkboxes would maintain the indeterminate state when toggled
- Fixed a bug where concurrent active modals (i.e. dialog, drawer) would try to steal focus from each other
- Improved `<i2c-color-picker>` grid and slider handles [#246](https://github.com/shoelace-style/shoelace/issues/246)
- Refactored `<i2c-icon>` request logic and removed unused cache map
- Reworked show/hide logic in `<i2c-alert>`, `<i2c-dialog>`, and `<i2c-drawer>` to not use reflow hacks and the `hidden` attribute
- Reworked slot logic in `<i2c-card>`, `<i2c-dialog>`, and `<i2c-drawer>`
- Updated to Popper 2.5.3 to address a fixed position bug in Firefox

## 2.0.0-beta.20

- 🚨 BREAKING: Transformed all i2c-Library events to lowercase ([details](#why-did-event-names-change))
- Added support for dropdowns and non-icon elements to `<i2c-input>`
- Added `spellcheck` attribute to `<i2c-input>`
- Added `<i2c-icon-library>` to allow custom icon library registration
- Added `library` attribute to `<i2c-icon>` and `<i2c-icon-button>`
- Added "Integrating with Rails" tutorial to the docs, courtesy of [ParamagicDev](https://github.com/ParamagicDev)
- Fixed a bug where `<i2c-progress-ring>` rendered incorrectly when zoomed in Safari [#227](https://github.com/shoelace-style/shoelace/issues/227>)
- Fixed a bug where tabbing into slotted elements closes `<i2c-dropdown>` when used in a shadow root [#223](https://github.com/shoelace-style/shoelace/issues/223)
- Fixed a bug where scroll anchoring caused undesirable scrolling when `<i2c-details>` are grouped

### Why did event names change?

i2c-Library events were updated to use a lowercase, kebab-style naming convention. Instead of event names such as `slChange` and `slAfterShow`, you'll need to use `i2c-change` and `i2c-after-show` now.

This change was necessary to address a critical issue in frameworks that use DOM templates with declarative event bindings such as `<i2c-button @slChange="handler">`. Due to HTML's case-insensitivity, browsers translate attribute names to lowercase, turning `@slChange` into `@slchange`, making it impossible to listen to `slChange`.

While declarative event binding is a non-standard feature, not supporting it would make i2c-Library much harder to use in popular frameworks. To accommodate those users and provide a better developer experience, we decided to change the naming convention while i2c-Library is still in beta.

The following pages demonstrate why this change was necessary.

- [This Polymer FAQ from Custom Elements Everywhere](https://custom-elements-everywhere.com/#faq-polymer)
- [Vue's Event Names documentation](https://vuejs.org/v2/guide/components-custom-events.html#Event-Names)

## 2.0.0-beta.19

- Added `input`, `label`, `prefix`, `clear-button`, `suffix`, `help-text` exported parts to `<i2c-select>` to make the input customizable
- Added toast notifications through the `toast()` method on `<i2c-alert>`
- Fixed a bug where mouse events would bubble up when `<i2c-button>` was disabled, causing tooltips to erroneously appear
- Fixed a bug where pressing space would open and immediately close `<i2c-dropdown>` panels in Firefox
- Fixed a bug where `<i2c-tooltip>` would throw an error on init
- Fixed a bug in custom keyframes animation example
- Refactored clear logic in `<i2c-input>`

## 2.0.0-beta.18

- Added `name` and `invalid` attribute to `<i2c-color-picker>`
- Added support for form submission and validation to `<i2c-color-picker>`
- Added touch support to demo resizers in the docs
- Added `<i2c-responsive-embed>` component
- Fixed a bug where swapping an animated element wouldn't restart the animation in `<i2c-animation>`
- Fixed a bug where the cursor was incorrect when `<i2c-select>` was disabled
- Fixed a bug where `slblur` and `slfocus` were emitted twice in `<i2c-select>`
- Fixed a bug where clicking on `<i2c-menu>` wouldn't focus it
- Fixed a bug in the popover utility where `onAfterShow` would fire too soon
- Fixed a bug where `bottom` and `right` placements didn't render properly in `<i2c-tab-group>`
- Improved keyboard logic in `<i2c-dropdown>`, `<i2c-menu>`, and `<i2c-select>`
- Updated `<i2c-animation>` to stable
- Updated to Stencil 2.0 (you may need to purge `node_modules` and run `npm install` after pulling)
- Updated entry points in `package.json` to reflect new filenames generated by Stencil 2

## 2.0.0-beta.17

- Added `minlength` and `spellcheck` attributes to `<i2c-textarea>`
- Fixed a bug where clicking a tag in `<i2c-select>` wouldn't toggle the menu
- Fixed a bug where options where `<i2c-select>` options weren't always visible or scrollable
- Fixed a bug where setting `null` on `<i2c-input>`, `<i2c-textarea>`, or `<i2c-select>` would throw an error
- Fixed a bug where `role` was on the wrong element and aria attribute weren't explicit in `<i2c-checkbox>`, `<i2c-switch>`, and `<i2c-radio>`
- Fixed a bug where dynamically adding/removing a slot wouldn't work as expected in `<i2c-card>`, `<i2c-dialog>`, and `<i2c-drawer>`
- Fixed a bug where the value wasn't updated and events weren't emitted when using `setRangeText` in `<i2c-input>` and `<i2c-textarea>`
- Optimized `hasSlot` utility by using a simpler selector
- Updated Bootstrap Icons to 1.0.0 with many icons redrawn and improved
- Updated contribution guidelines

**Form validation has been reworked and is much more powerful now!**

- The `invalid` attribute now reflects the control's validity as determined by the browser's constraint validation API
- Added `required` to `<i2c-checkbox>`, `<i2c-select>`, and `<i2c-switch>`
- Added `reportValidity()` and `setCustomValidity()` methods to all form controls
- Added validation checking for custom and native form controls to `<i2c-form>`
- Added `novalidate` attribute to `<i2c-form>` to disable validation
- Removed the `valid` attribute from all form controls
- Removed valid and invalid design tokens and related styles (you can use your own custom styles to achieve this)

## 2.0.0-beta.16

- Added `hoist` attribute to `<i2c-color-picker>`, `<i2c-dropdown>`, and `<i2c-select>` to work around panel clipping
- Added `<i2c-format-bytes>` utility component
- Added `clearable` and `required` props to `<i2c-select>`
- Added `slclear` event to `<i2c-input>`
- Added keyboard support to the preview resizer in the docs
- Fixed a bug where the `aria-selected` state was incorrect in `<i2c-menu-item>`
- Fixed a bug where custom properties applied to `<i2c-tooltip>` didn't affect show/hide transitions
- Fixed a bug where `--i2c-input-color-*` custom properties had no effect on `<i2c-input>` and `<i2c-textarea>`
- Refactored `<i2c-dropdown>` and `<i2c-tooltip>` to use positioner elements so panels/tooltips can be customized easier

## 2.0.0-beta.15

- Added `image-comparer` component
- Added `--width`, `--height`, and `--thumb-size` custom props to `<i2c-switch>`
- Fixed an `aria-labelledby` attribute typo in a number of components
- Fixed a bug where the `change` event wasn't updating the value in `<i2c-input>`
- Fixed a bug where `<i2c-color-picker>` had the wrong border color in the dark theme
- Fixed a bug where `<i2c-menu-item>` had the wrong color in dark mode when disabled
- Fixed a bug where WebKit's autocomplete styles made inputs looks broken
- Fixed a bug where aria labels were wrong in `<i2c-select>`
- Fixed a bug where clicking the label wouldn't focus the control in `<i2c-select>`

## 2.0.0-beta.14

- Added dark theme
- Added `--i2c-panel-background-color` and `--i2c-panel-border-color` tokens
- Added `--tabs-border-color` custom property to `<i2c-tab-group>`
- Added `--track-color` custom property to `<i2c-range>`
- Added `tag` part to `<i2c-select>`
- Updated `package.json` so custom elements imports can be consumed from the root
- Fixed a bug where scrolling dialogs didn't resize properly in Safari
- Fixed a bug where `slshow` and `slhide` would be emitted twice in some components
- Fixed a bug where `custom-elements/index.d.ts` was broken due to an unclosed comment (fixed in Stencil 1.17.3)
- Fixed bug where inputs were not using border radius tokens
- Fixed a bug where the text color was being erroneously set in `<i2c-progress-ring>`
- Fixed a bug where `<i2c-progress-bar>` used the wrong part name internally for `indicator`
- Removed background color from `<i2c-menu>`
- Updated to Stencil 1.17.3

## 2.0.0-beta.13

- Added `slactivate` and `sldeactivate` events to `<i2c-menu-item>`
- Added experimental `<i2c-animation>` component
- Added shields to documentation
- Fixed a bug where link buttons would have `type="button"`
- Fixed a bug where button groups with tooltips experienced an odd spacing issue in Safari
- Fixed a bug where scrolling in dropdowns/selects didn't work properly on Windows (special thanks to [Trendy](http://github.com/trendy) for helping troubleshoot!)
- Fixed a bug where selecting a menu item in a dropdown would cause Safari to scroll
- Fixed a bug where type to select wouldn't accept symbols
- Moved scrolling logic from `<i2c-menu>` to `<i2c-dropdown>`

## 2.0.0-beta.12

- Added support for `href`, `target`, and `download` to buttons
- Fixed a bug where buttons would have horizontal spacing in Safari
- Fixed a bug that caused an import resolution error when using i2c-Library in a Stencil app

## 2.0.0-beta.11

- Added button group component
- Fixed icon button alignment
- Fixed a bug where focus visible observer wasn't removed from `<i2c-details>`
- Replaced the deprecated `componentDidUnload` lifecycle method with `disconnectedCallback` to prevent issues with frameworks

## 2.0.0-beta.10

- Added community page to the docs
- Fixed a bug where many components would erroneously receive an `id` when using the custom elements bundle
- Fixed a bug where tab groups weren't scrollable with the mouse

## 2.0.0-beta.9

- Added the icon button component
- Added the skeleton component
- Added the `typeToSelect` method to menu so type-to-select behavior can be controlled externally
- Added the `pulse` attribute to badge
- Fixed a bug where hovering over select showed the wrong cursor
- Fixed a bug where tabbing into a select control would highlight the label
- Fixed a bug where tabbing out of a select control wouldn't close it
- Fixed a bug where closing dropdowns wouldn't give focus back to the trigger
- Fixed a bug where type-to-select wasn't working after the first letter
- Fixed a bug where clicking on menu items and dividers would steal focus from the menu
- Fixed a bug where the color picker wouldn't parse uppercase values
- Removed the `no-footer` attribute from dialog and drawer (slot detection is automatic, so the attribute is not required)
- Removed `close-icon` slot from alert
- Replaced make-shift icon buttons with `<i2c-icon-button>` in alert, dialog, drawer, and tag
- Updated Stencil to 1.17.1
- Switched to jsDelivr for better CDN performance

## 2.0.0-beta.8

- Added the card component
- Added `--focus-ring` custom property to tab
- Fixed a bug where range tooltips didn't appear on iOS
- Fixed constructor bindings so they don't break the custom elements bundle
- Fixed tag color contrast to be AA compliant
- Fixed a bug that made it difficult to vertically align rating
- Fixed a bug where dropdowns would always close on mousedown when inside a shadow root
- Made tag text colors AA compliant
- Promoted badge to stable
- Refactored `:host` variables and moved non-display props to base elements
- Refactored event handler bindings to occur in `connectedCallback` instead of the constructor
- Refactored scroll locking logic to use `Set` instead of an array
- Updated the custom elements bundle documentation and added bundler examples
- Upgraded Stencil to 1.17.0-0 (next) to fix custom elements bundle

## 2.0.0-beta.7

- Added links to version 1 resources to the docs
- Added rating component
- Fixed a bug where some build files were missing
- Fixed clearable tags demo
- Fixed touch icon size in docs

## 2.0.0-beta.6

- Enabled the `dist-custom-elements-bundle` output target
- Fixed a bug where nested form controls were ignored in `<i2c-form>`

## 2.0.0-beta.5

- Fixed bug where `npm install` would fail due to postinstall script
- Removed unused dependency

## 2.0.0-beta.4

- Added `pill` variation to badges
- Fixed a bug where all badges had `pointer-events: none`
- Fixed `@since` props to show 2.0 instead of 1.0
- Fixed giant cursors in inputs in Safari
- Fixed color picker input width in Safari
- Fixed initial transitions for drawer, dialog, and popover consumers
- Fixed a bug where dialog, dropdown, and drawer would sometimes not transition in on the first open
- Fixed various documentation typos

## 2.0.0-beta.3

- Fix version in docs
- Remove custom elements bundle

## 2.0.0-beta.2

- Fix quick start and installation URLs
- Switch Docsify theme
- Update line heights tokens

## 2.0.0-beta.1

- Initial release
