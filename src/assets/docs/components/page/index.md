# Page

Intro

[Slots](components/page#slots) • [Theme](components/page#theme) • [Flex Direction](components/page#flex-direction) • [Flat](components/page#flat) • [API](components/page#api)

---

## Slots

Description

<iframe src="./assets/docs/components/page/slots.html" height="560px"></iframe>

---

## Theme

Description

<iframe src="./assets/docs/components/page/theme.html" height="560px"></iframe>


---

## Flex Direction

Description

<iframe src="./assets/docs/components/page/flex-direction.html" height="560px"></iframe>


---

## Flat

Description

<iframe src="./assets/docs/components/page/flat.html" height="560px"></iframe>

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