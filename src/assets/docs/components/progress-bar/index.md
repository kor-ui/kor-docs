# Progress Bar

[Radial](components/progress-bar#radial) • [Label, Info and Progress](components/progress-bar#label,-info-and-progress) • [Status](components/progress-bar#status) • [Color](components/progress-bar#color) • [API](components/progress-bar#api)

<iframe src="./assets/docs/components/progress-bar/main.html"></iframe>

---

## Radial

Description

<iframe src="./assets/docs/components/progress-bar/radial.html"></iframe>

---

## Label, Info and Progress

Description

<iframe src="./assets/docs/components/progress-bar/label-info-and-progress.html"></iframe>

---

## Status

Description

<iframe src="./assets/docs/components/progress-bar/status.html"></iframe>

---

## Color

Description

<iframe src="./assets/docs/components/progress-bar/color.html"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label shown above the bar. |
| **`info`** | `String` | _undefined_ | If set, defines the info text shown below of the bar. |
| **`value`** | `Number` | _undefined_ | Defines the value of the bar. Must be a number from `0` to `100`. |
| **`status`** | `String` | _undefined_ | If set, shows a status icon besides the information text. Possible values are `success`, `warning` and `error`. |
| **`color`** | `String` | _undefined_ | If set, defines the color of the bar. |
| **`size`** | `String` | `m` | (Only if `radial` is `true`) Defines the size of the bar. |
| **`radial`** | `Boolean` | _undefined_ | If set to `true`, the bar will become a circle instead of a linear bar. |
| **`show-progress`** | `Boolean` | _undefined_ | If set to `true`, the `value` (in %) will be visible. |