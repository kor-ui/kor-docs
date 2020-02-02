# Menu Item

Intro

[Label and Icon](components/menu-item#label-and-icon) • [Toggle](components/menu-item#toggle) • [Disabled](components/menu-item#disabled) • [Functions Slot](components/menu-item#functions-slot) • [API](components/menu-item#api)

---

## Label and Icon

Description

<iframe src="./assets/docs/components/menu-item/label-and-icon.html"></iframe>

---

## Toggle

Description

<iframe src="./assets/docs/components/menu-item/toggle.html"></iframe>

---

## Disabled

Description

<iframe src="./assets/docs/components/menu-item/disabled.html"></iframe>


---

## Functions Slot

Description

<iframe src="./assets/docs/components/menu-item/functions-slot.html"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | `Label` | Defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown before the label. |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. |
| **`toggle`** | `Boolean` | `true` | If set to `true`, clicking on the menu item will toggle the `active` property between `true` and `false`. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`functions`** | Shown on the right side. |