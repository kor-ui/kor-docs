# Button

Buttons are used to trigger an action by click or touch, such as 'Open', 'Save', or 'Cancel'.

[Color](<components/button#color-(required)>) • [Icon](<components/button#icon-(optional)>) • [API](components/button#api)

---

## Color (Required)

The color of a button is defined by how important that function is in the context of a workflow and in comparison with others. It is recommended to only have one primary button in a screen and avoid pairing buttons with the same importance.

**Primary** buttons are used for 'call to action' and represent the happy path of a workflow, such as 'Open', 'Confirm' or 'Next'.

**Secondary** buttons are used for other functions that are not the primary one on the page. It is usually paired with primary buttons to indicate an alternative resolution, such as 'Upload', 'Refresh' or 'Back'.

**Tertiary** buttons are usually paired with secondary buttons to provide an alternative resolution when the main button is not important enough to be of a primary color. Examples are 'Cancel', 'Close' or 'Abort'.

When defining the order of buttons, please consider the guidelines of the platform where your app or website is used:

| Platform       | Ordering                       |
| :------------- | :----------------------------- |
| Web (browsers) | Tertiary / Secondary / Primary |
| Native MacOS   | Tertiary / Secondary / Primary |
| Cross-platform | Tertiary / Secondary / Primary |
| Native Windows | Primary / Secondary / Tertiary |

Keep the button ordering always consistent within your app or with other apps that belong to the same family or company.

<iframe src="./assets/docs/components/button/color.html"></iframe>

```html
<kor-button></kor-button>
<kor-button color="secondary"></kor-button>
<kor-button color="tertiary"></kor-button>
<kor-button disabled></kor-button>
<kor-button color="secondary" disabled></kor-button>
<kor-button color="tertiary" disabled></kor-button>
```

---

## Icon (Optional)

Icon buttons can be used when to save space or to create visual metaphors that are easier and faster to understand.

Only use icon buttons when the metaphors are well established with your users, such as 'Save', 'Delete' or 'Share'.

<iframe src="./assets/docs/components/button/icon.html"></iframe>

```html
<kor-button icon="save"></kor-button>
<kor-button icon="save" color="secondary"></kor-button>
<kor-button icon="save" color="tertiary"></kor-button>
<kor-button icon="save" disabled></kor-button>
<kor-button icon="save" color="secondary" disabled></kor-button>
<kor-button icon="save" color="tertiary" disabled></kor-button>
```

---

## API

### Properties

| Name           | Type      | Default     | Description                                                                      |
| :------------- | :-------- | :---------- | :------------------------------------------------------------------------------- |
| **`label`**    | `String`  | _undefined_ | If set, defines the text label.                                                  |
| **`icon`**     | `String`  | _undefined_ | If set, replaces the text label with a custom icon.                              |
| **`color`**    | `String`  | `primary`   | Defines the color. The possible values are `primary`, `secondary` and `tertiary` |
| **`disabled`** | `Boolean` | _undefined_ | If set to `true`, disables mouse clicks and the style gets updated.              |
