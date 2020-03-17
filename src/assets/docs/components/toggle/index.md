# Toggle

Toggles are used to turn a functionality ON or OFF. It should not be used in mutually exclusive groups, for these cases consider using [Radio Buttons](components/radio-button) instead.

[Label](components/toggle#label) • [API](components/toggle#api)

---

## Label (Required)

The label of a Toggled describes the funcionality being toggle. Keep labels short and descriptive of the functionality represented.

<iframe src="./assets/docs/components/toggle/label.html"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |