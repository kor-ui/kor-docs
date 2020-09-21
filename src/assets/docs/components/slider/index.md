# Slider

Sliders are used to allow quick selection of a numeric value within a pre-defined range.

[Label and Value](<components/slider#label-(optional)-and-value-(required)>) • [Min and Max](<components/slider#min-and-max-(required)>) • [Input](<components/slider#input-(optional)>) • [Step](<components/slider#step-(required)>) • [API](components/slider#api)

---

## Label (Optional) and Value (Required)

When defined, a text label is shown on top of the slider to give some context about its meaning. For example, if a slider controls the brightness of a photo, the label can be defined as 'Brightness'.

The value of the slider is a mandatory definition and should be within the range of min and max values. Every slider should have a default value.

<iframe src="./assets/docs/components/slider/label-and-value.html"></iframe>

```html
<kor-slider value="0"></kor-slider>
<kor-slider label="Label and value 0" value="0"></kor-slider>
<kor-slider label="Label and value 50" value="50"></kor-slider>
<kor-slider label="Label and value 100" value="100"></kor-slider>
```

---

## Min and Max (Required)

Sliders require a range to be defined through min and max values. For example, if the slider controls the opacity of a picture, it could be set to only allow numbers within `0` and `100`.

Negative values can be defined as min and/or max as well.

<iframe src="./assets/docs/components/slider/min-and-max.html"></iframe>

```html
<kor-slider label="Min 0, max 100" min="0" max="100"></kor-slider>
<kor-slider label="Min -100, max 100" min="-100" max="100"></kor-slider>
```

---

## Input (Optional)

To give the user the possibility of entering values more precisely, the input variation adds a number input box close to the label, which allows keyboard numeric inputs.

Changing the value by dragging the thumb will update the value of the input box and vice-versa.

<iframe src="./assets/docs/components/slider/input.html"></iframe>

```html
<kor-slider label="Input" input value="75"></kor-slider>
```

---

## Step (Required)

To define the granularity of value updates when the user moves the thumb, a custom step value can be set. By default, it is set to `1`, but could be changed to `0.5` or `100`, for example.

<iframe src="./assets/docs/components/slider/step.html"></iframe>

```html
<kor-slider label="Step 1" input></kor-slider>
<kor-slider label="Step 10" step="10" input></kor-slider>
<kor-slider
  label="Step 0.1"
  min="0"
  max="10"
  value="5"
  step="0.5"
  input
></kor-slider>
```

---

## API

### Properties

| Name        | Type      | Default     | Description                                                          |
| :---------- | :-------- | :---------- | :------------------------------------------------------------------- |
| **`label`** | `String`  | _undefined_ | If set, defines the text label shown on top.                         |
| **`value`** | `Number`  | `50`        | Defines the current value. Must be a value between min and max.      |
| **`min`**   | `Number`  | `50`        | Defines the minimum value accepted.                                  |
| **`max`**   | `Number`  | `50`        | Defines the maximum value accepted.                                  |
| **`step`**  | `Number`  | `1`         | Defines the steps to skip when the user drags the thumb.             |
| **`input`** | `Boolean` | _undefined_ | If set to true, allows the user to input a value using the keyboard. |
