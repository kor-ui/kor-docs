# Popover

[Label and Icon](components/popover#label-and-icon) • [Sticky](components/popover#sticky) • [Slots](components/popover#slots) • [API](components/popover#api)

<iframe src="./assets/docs/components/popover/main.html" height="440px"></iframe>

Intro 

---

## Label and Icon

Description

<iframe src="./assets/docs/components/popover/label-and-icon.html" height="440px"></iframe>

---

## Sticky

Description

<iframe src="./assets/docs/components/popover/sticky.html" height="440px"></iframe>

---

## Slots

Description

<iframe src="./assets/docs/components/popover/slots.html" height="440px"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown close to the label. |
| **`position`** | `String` | `left` | Defines the position of the component in the screen. Possible values are `left`, `right`, `top` and `bottom`. |
| **`flex-direction`** | `String` | `column` | Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`. |
| **`target`** | `String` | _undefined_ | Defines the DOM element to which the click event will be attached. It behaves identically to `querySelector`, which means tag names, IDs, classes and similar can be used (e.g. `#myEl`, `.myEl`, `kor-input[type='number']`). Please ensure the selector is unique. |
| **`visible`** | `Boolean` | `false` | If set to `true`, displays the component on top of the screen. |
| **`sticky`** | `Boolean` | _undefined_ | If set to `true`, clicking on the page will not hide the component. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`header`** | If used, the header slot is shown on top of the component, below the label (if any is set). |
| **`functions`** | Displayed on the right side of the label or header slot. |
| **`footer`** | Displayed below the content area. |