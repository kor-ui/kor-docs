# Input

Inputs are used to provide the user with a way of entering a value or selecting out of a list, which could be of different types.

[Type](components/input#type) • [Status](components/input#status) • [Icon](components/input#icon) • [Condensed](components/input#condensed) • [Disabled and Readonly](components/input#disabled-and-readonly) • [Functions Slot](components/input#functions-slot) • [API](components/input#api)

---

## Type (Required)

Depending on the type of value accepted by the app, the Input component can be set to only allow this type of value to be entered and to provide the user with specific ways of interaction.

- **Text** inputs only support strings entered through a keyboard (physical or virtual).
- **Number** inputs only support numbers entered also through a keyboard (physical or virtual). Minimum and maximum values as well as steps can be customized depending on the use case.
- **Select** inputs support string or numbers selected from a pre-defined list through mouse interactions (or touch).

<iframe src="./assets/docs/components/input/type.html" height="480px"></iframe>

---

## Status (Optional)

A status can be assigned to an input to indicate, for example, if a validation has failed (`error`) or succeeded (`success`), or if special attention is required (`warning`).

<iframe src="./assets/docs/components/input/status.html" height="480px"></iframe>

---

## Icon (Optional)

If defined, an icon is displayed on the left side of the input, before the label and value. Icons are useful for visually communicating the meaning of the input (e.g. 'email' or 'password').

<iframe src="./assets/docs/components/input/icon.html" height="480px"></iframe>

---

## Condensed (Optional)

When used in contexts where vertical space is limited, inputs can be set to have a condensed size, which will reduce its height and hide its' label if the value is not empty.

<iframe src="./assets/docs/components/input/condensed.html" height="480px"></iframe>

---

## Disabled and Readonly (Optional)

If Inputs are not intended to be edited by the user, they can be set to be disabled or read-only.

- **Disabled** inputs are used when the user can do something to enable editing.
- **Readonly** inputs are used when the value should be read by the user but not necessarily edited.

<iframe src="./assets/docs/components/input/disabled-and-readonly.html" height="480px"></iframe>

---

## Functions Slot (Optional)

Functions related directly to the Input (e.g. 'paste', 'undo') can be placed on the right side of it, usually through the use of [Icons]('./components/icon').

<iframe src="./assets/docs/components/input/functions-slot.html" height="480px"></iframe>

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