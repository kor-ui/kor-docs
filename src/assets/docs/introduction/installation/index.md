# Installation

A few steps should be followed in order to include the library and start using the components. The distribution and update of packages are handled through [npm](https://www.npmjs.com/package/kor-ui).

---

## Installing the package

Install the library in your project's folder:

```
npm install kor-ui
```

---

## Integration of Components

There are three ways of integrating the components into your app. You can follow any of the three following methods:

1. Include the JS bundle and CSS styles directly in your `index.html` file:

```html
<script type="text/javascript" charset="utf-8" src="node_modules/kor-ui/kor.js"></script>
<link rel="stylesheet" type="text/css" href="node_modules/kor-ui/kor-styles.css">
```

2. Alternatively, import the ES module directly:

```js
import { kor } from 'kor-ui/kor.js' 
```

3. If you are using Angular, you can instead include the assets in your `angular.json` file:

```json
"styles": [
    // ...    
    "node_modules/kor-ui/kor-styles.css"
],
"scripts": [
    // ...
    "node_modules/kor-ui/kor.js"
]
```

---

## Usage

Use the kor components as if they were native HTML tags. All components allow one and two-way data binding and the attributes fire an `attribute-changed` event when modified:

```html
<kor-button label="Hello World" color="secondary" disabled></kor-button>
<!-- data binding -->
<kor-accordion [label]="myVar" (expanded-changed)="myFunction()"></kor-accordion>
```