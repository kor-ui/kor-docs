# App Bar

The App Bar is located at the top of a page and remains stable across multiple pages of an app or website. It hosts the logo, app name, main navigation, common functions and user information.

Only one App Bar should be used at a time and it is recommended to use this component in all pages, except in special cases such as full screen mode.

[Mobile](components/app-bar#mobile) • [Label](components/app-bar#label) • [Logo](components/app-bar#logo) • [Slots](components/app-bar#slots) • [API](components/app-bar#api)

---

## Label (Optional)

In desktop or laptop use cases, the Label is used to identify the app or website and does not change depending on the active page.

In mobile use cases, on the other hand, the label is used to identify the app only in the main (home) view, and then used to identify the currently active page after navigation occurs.

Keep labels short to avoid overflow of text specially if multiple languages are supported in your app or website.

<iframe src="./assets/docs/components/app-bar/label.html" height="200px"></iframe>

```html
<kor-page>
  <kor-app-bar slot="top" label="Label"></kor-app-bar>
</kor-page>
```

---

## Logo (Optional)

For branding purposes, a logo can be defined and shown at the very left corner of the App Bar. If the logo already displays the app or website name, an additional label is not required.

Logos are not supported in mobile App Bars since the corners are reserved for other functions.

<iframe src="./assets/docs/components/app-bar/logo.html" height="200px"></iframe>

```html
<kor-page>
  <kor-app-bar slot="top" logo="https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg"></kor-app-bar>
</kor-page>
```

---

## Mobile (Optional)

When used in its mobile variation, the App Bar provides function slots on both left and right corners for actions such as 'Menu', 'Back' or 'More' and the label gets centered to the screen.

<iframe src="./assets/docs/components/app-bar/mobile.html" height="200px"></iframe>

```html
<kor-page>
  <kor-app-bar slot="top" mobile label="Label" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png">
    <!-- left -->
    <kor-avatar slot="left"></kor-avatar>
    <!-- right -->
    <kor-icon button icon="more_vert" slot="right"></kor-icon>
  </kor-app-bar>
</kor-page>
```

---

## Slots

The **functions** slot can be used for hosting global app functions, represented by components such as [Icons](components/icon) and for the user [Avatar](components/avatar).

<iframe src="./assets/docs/components/app-bar/slots.html" height="480px"></iframe>

```html
<kor-app-bar slot="top" label="Label">
  <kor-icon slot="functions" icon="settings" button></kor-icon>
  <kor-avatar label="Label" info="Information text" image="https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg"></kor-avatar>
</kor-app-bar>
```

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label shown on the left side (if `mobile` is unset). |
| **`logo`** | `String` | _undefined_ | If set, defines the logo shown on the left side. |
| **`mobile`** | `Boolean` | _undefined_ | If set, toggles the mobile variation. |

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | The central content area. Used for hosting components such as  [Tabs](/components/tabs). |
| **`functions`** | Displayed on the right side (if `mobile` is unset). Used for hosting components such as [Icon](/components/icon) and [Avatar](/components/avatar). |
| **`left`** | Displayed on the left side (if `mobile` is set to `true`). Used for hosting components such as [Icon](/components/icon). |
| **`right`** | Displayed on the right side (if `mobile` is set to `true`). Used for hosting components such as [Icon](/components/icon). |

### Events

| Name | Description |
| :-- | :-- |
| **`logo-clicked`** | Emitted when clicking on the logo. |