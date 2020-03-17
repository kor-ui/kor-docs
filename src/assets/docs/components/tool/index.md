# Tool

Tools are used to trigger or toggle a functionality upon mouse or touch interaction performed by the user.

[Label](components/tool#label) • [API](components/tool#api)

---

## Label and Icon (Required)

Tools should have either a label or an icon defined (or both at the same time). Labels and icons are used to represent the functionality triggered or toggled by the user upon clicking on it.

<iframe src="./assets/docs/components/tool/label-and-icon.html"></iframe>

---

## Toggle (Optional)

Toggle Tools are used when a functionality can be set to on and off. Clicking or pressing the Tool will toggle the opposite state (on becomes off and vice versa).

<iframe src="./assets/docs/components/tool/toggle.html"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown above the text label (if set). |
| **`size`** | `String` | `m` | Defines the size of the component. Possible values are `s` and `m`. |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. |
| **`toggle`** | `Boolean` | `true` | If set to `true`, clicking on the menu item will toggle the `active` property between `true` and `false`. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |