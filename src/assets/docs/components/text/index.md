# Text

[Size](components/text#size) • [Color](components/text#color) • [API](components/text#api)

<iframe src="./assets/docs/components/text/main.html"></iframe>

---

## Size

Description

<iframe src="./assets/docs/components/text/size.html"></iframe>

---

## Color

Description

<iframe src="./assets/docs/components/text/color.html"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`size`** | `String` | `body-1` | Defines the size, line height, font family and initial color of the text. Possible values are `header-1`, `header-2`, `body-1` and `body-1`, but custom styles can be set through css. |
| **`color`** | `String` | _undefined_ | If set, overwrites the initial color of the text. Possible values are `var(--text-1)` (90% neutral color), `var(--text-2)` (60% neutral color) and `var(--text-3)` (20% neutral color), but any custom RGB, RGBA, HEX or color variable can be passed to the property as value as well. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Container where plain text (and/or other elements) is written. |