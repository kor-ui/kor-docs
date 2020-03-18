# Page

The Page component is used to define the main layout and color theme of an app or website.

[Slots](components/page#slots) • [Theme](components/page#theme) • [Flex Direction](components/page#flex-direction) • [Flat](components/page#flat) • [API](components/page#api)

---

## Slots (Optional)

The **top** slot of a page usually hosts components such as [App Bar](components/app-bar) or [Nav Bar](components/nav-bar).
The **left** and **right** slot of a page usually hosts a side [Pane](components/pane).
The **bottom** slot of a page is usually used in mobile apps or websites to host a [Nav Bar](components/nav-bar).

<iframe src="./assets/docs/components/page/slots.html" height="560px"></iframe>

```html
<kor-page>
  <kor-app-bar slot="top"></kor-app-bar>
  <kor-nav-bar slot="top"></kor-nav-bar>
  <kor-pane slot="left"></kor-pane>
  <kor-card></kor-card>
  <kor-pane slot="right"></kor-pane>
</kor-page>
```

---

## Theme (Optional)

The theme of a page defines the color scheem applied to all components inside it. It can be light, dark or any other [Custom Theme](introduction/custom-themes).

<iframe src="./assets/docs/components/page/theme.html" height="560px"></iframe>

```html
<kor-page theme="light">
  <kor-app-bar slot="top" mobile label="Light"></kor-app-bar>
  <kor-card></kor-card>
</kor-page>

<kor-page theme="dark">
  <kor-app-bar slot="top" mobile label="Dark"></kor-app-bar>
  <kor-card></kor-card>
</kor-page>
```

---

## Flex Direction (Required)

The contents of a card can be displayed either vertically (top to bottom) or vertically (left to right) depending on the flex direction defined.

<iframe src="./assets/docs/components/page/flex-direction.html" height="560px"></iframe>

```html
<kor-page>
  <kor-app-bar slot="top" mobile label="Flex Direction Row"></kor-app-bar>
  <kor-icon icon="save"></kor-icon>
  <kor-icon icon="save"></kor-icon>
  <kor-icon icon="save"></kor-icon>
  <kor-icon icon="save"></kor-icon>
</kor-page>

<kor-page flex-direction="column">
  <kor-app-bar slot="top" mobile label="Flex Direction Column"></kor-app-bar>
  <kor-icon icon="save"></kor-icon>
  <kor-icon icon="save"></kor-icon>
  <kor-icon icon="save"></kor-icon>
  <kor-icon icon="save"></kor-icon>
</kor-page>
```

---

## Flat (Optional)

Flat pages have a lighter background color, allowing content to be placed directly over it without the need of using a container such as a [Card](components/card).

<iframe src="./assets/docs/components/page/flat.html" height="560px"></iframe>

```html
<kor-page flex-direction="column">
  <kor-app-bar slot="top" mobile label="Not Flat"></kor-app-bar>
  <kor-card>
    <kor-menu-item></kor-menu-item>
    <kor-menu-item></kor-menu-item>
    <kor-menu-item></kor-menu-item>
  </kor-card>
</kor-page>

<kor-page flat flex-direction="column">
  <kor-app-bar slot="top" mobile label="Flat"></kor-app-bar>
  <kor-grid columns="1" fit-content>
    <kor-menu-item></kor-menu-item>
    <kor-menu-item></kor-menu-item>
    <kor-menu-item></kor-menu-item>
  </kor-grid>
</kor-page>
```

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`theme`** | `String` | _undefined_ | Defines the color theme of the page. Possible values are `dark` and `light`. |
| **`flex-direction`** | `String` | `row` | Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`. |
| **`flat`** | `Boolean` | _undefined_ | If set to `true`, the page background will be flat, without the need to use card as containers for the content. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | The main content area. |
| **`top`** | Shown on the top. Hosts components such as `kor-app-bar` and `kor-nav-bar`. |
| **`bottom`** | Shown on the bottom. Hosts components such as `kor-nav-bar`. |
| **`left`** | Shown on the left side. Hosts components such as `kor-pane`. |
| **`right`** | Shown on the right side. Hosts components such as `kor-pane`. |