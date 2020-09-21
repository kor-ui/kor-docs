# Divider

Dividers are used to create visual boundaries between unrelated content. While it helps creating a visual hierarchy on the page, do not overuse dividers or they can create unnecessary complexity to the users.

[Orientation](<components/divider#orientation-(required)>) • [API](components/divider#api)

---

## Orientation (Required)

The orientation of a divider is determined by the direction in which the content flows. When the content flows vertically, horizontal dividers should be used, and when it flows horizontally, use vertical dividers instead.

<iframe src="./assets/docs/components/divider/orientation.html"></iframe>

```html
<wa-text>Spacing S</wa-text>
<kor-divider spacing="s" orientation="vertical"></kor-divider>
<wa-text>Spacing M</wa-text>
<kor-divider orientation="vertical"></kor-divider>
<wa-text>Spacing L</wa-text>
<kor-divider spacing="l" orientation="vertical"></kor-divider>
```

---

## API

### Properties

| Name              | Type     | Default      | Description                                                                              |
| :---------------- | :------- | :----------- | :--------------------------------------------------------------------------------------- |
| **`spacing`**     | `String` | `m`          | Defines the space around the divider. Possible values are `s`, `n` and `l`.              |
| **`orientation`** | `String` | `horizontal` | Defines the orientation of the divider. Possible values are `vertical` and `horizontal`. |
