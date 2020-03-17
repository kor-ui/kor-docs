# Radio Button

<iframe src="./assets/docs/components/radio-button/main.html"></iframe>

Radio Buttons provide the user the possibility of choosing one option out of a list of pre-defined entries. Radio Buttons are mutually exclusive and do not allow multiple selection within the same group (use [Checkboxes](components/checkbox) in these cases instead).

[Label](components/radio-button#label) • [API](components/radio-button#api)

---

## Label (Required)

The label of a Radio Button describes the option being selected. Keep labels short and descriptive of the option.

<iframe src="./assets/docs/components/radio-button/label.html"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. Only one item can be active at a time. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |