# Card

[Label and Icon](components/card#label-and-icon) • [Image](components/card#image) • [Flex Direction](components/card#flex-direction) • [Flat](components/card#flat) • [Slots](components/card#slots) • [API](components/card#api)

<iframe src="./assets/demos/components/card/main.html" height="440px"></iframe>

Intro 

---

## Label and Icon

Description

<iframe src="./assets/demos/components/card/label-and-icon.html" height="440px"></iframe>

---

## Image

Description

<iframe src="./assets/demos/components/card/image.html" height="440px"></iframe>

---

## Flex Direction

Description

<iframe src="./assets/demos/components/card/flex-direction.html" height="440px"></iframe>

---

## Flat

Description

<iframe src="./assets/demos/components/card/flat.html" height="440px"></iframe>

---

## Slots

Description

<iframe src="./assets/demos/components/card/slots.html" height="440px"></iframe>

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label. |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown close to the label. |
| **`image`** | `String` | _undefined_ | If set, defines the image shown on top of the card. |
| **`flex-direction`** | `String` | `column` | Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`. |
| **`flat`** | `Boolean` | _undefined_ | If set, background, shadows and external padding are not shown. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | Displayed inside the content area. |
| **`header`** | Shown on top of the card, below the label (if any is set). |
| **`functions`** | Shown on the right side of the label or header slot. |
| **`footer`** | Shown below the content area. |