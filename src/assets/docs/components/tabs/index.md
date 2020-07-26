# Tabs

Tabs are used for navigating between pages or switching the contents of a container. It is usually used inside components such as [App Bar](components/app-bar), [Nav Bar](components/nav-bar), [Panes](components/pane) and [Cards](components/card).

[Label and Icon](components/tabs#label-and-icon-(optirequiredonal)) • [Active and Disabled](components/stepper#active-and-disabled-(optional)) • [Orientation](components/tabs#orientation-(required)) • [API](components/tabs#api)

---

## Label and Icon (Required)

Tab items should have either a label or an icon defined (or both at the same time). Labels and icons are used to represent the page or content to which the user would navigate upon clicking on it.

<iframe src="./assets/docs/components/tabs/label-and-icon.html"></iframe>

```html
<kor-tab-item icon="directions_bike" style="width: fit-content" active></kor-tab-item>
<kor-tab-item label="Label" style="width: fit-content" active></kor-tab-item>
<kor-tab-item label="Icon and label" icon="directions_bike" active style="width: fit-content"></kor-tab-item>
```

---

## Active and Disabled (Optional)

An individual item of a Tabs group can be active to represent the page or content currently displayed to the user. Only one item should be active at a time.

Items can also be disabled in case the user is not supposed to click on it for navigating to that page.

<iframe src="./assets/docs/components/tabs/active-and-disabled.html"></iframe>

```html
<kor-tabs style="width: fit-content;">
  <kor-tab-item label="Disabled" disabled></kor-tab-item>
  <kor-tab-item label="Idle"></kor-tab-item>
  <kor-tab-item label="Active" active></kor-tab-item>
</kor-tabs>
```

---

## Orientation (Required)

By default, Tabs are displayed in a horizontal orientation, but when using in vertical containers it could also be shown in a vertical orientation, with the items being aligned from top to bottom.

<iframe src="./assets/docs/components/tabs/orientation.html"></iframe>

```html
<kor-tabs orientation="vertical">
  <kor-tab-item label="Disabled" disabled></kor-tab-item>
  <kor-tab-item label="Idle"></kor-tab-item>
  <kor-tab-item label="Active" active></kor-tab-item>
</kor-tabs>
<kor-tabs orientation="vertical">
  <kor-tab-item icon="directions_bike" disabled></kor-tab-item>
  <kor-tab-item icon="directions_car"></kor-tab-item>
  <kor-tab-item icon="train" active></kor-tab-item>
</kor-tabs>
```

---

## API

### Properties

`kor-tabs`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`orientation`** | `String` | `horizontal` | Defines the orientation of the component. Possible values are `horizontal` and `vertical` |

`kor-tab-item`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown above the label (if set). |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. Only one item can be active at a time. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |

### Slots

`kor-tabs`

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Hosts `kor-tab-item`s |