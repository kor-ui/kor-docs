# Nav Bar

<iframe src="./assets/docs/components/nav-bar/main.html"></iframe>

A Nav Bar provides ways for the user to navigate within an app or website through the use of components such as [Tabs](components/tabs).

It is usually used for second level of navigation (sub-pages), while the main navigation is shown in the [App Bar](components/app-bar).

[Functions Slot](components/nav-bar#icon) • [Mobile](components/nav-bar#icon) • [API](components/nav-bar#api)

---

## Functions Slot (Optional)

Functions that apply to the entire page (but no to the entire app or website) can be placed in the functions slot, represented by components such as [Icons](components/icon).

<iframe src="./assets/docs/components/nav-bar/functions-slot.html"></iframe>

```html
<kor-page>
  <kor-app-bar slot="top" label="App Bar"></kor-app-bar>
  <kor-nav-bar slot="top">
    <kor-tabs>
      <kor-tab-item label="Tab 1" active></kor-tab-item>
      <kor-tab-item label="Tab 2"></kor-tab-item>
      <kor-tab-item label="Tab 3"></kor-tab-item>
    </kor-tabs>
    <kor-icon icon="launch" button slot="functions"></kor-icon>
    <kor-icon icon="more_vert" button slot="functions"></kor-icon>
  </kor-nav-bar>
</kor-page>
```

---

## Mobile (Optional)

In mobile devices, the Nav Bar can be placed in the bottom slot of the [Page](components/page) in order to make it easier to reach by the user's finger.

<iframe src="./assets/docs/components/nav-bar/mobile.html"></iframe>

```html
<kor-page>
  <kor-nav-bar slot="bottom">
    <kor-tabs style="justify-content: center">
      <kor-tab-item icon="home" active></kor-tab-item>
      <kor-tab-item icon="photo"></kor-tab-item>
      <kor-tab-item icon="camera"></kor-tab-item>
      <kor-tab-item icon="person"></kor-tab-item>
    </kor-tabs>
  </kor-nav-bar>
</kor-page>
```

---

## API

### Properties

_No properties_

### Slots

| Name | Description |
| :-- | :-- |
| **_unnamed_** | The main content area. |
| **`functions`** | Shown on the right side. |