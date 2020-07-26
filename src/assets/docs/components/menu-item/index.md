# Menu Item

Intro

[Label and Icon](components/menu-item#label-(required)-and-icon-(optional)) • [Toggle](components/menu-item#toggle-(optional)) • [Disabled](components/menu-item#disabled-(optional)) • [Functions Slot](components/menu-item#functions-slot-(optional)) • [API](components/menu-item#api)

---

## Label (Required) and Icon (Optional)

The label is shown inside the menu item and is the main element to describe the function of the item to the user. Keep labels short and descriptive of the content inside.

An icon can be defined to complement the label and provide additional information to the user or to help categorize content in a visual manner.

<iframe src="./assets/docs/components/menu-item/label-and-icon.html"></iframe>

```html
<kor-menu-item label="Label only"></kor-menu-item>
<kor-menu-item icon="save" label="Label and icon"></kor-menu-item>
<kor-menu-item icon="save" label="Label and icon disabled" disabled></kor-menu-item>
<kor-menu-item icon="save" label="This is a quite long label that gets truncated because of its length"></kor-menu-item>
```

---

## Toggle (Optional)

Toggle Menu Items are used when a function can be set to on and off. Clicking or pressing the item will toggle the opposite state (on becomes off and vice versa).

<iframe src="./assets/docs/components/menu-item/toggle.html"></iframe>

```html
<kor-menu-item label="Toggle"></kor-menu-item>
<kor-menu-item label="No Toggle" toggle="false"></kor-menu-item>
```

---

## Disabled (Optional)

If a Menu Item does not allow user interactions, it can be set to be disabled. Disabled states should be used temporarily if a condition is not met.

<iframe src="./assets/docs/components/menu-item/disabled.html"></iframe>

```html
<kor-menu-item disabled active label="Disabled active"></kor-menu-item>
<kor-menu-item disabled label="Disabled label only"></kor-menu-item>
<kor-menu-item disabled icon="save" label="Disabled label and icon"></kor-menu-item>
<kor-menu-item disabled icon="save" label="Disabled label, icon and functions">
  <kor-icon icon="more_vert" button slot="functions"></kor-icon>
</kor-menu-item>
```

---

## Functions Slot (Optional)

Functions related directly to the Menu Item (e.g. 'save', 'share') can be placed on the right side of it, usually through the use of [Icons](components/icon).

<iframe src="./assets/docs/components/menu-item/functions-slot.html"></iframe>

```html
<kor-menu-item label="Functions slot">
  <kor-icon icon="more_vert" button slot="functions"></kor-icon>
</kor-menu-item>
<kor-menu-item label="Functions slot">
  <kor-icon icon="launch" button slot="functions"></kor-icon>
  <kor-icon icon="more_vert" button slot="functions"></kor-icon>
</kor-menu-item>
<kor-menu-item label="Functions slot">
  <kor-text color="var(--text-2)" slot="functions">Jan 22, 2029</kor-text>
</kor-menu-item>
```

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | `Label` | Defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown before the label. |
| **`active`** | `Boolean` | _undefined_ | If set to `true`, a highlight style gets applied. |
| **`toggle`** | `Boolean` | `true` | If set to `true`, clicking on the component will toggle the `active` property between `true` and `false`. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`functions`** | Shown on the right side. |