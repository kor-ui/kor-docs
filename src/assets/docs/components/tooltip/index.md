# Tooltip

Tooltips are used to provide additional information to the user related to another element on the screen. It is usually triggered by components such as [Icons](components/icon) to help describing an action in a textual manner.

[Position](components/tooltip#position) • [Label and Icon](components/tooltip#label-and-icon) • [Slots](components/tooltip#slots) • [API](components/tooltip#api)

---

## Position (Optional)

By default, tooltips are shown on the left side of its' target component. According to the use case and the layout of the app or website, the position can be adapted to be on the top, right or bottom instead.

<iframe src="./assets/docs/components/tooltip/position.html" height="480px"></iframe>

```html
<kor-tooltip target="#left" position="left" label="Left tooltip">
  This is a left tooltip.
</kor-tooltip>
<kor-tooltip target="#right" position="right" label="Right tooltip">
  This is a right tooltip.
</kor-tooltip>
<kor-tooltip target="#top" position="top" label="Top tooltip">
  This is a top tooltip.
</kor-tooltip>
<kor-tooltip target="#bottom" position="bottom" label="Bottom tooltip">
  This is a bottom tooltip.
</kor-tooltip>
```

---

## Label and Icon (Optional)

If defined, a label is shown above the content. Keep labels short and descriptive of the content inside.

An icon can be defined to complement the label and provide additional information to the user or to help categorize content in a visual manner.

<iframe src="./assets/docs/components/tooltip/label-and-icon.html" height="480px"></iframe>

```html
<kor-tooltip target="#button" position="top" icon="directions_bike" label="Label and Icon"></kor-tooltip>
```

---

## Slots (Optional)

The **header** slot can be used for placing components that will remain stable above the content, such as [Tabs](components/tabs).

The **functions** slot can be used for hosting secondary functions, represented by components such as [Icons](components/icon).

The **footer** slot can be used for hosting the main actions related to the content, represented by components such as [Buttons](components/button).

<iframe src="./assets/docs/components/tooltip/slots.html" height="480px"></iframe>

```html
<kor-tooltip target="#functions-and-footer" position="left" icon="directions_bike" label="Functions and Footer">
  <kor-icon slot="functions" button icon="more_vert"></kor-icon slot="functions">
  This is a tooltip with content in the functions and footer slots.
  <kor-button slot="footer" color="secondary" label="Close" onclick="event.target.parentElement.visible = false"></kor-button>
</kor-tooltip>
<kor-tooltip target="#header" position="right">
  <kor-tabs slot="header">
    <kor-tab-item label="Tab 1" active></kor-tab-item>
    <kor-tab-item label="Tab 2"></kor-tab-item>
  </kor-tabs>
  This is a tooltip with content in the header slot.
</kor-tooltip>
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
| **`target`** | `String` | _undefined_ | Defines the DOM element to which the mouseover event will be attached. It behaves identically to `querySelector`, which means tag names, IDs, classes and similar can be used (e.g. `#myEl`, `.myEl`, `kor-input[type='number']`). Please ensure the selector is unique. |
| **`visible`** | `Boolean` | `false` | If set to `true`, displays the component on top of the screen. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`header`** | If used, the header slot is shown on top of the component, below the label (if any is set). |
| **`functions`** | Displayed on the right side of the label or header slot. |
| **`footer`** | Displayed below the content area. |