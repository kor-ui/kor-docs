# Input

[Type](components/input#type) • [Status](components/input#status) • [Icon](components/input#icon) • [Condensed](components/input#condensed) • [Disabled and Readonly](components/input#disabled-and-readonly) • [Functions Slot](components/input#functions-slot) • [API](components/input#api)

<iframe src="./assets/demos/components/input/main.html" height="440px"></iframe>

Intro 

---

## Type

Description

<iframe src="./assets/demos/components/input/type.html" height="440px"></iframe>

---

## Status

Description

<iframe src="./assets/demos/components/input/status.html" height="440px"></iframe>

---

## Icon

Description

<iframe src="./assets/demos/components/input/icon.html" height="440px"></iframe>

---

## Condensed

Description

<iframe src="./assets/demos/components/input/condensed.html" height="440px"></iframe>

---

## Disabled and Readonly

Description

<iframe src="./assets/demos/components/input/disabled-and-readonly.html" height="440px"></iframe>

---

## Functions Slot

Description

<iframe src="./assets/demos/components/input/functions-slot.html" height="440px"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label shown on top. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown before the label/value. |
| **`value`** | `String` | _undefined_ | If set, defines the value of the input. Changes upon user interaction. |
| **`type`** | `String` | `text` | Defines the type. Possible values are `text`, `number` and `select`. |
| **`status`** | `String` | _undefined_ | If set, Displays a status icon on the right side of the input. |
| **`pattern`** | `String` | _undefined_ | (If `type="number"` only) If set, defines a custom input pattern (see [full documentation](https://www.w3schools.com/TAGS/att_input_pattern.asp)). |
| **`min`** | `Number` | _undefined_ | (If `type="number"` only) If set, defines the minimum value accepted. |
| **`max`** | `Number` | _undefined_ | (If `type="number"` only) If set, defines the maximum value accepted. |
| **`step`** | `Number` | `1` | (If `type="number"` only) Defines the steps to skip when the user presses the left or right arrows. |
| **`condensed`** | `Boolean` | _undefined_ | If set to `true`, reduces the height of the input. The label is only shown if the value is _undefined_. |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, highlights the label and underline. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |
| **`readonly`** | `Boolean` | _undefined_ | If set to `true`, disables the input without reducing the opacity. |
| **`no-clear`** | `Boolean` | _undefined_ | If set to `true`, the clear icon and functionality will not be available. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`functions`** | Shown on the right side. |