# Drawer

Drawers are used to provide on-demand content to the user. They are specially used in situations where space is restricted on the page to hide less relevant information, such as in mobile apps for filtering options or menus.

[Label and Icon](<components/drawer#label-and-icon-(optional)>) • [Sticky](<components/drawer#sticky-(optional)>) • [Slots](components/drawer#slots) • [Mobile](components/drawer#mobile) • [API](components/drawer#api)

---

## Label and Icon (Optional)

If defined, a label is shown above the content. Keep labels short and descriptive of the content inside.

An icon can be defined to complement the label and provide additional information to the user or to help categorize content in a visual manner.

<iframe src="./assets/docs/components/drawer/label-and-icon.html" height="480px"></iframe>

```html
<kor-drawer visible icon="directions_bike" label="Label and Icon"></kor-drawer>
```

---

## Sticky (Optional)

Sticky drawers do not display a close icon on its top-right corner and disabled the ability of clicking outside in order to close it.

This variation is used in situations when the user is obliged to make a decision in order to continue, such as pressing a button or selecting and option.

<iframe src="./assets/docs/components/drawer/sticky.html" height="480px"></iframe>

```html
<kor-drawer id="drawer" visible sticky label="Sticky">
  <kor-button
    slot="footer"
    color="secondary"
    label="Close"
    onclick="document.querySelector('#drawer').visible = false"
  ></kor-button>
</kor-drawer>
```

---

## Slots

The **header** slot can be used for placing components that will remain stable above the content, such as [Tabs](components/tabs).

The **functions** slot can be used for hosting secondary functions, represented by components such as [Icons](components/icon).

The **footer** slot can be used for hosting the main actions related to the content, represented by components such as [Buttons](components/button).

<iframe src="./assets/docs/components/drawer/slots.html" height="480px"></iframe>

```html
<kor-drawer id="functions-and-footer" visible label="Functions and Footer">
  <kor-icon slot="functions" button icon="more_vert"></kor-icon>
  <kor-button slot="footer" color="secondary" label="Close" onclick="document.querySelector('#functions-and-footer').visible = false"></kor-button>
</kor-drawer>
<kor-drawer id="header">
  <kor-tabs slot="header">
    <kor-tab-item label="Tab 1" active></kor-tab-item>
    <kor-tab-item label="Tab 2"></kor-tab-item>
    <kor-tab-item label="Tab 3"></kor-tab-item>
  </kor-tabs>
</kor-drawer>
```

---

## Mobile

Drawers are commonly used in mobile apps or websites for hosting content that is not fundamental to the main task being performed, such as for sorting and filtering items, displaying menus or user information.

Drawers can be displayed in top, bottom, left or right positions.

<iframe src="./assets/docs/components/drawer/mobile.html" height="640px"></iframe>

```html
<kor-page style="transform: perspective(1px); overflow: hidden;">
  <kor-app-bar slot="top" mobile label="Mobile">
    <kor-avatar
      slot="left"
      onclick="document.querySelector('#left').visible = true"
    ></kor-avatar>
    <kor-icon
      button
      icon="filter_list"
      slot="right"
      onclick="document.querySelector('#bottom').visible = true"
    ></kor-icon>
  </kor-app-bar>
  <kor-drawer id="left" visible width="calc(100% - 40px)"></kor-drawer>
  <kor-drawer id="bottom" position="bottom"></kor-drawer>
</kor-page>
```

---

## API

### Properties

| Name                 | Type      | Default     | Description                                                                                                                             |
| :------------------- | :-------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **`label`**          | `String`  | _undefined_ | If set, defines the text label.                                                                                                         |
| **`icon`**           | `String`  | _undefined_ | If set, defines the icon shown close to the label.                                                                                      |
| **`position`**       | `String`  | `left`      | Defines the position of the component in the screen. Possible values are `left`, `right`, `top` and `bottom`.                           |
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
