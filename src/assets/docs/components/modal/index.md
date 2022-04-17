# Modal

Modals are used to display information to the user in a focused manner.

They can appear on demand after a user interaction (e.g. to change settings) or be shown automatically (e.g. to display a critical error message). Avoid showing modals automatically as this could would disrupt the user's workflow.

When a modal is visible, the main content of the page gets overlaid with a transparent layer, therefore it should not be used when information on the page is still relevant to the user at that point.

[Label and Icon](<components/modal#label-and-icon-(optional)>) • [Sticky](<components/modal#sticky-(optional)>) • [Slots](components/modal#slots) • [API](components/modal#api)

---

## Label and Icon (Optional)

If defined, a label is shown above the content. Keep labels short and descriptive of the content inside.

An icon can be defined to complement the label and provide additional information to the user or to help categorize content in a visual manner.

<iframe src="./assets/docs/components/modal/label-and-icon.html" height="480px"></iframe>

```html
<kor-modal
  id="modal"
  visible
  icon="directions_bike"
  label="Label and Icon"
></kor-modal>
```

---

## Sticky (Optional)

Sticky modals do not display a close icon on its top-right corner and disabled the ability of clicking outside in order to close it.

This variation is used in situations when the user is obliged to make a decision in order to continue, such as pressing a button or selecting an option.

<iframe src="./assets/docs/components/modal/sticky.html" height="480px"></iframe>

```html
<kor-modal id="modal" visible sticky label="Sticky">
  <kor-button
    slot="footer"
    color="secondary"
    label="Close"
    onclick="document.querySelector('#modal').visible = false"
  ></kor-button>
</kor-modal>
```

---

## Slots

The **header** slot can be used for placing components that will remain stable above the content, such as [Tabs](components/tabs).

The **functions** slot can be used for hosting secondary functions, represented by components such as [Icons](components/icon).

The **footer** slot can be used for hosting the main actions related to the content, represented by components such as [Buttons](components/button).

<iframe src="./assets/docs/components/modal/slots.html" height="480px"></iframe>

```html
<kor-modal id="functions-and-footer" visible label="Functions and Footer">
  <kor-icon slot="functions" button icon="more_vert"></kor-icon>
  <kor-button
    slot="footer"
    color="secondary"
    label="Close"
    onclick="document.querySelector('#functions-and-footer').visible = false"
  ></kor-button>
</kor-modal>
<kor-modal id="header">
  <kor-tabs slot="header">
    <kor-tab-item label="Tab 1" active></kor-tab-item>
    <kor-tab-item label="Tab 2"></kor-tab-item>
    <kor-tab-item label="Tab 3"></kor-tab-item>
  </kor-tabs>
</kor-modal>
```

---

## API

### Properties

| Name                 | Type      | Default     | Description                                                                                                                             |
| :------------------- | :-------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **`label`**          | `String`  | _undefined_ | If set, defines the text label.                                                                                                         |
| **`icon`**           | `String`  | _undefined_ | If set, defines the icon shown close to the label.                                                                                      |
| **`flex-direction`** | `String`  | `column`    | Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`. |
| **`height`**         | `String`  | `320px`     | Defines the height of the container (not the overlay).                                                                                  |
| **`width`**          | `String`  | `320px`     | Defines the width of the container (not the overlay).                                                                                   |
| **`visible`**        | `Boolean` | `false`     | If set to `true`, displays the component on top of the screen.                                                                          |
| **`sticky`**         | `Boolean` | _undefined_ | If set to `true`, clicking on the background will not hide the component. The close icon will also not be displayed.                    |

### Slots

| Name            | Description                                                                                 |
| :-------------- | :------------------------------------------------------------------------------------------ |
| **_unnamed_**   | Displayed inside the content area.                                                          |
| **`header`**    | If used, the header slot is shown on top of the component, below the label (if any is set). |
| **`functions`** | Displayed on the right side of the label or header slot.                                    |
| **`footer`**    | Displayed below the content area.                                                           |

### CSS Properties

| Name                | Description                                            |
| :------------------ | :----------------------------------------------------- |
| **--body-gap**      | Defines the gap between elements in the `body` slot.   |
| **--header-gap**    | Defines the gap between elements in the `header` slot. |
| **--functions-gap** | Defines the gap between elements in the `body` slot.   |
| **--footer-gap**    | Defines the gap between elements in the `footer` slot. |
