# Avatar

Avatars are used to identify the user logged into an app or website by displaying information such as profile picture and name.

[Label and info](components/avatar#label-and-info) • [Image](components/avatar#image) • [API](components/avatar#api)

---

## Label and Info (Optional)

Labels can be used to display the user name. If defined, it is displayed in bold text on the right side of the image, and if no image is defined, the initial letters of the first and last words of the label are used as a placeholder for the image.

The Avatar's Info can display additional information such as e-mail, role, institution and so on. If defined it is displayed below the label.

<iframe src="./assets/docs/components/avatar/label-and-info.html"></iframe>

```html
<kor-avatar></kor-avatar>
<kor-avatar label="John Doe"></kor-avatar>
<kor-avatar label="John Doe" image="https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg"></kor-avatar>
```

---

## Image (Optional)

Images can be use to visually identify a user. It can host a picture uploaded by the user for example or a standard placeholder picture. 

If not defined, the initial letters of the first and last words of the label are shown inside the circle as placeholders.

<iframe src="./assets/docs/components/avatar/image.html"></iframe>

```html
<kor-avatar></kor-avatar>
<kor-avatar label="John Doe"></kor-avatar>
<kor-avatar label="John Lopez Doe" info="john.doe@email.com"></kor-avatar>
```

---

## API

### Properties

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | _undefined_ | If set, defines the text label shown next to the icon/image. If the label is set and an image is not defined, the initials will be shown as a placeholder. |
| **`info`** | `String` | _undefined_ | If set, defines the information text shown below the label. |
| **`image`** | `String` | _undefined_ | If set, replaces the placeholder image with a custom image. |
| **`condensed`** | `Boolean` | _undefined_ | If set, the image is shown in a smaller size. |