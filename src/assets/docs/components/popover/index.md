# Popover

Popovers are used to show extra content close to a target component. It is frequently triggered by components such as [Icons](components/icon) to provide a contextual set of [Menu Items](components/menu-item), for example.

[Position](components/popover#position-(optional)) • [Label and Icon](components/popover#label-and-icon-(optional)) • [Sticky](components/popover#sticky-(optional)) • [Slots](components/popover#slots) • [API](components/popover#api)

---

## Position (optional)

By default, popovers are shown on the left side of its target component. According to the use case and the layout of the app or website, the position can be adapted to be on the top, right or bottom instead.

<iframe src="./assets/docs/components/popover/position.html" height="480px"></iframe>

```html
<kor-popover target="#left" position="left" label="Left Popover">
  This is a left popover.
</kor-popover>
<kor-popover target="#right" position="right" label="Right Popover">
  This is a right popover.
</kor-popover>
<kor-popover target="#top" position="top" label="Top Popover">
  This is a top popover.
</kor-popover>
<kor-popover target="#bottom" position="bottom" label="Bottom Popover">
  This is a bottom popover.
</kor-popover>
```

---

## Label and Icon (Optional)

If defined, a label is shown above the content. Keep labels short and descriptive of the content inside.

An icon can be defined to complement the label and provide additional information to the user or to help categorize content in a visual manner.

<iframe src="./assets/docs/components/popover/label-and-icon.html" height="480px"></iframe>

```html
<kor-popover target="#button" position="top" icon="directions_bike" label="Label and Icon"></kor-popover>
```

---

## Sticky (Optional)

Sticky popovers do not allow clicking outside in order to close it.

This variation is used in situations when the user is obliged to make a decision in order to continue, such as pressing a button or selecting an option.

<iframe src="./assets/docs/components/popover/sticky.html" height="480px"></iframe>

```html
<kor-popover target="#button" position="top" label="Sticky" sticky>
  This is a sticky popover.
  <kor-button slot="footer" color="secondary" label="Close" onclick="event.target.parentElement.visible = false"></kor-button>
</kor-popover>
```

---

## Slots

The **header** slot can be used for placing components that will remain stable above the content, such as [Tabs](components/tabs).

The **functions** slot can be used for hosting secondary functions, represented by components such as [Icons](components/icon).

The **footer** slot can be used for hosting the main actions related to the content, represented by components such as [Buttons](components/button).

<iframe src="./assets/docs/components/popover/slots.html" height="480px"></iframe>

```html
<kor-popover target="#functions-and-footer" position="left" icon="directions_bike" label="Functions and Footer">
  <kor-icon slot="functions" button icon="more_vert"></kor-icon slot="functions">
  This is a popover with content in the functions and footer slots.
  <kor-button slot="footer" color="secondary" label="Close" onclick="event.target.parentElement.visible = false"></kor-button>
</kor-popover>
<kor-popover target="#header" position="right">
  <kor-tabs slot="header">
    <kor-tab-item label="Tab 1" active></kor-tab-item>
    <kor-tab-item label="Tab 2"></kor-tab-item>
  </kor-tabs>
  This is a popover with content in the header slot.
</kor-popover>
```

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown close to the label. |
| **`position`** | `String` | `left` | Defines the position of the component in the screen. Possible values are `left`, `right`, `top` and `bottom`. |
| **`flex-direction`** | `String` | `column` | Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`. |
| **`target`** | `String` | _undefined_ | Defines the DOM element to which the click event will be attached. It behaves identically to `querySelector`, which means tag names, IDs, classes and similar can be used (e.g. `#myEl`, `.myEl`, `kor-input[type='number']`). Please ensure the selector is unique. |
| **`visible`** | `Boolean` | `false` | If set to `true`, displays the component on top of the screen. |
| **`sticky`** | `Boolean` | _undefined_ | If set to `true`, clicking on the page will not hide the component. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`header`** | If used, the header slot is shown on top of the component, below the label (if any is set). |
| **`functions`** | Displayed on the right side of the label or header slot. |
| **`footer`** | Displayed below the content area. |