# Installation

A few steps should be followed in order to include the library and start using the components. The distribution and update of packages are handled through [npm](https://www.npmjs.com/package/kor-ui).

---

## Install the node module

Install the library through npm:

```
npm install @kor-ui/kor --save
```

---

## Integration of Components

### Load the whole bundle

The most simple and common way of including the components into an application is by loading the core bundle:


```js
// include bundle through module import
import '@kor-ui/kor'
// if using JS, css can also be imported. if using TS, use html stylesheet as shown below
import '@kor-ui/kor/kor-styles.css'
```

*or*

```html
<!-- include bundle and styles in html file -->
<script type="text/javascript" charset="utf-8" src="node_modules/@kor-ui/kor/index.js"></script>
<link rel="stylesheet" type="text/css" href="node_modules/@kor-ui/kor/kor-styles.css">
```

### Load single components

As an alternative, you can also load individual components to reduce loading time. Be aware that components are inter-dependent and should be imported independently:

```js
// include individual components and styles through module import
import '@kor-ui/kor/components/button'
import '@kor-ui/kor/components/text'
// if using JS, css can also be imported. if using TS, use html stylesheet as shown below
import '@kor-ui/kor/kor-styles.css'
```

*or*

```html
<!-- include single components and styles in html file -->
<script type="text/javascript" charset="utf-8" src="node_modules/@kor-ui/kor/components/button/index.js"></script>
<script type="text/javascript" charset="utf-8" src="node_modules/@kor-ui/kor/components/text/index.js"></script>
<link rel="stylesheet" type="text/css" href="node_modules/@kor-ui/kor/kor-styles.css">
```

---

## Usage

Use the kor components as if they were native HTML tags. All components allow one and two-way data binding and the attributes fire an `<attribute>-changed` event when modified:

```html
<kor-button label="Hello World" color="secondary" disabled></kor-button>
<!-- data binding -->
<kor-accordion [label]="myVar" (expanded-changed)="myFunction()"></kor-accordion>
```