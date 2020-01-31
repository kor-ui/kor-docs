# Drawer

[Label and Icon](components/drawer#label-and-icon) • [Sticky](components/drawer#sticky) • [Slots](components/drawer#slots) • [Mobile](components/drawer#mobile) • [API](components/drawer#api)

<iframe src="./assets/demos/drawer/main.html" height="440px"></iframe>

Intro 

---

## Label and Icon

Description

<iframe src="./assets/demos/drawer/label-and-icon.html" height="440px"></iframe>

---

## Sticky

Description

<iframe src="./assets/demos/drawer/sticky.html" height="440px"></iframe>

---

## Slots

Description

<iframe src="./assets/demos/drawer/slots.html" height="440px"></iframe>

---

## Mobile

Description

<iframe src="./assets/demos/drawer/mobile.html" height="640px"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown close to the label. |
| **`position`** | `String` | `left` | Defines the position of the component in the screen. Possible values are `left`, `right`, `top` and `bottom`. |
| **`flex-direction`** | `String` | `column` | Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`. |
| **`height`** | `String` | `320px` | Defines the height of the container (not the overlay). |
| **`width`** | `String` | `320px` | Defines the width of the container (not the overlay). |
| **`visible`** | `Boolean` | `false` | If set to `true`, displays the component on top of the screen. |
| **`sticky`** | `Boolean` | _undefined_ | If set to `true`, clicking on the background will not hide the component. The close icon will also not be displayed. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`header`** | If used, the header slot is shown on top of the component, below the label (if any is set). |
| **`functions`** | Displayed on the right side of the label or header slot. |
| **`footer`** | Displayed below the content area. |