# Icon

Icons can be used to indicate a status or action to the user in a visual manner. They are often used in other components such as [Buttons](components/button) or [Tabs](components/tabs).

[Icon](components/icon#size) • [Size](components/icon#size) • [Color](components/icon#color) • [Button](components/icon#button) • [API](components/icon#api)

---

## Icon (Required)

Icons from the [Material Design Icons](https://material.io/resources/icons/?style=baseline) library work out of the box with the icon component. In that case, all you need to do is assigning the icon property to the Material name (e.g. `icon='save'` or `icon='alarm_on'`). Check the Material library to see all the icons offered.

Custom icons can also be used with the component, and to do that you can assign the icon property to match the path of the desired icon (e.g. `icon="url('./assets/icons/more.png')`).

<iframe src="./assets/docs/components/icon/icon.html"></iframe>

```html
<kor-icon icon="directions_bike"></kor-icon>
<kor-icon icon="directions_car"></kor-icon>
<kor-icon icon="train"></kor-icon>
```

---

## Size (Required)

By default, icons have a size of 24x24px (m). Depending on the space available, icons can also be 16x16px (s), 32x32px (l) and 48x48px (xl)

<iframe src="./assets/docs/components/icon/size.html"></iframe>

```html
<kor-icon icon="extension" size="s"></kor-icon>
<kor-icon icon="extension"></kor-icon>
<kor-icon icon="extension" size="l"></kor-icon>
<kor-icon icon="extension" size="xl"></kor-icon>
```

---

## Color (Optional)

Icons can have custom colors assigned for cases where highlighting is necessary or for branding purposes. All main web color formats are accepted (e.g. RGB, RGBA, HEX, color name).

<iframe src="./assets/docs/components/icon/color.html"></iframe>

```html
<kor-icon icon="favorite"></kor-icon>
<kor-icon icon="favorite" color="rgb(var(--accent-1))"></kor-icon>
<kor-icon icon="favorite" color="darkorange"></kor-icon>
```

---

## Button (Optional)

Icons can be used to trigger an action and therefore behave like a [Button](components/button). In this case, opacity and cursor styles are used to visually indicate this interaction. 

<iframe src="./assets/docs/components/icon/button.html"></iframe>

```html
<kor-icon icon="save" button></kor-icon>
<kor-icon icon="save" button disabled></kor-icon>
```

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`icon`** | `String` | _undefined_ | Defines the icon shown. Takes any string from the [Material Design Library](https://material.io/resources/icons/?style=baseline) or custom `url('')` pointing to local or remote images or vectors. |
| **`size`** | `String` | `m` | If set, defines the size of the icon. Possible values are `xl` (48px) `l` (32px), `m` (24px) and `s` (16px), but css `font-size` can be used to set custom sizes. |
| **`color`** | `String` | _undefined_ | If set, replaces the text label with a custom icon. |
| **`button`** | `Boolean` | _undefined_ | If set to `true`, updates hover, click effects and cursors. |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated. |