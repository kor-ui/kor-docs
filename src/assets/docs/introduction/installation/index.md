# Installation

A few steps should be followed in order to include the library and start using the components. The distribution and update of packages are handled through [npm](https://www.npmjs.com/package/kor-ui).

---

## Installing the package

Install the library through npm:

```
npm install @kor-ui/kor --save
```

---

## Integration of Components

### Load the whole bundle

The most simple and common way of including the components into an application is by loading the core bundle:

```html
<!-- include whole js bundle in index.html -->
<script type="text/javascript" charset="utf-8" src="node_modules/@kor-ui/kor/index.js"></script>

<!-- include stylesheet in index.html -->
<link rel="stylesheet" type="text/css" href="node_modules/@kor-ui/kor/kor-styles.css">
```

*or*

```js
// include js bundle through js import instead
import '@kor-ui/kor' 
```

### Lazy load

As an alternative, you can also install and load individual components to reduce loading time (stylesheet still needs to be included in addition to the following steps):

```
npm install @kor-ui/button --save
npm install @kor-ui/accordion --save
```

```html
<!-- include components in html file -->
<script type="text/javascript" charset="utf-8" src="node_modules/@kor-ui/button/index.js"></script>
<script type="text/javascript" charset="utf-8" src="node_modules/@kor-ui/accordion/index.js"></script>
```

*or*

```js
// include individual components through js import
import { korButton } from '@kor-ui/button' 
import { korAccordion } from '@kor-ui/accordion' 
```

---

## Usage

Use the kor components as if they were native HTML tags. All components allow one and two-way data binding and the attributes fire an `attribute-changed` event when modified:

```html
<kor-button label="Hello World" color="secondary" disabled></kor-button>
<!-- data binding -->
<kor-accordion [label]="myVar" (expanded-changed)="myFunction()"></kor-accordion>
```