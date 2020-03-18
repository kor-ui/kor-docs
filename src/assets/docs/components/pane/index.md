# Pane

Panes are used on side slots of a [Page](components/page) to host side controls or vertical navigation. 

Components usually used inside panes include [Accordions](components/accordion), [Menu Items](components/menu-item) and [Inputs](components/input).

[Label and Icon](components/pane#label-and-icon) • [Slots](components/pane#slots) • [API](components/pane#api)

---

## Label and Icon (Optional)

If defined, a label is shown above the content. Keep labels short and descriptive of the content inside.

An icon can be defined to complement the label and provide additional information to the user or to help categorize content in a visual manner.

<iframe src="./assets/docs/components/pane/label-and-icon.html" height="560px"></iframe>

```html
<kor-page>
  <kor-app-bar slot="top"></kor-app-bar>
  <kor-pane slot="left" icon="directions_bike" label="Label and Icon"></kor-pane>
</kor-page>
```

---

## Slots (Optional)

The **header** slot can be used for placing components that will remain stable above the content, such as [Tabs](components/tabs).

The **functions** slot can be used for hosting secondary functions, represented by components such as [Icons](components/icon).

The **footer** slot can be used for hosting the main actions related to the content, represented by components such as [Buttons](components/button).

<iframe src="./assets/docs/components/pane/slots.html" height="560px"></iframe>

```html
<kor-page>
  <kor-app-bar slot="top"></kor-app-bar>
  <kor-pane slot="left" label="Functions and Footer">
    <kor-icon slot="functions" button icon="more_vert"></kor-icon slot="functions">
    <kor-button slot="footer" onclick="document.querySelector('#functions-and-footer').visible = false"></kor-button>
  </kor-pane>
  <kor-pane slot="right">
    <kor-tabs slot="header">
      <kor-tab-item label="Tab 1" active></kor-tab-item>
      <kor-tab-item label="Tab 2"></kor-tab-item>
      <kor-tab-item label="Tab 3"></kor-tab-item>
    </kor-tabs>
  </kor-pane>
</kor-page>
```

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown close to the label. |
| **`flex-direction`** | `String` | `column` | Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`. |
| **`size`** | `String` | `l` | Defines the size (width) of the component. Possible values are `s` (80px), `m` (120px) and `l`(320px). |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`header`** | If used, the header slot is shown on top of the component, below the label (if any is set). |
| **`functions`** | Displayed on the right side of the label or header slot. |
| **`footer`** | Displayed below the content area. |