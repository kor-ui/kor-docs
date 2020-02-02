# Tag

Intro

[Label and Icon](components/tag#label-and-icon) • [Removable](components/tag#removable) • [Button](components/tag#button) • [API](components/tag#api)

---

## Label and Icon

Description

<iframe src="./assets/docs/components/tag/label-and-icon.html"></iframe>

---

## Removable

Description

<iframe src="./assets/docs/components/tag/removable.html"></iframe>

---

## Button

Description

<iframe src="./assets/docs/components/tag/button.html"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown besides the label. |
| **`button`** | `Boolean` | _undefined_ | If set to `true`, hover and click effects will be added. |
| **`removable`** | `Boolean` | _undefined_ | If set to `true`, a close icon is displayed. Clicking on it dispatches a `remove` event. |

### Events

| Name | Description |
| :-- | :-- |
| **`remove`** | Dispatched when clicking on the close icon (`removable` only). |