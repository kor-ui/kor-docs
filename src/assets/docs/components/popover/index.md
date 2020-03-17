# Popover

Popovers are used to show extra content close to a target component. It is frequently triggered by components such as [Icons](components/icon) to provide a contextual set of [Menu Items](components/menu-item), for example.

[Label and Icon](components/popover#label-and-icon) • [Position](components/popover#position) • [Sticky](components/popover#sticky) • [Slots](components/popover#slots) • [API](components/popover#api)

---

## Position (optional)

By default, popovers are shown on the left side of its' target component. According to the use case and the layout of the app or website, the position can be adapted to be on the top, right or bottom instead.

<iframe src="./assets/docs/components/popover/position.html" height="480px"></iframe>

---

## Label and Icon (Optional)

If defined, a label is shown above the content. Keep labels short and descriptive of the content inside.

An icon can be defined to complement the label and provide additional information to the user or to help categorize content in a visual manner.

<iframe src="./assets/docs/components/popover/label-and-icon.html" height="480px"></iframe>

---

## Sticky (Optional)

Sticky popovers do not allow clicking outside in order to close it.

This variation is used in situations when the user is obliged to make a decision in order to continue, such as pressing a button or selecting an option.

<iframe src="./assets/docs/components/popover/sticky.html" height="480px"></iframe>

---

## Slots (Optional)

The **header** slot can be used for placing components that will remain stable above the content, such as [Tabs](components/tabs).

The **functions** slot can be used for hosting secondary functions, represented by components such as [Icons](components/icon).

The **footer** slot can be used for hosting the main actions related to the content, represented by components such as [Buttons](components/button).

<iframe src="./assets/docs/components/popover/slots.html" height="480px"></iframe>

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