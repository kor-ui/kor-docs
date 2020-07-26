# Stepper

Steppers are used to give an overview of where the user is in a linear process and how many steps are left in order to complete it.

[Label, Info and Icon](components/stepper#label,-info-and-icon-(optional)) • [Active and Disabled](components/stepper#active-and-disabled-(optional)) • [Orientation](components/stepper#orientation-(optional)) • [API](components/stepper#api)

---

## Label, Info and Icon (Optional)

If defined, a label is shown under the stepper bubble. Keep labels short and descriptive of the step being represented.

An info text can also be defined to provide further and more detailed information to the user, such as a short description of the step.

An icon can be defined to complement the label and provide additional information to the user or to help categorize content in a visual manner. If defined it is shown inside the circle, replacing the numerical index shown by default.

<iframe src="./assets/docs/components/stepper/label-info-and-icon.html" height="480px"></iframe>

```html
  <kor-stepper-item active></kor-stepper-item>
  <kor-stepper-item icon="directions_bike" active></kor-stepper-item>
  <kor-stepper-item label="Label" active></kor-stepper-item>
  <kor-stepper-item label="Icon and label" icon="directions_bike" info="" active></kor-stepper-item>
  <kor-stepper-item label="Icon, label and info" icon="directions_bike" info="Info text" active></kor-stepper-item>
```

---

## Active and Disabled (Optional)

An individual item of the stepper can be active to represent the stage at which the user is currently. Only one item should be active at a time.

Items can also be disabled in case the user is not supposed to click on it for navigating to that step.

<iframe src="./assets/docs/components/stepper/active-and-disabled.html"></iframe>

```html
<kor-stepper>
  <kor-stepper-item label="Disabled" info="Info text" disabled></kor-stepper-item>
  <kor-stepper-item label="Idle" info="Info text"></kor-stepper-item>
  <kor-stepper-item label="Active" info="Info text" active></kor-stepper-item>
</kor-stepper>
```

---

## Orientation (Optional)

By default, steppers are displayed in a horizontal orientation, but when using in vertical containers it could also be shown in a vertical orientation, with the items being aligned from top to bottom.

<iframe src="./assets/docs/components/stepper/orientation.html"></iframe>

```html
<kor-stepper orientation="vertical">
  <kor-stepper-item label="Disabled" info="Information text" disabled></kor-stepper-item>
  <kor-stepper-item label="Idle" info="Information text"></kor-stepper-item>
  <kor-stepper-item label="Active" info="Information text" active></kor-stepper-item>
</kor-stepper>
```

---

## API

### Properties

`kor-stepper`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`orientation`** | `String` | `horizontal` | Defines the orientation of the component. Possible values are `horizontal` and `vertical` |

`kor-stepper-item`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`info`** | `String` | _undefined_ | If set, defines the information text shown below the label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown instead of the index number. |
| **`index`** | `Number` | _set dinamically_ | Defines the index number shown inside the bubble (if `icon` is undefined). It is set dinamically by the component. |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. Only one item can be active at a time. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |

### Slots

`kor-stepper`

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Hosts `kor-stepper-item`s |