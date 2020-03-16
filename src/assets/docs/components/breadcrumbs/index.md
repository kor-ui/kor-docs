# Breadcrumbs

Breadcrumbs are used to indicate the path of the current page in a hierarchical manner (e.g. Home > Products > Shoes > Sneakers).

While Breadcrumbs allow backward navigation by clicking on a previous item, it should not be used for horizontal navigation between pages. Use [Tabs](components/tabs) for that purpose instead.

The active item of a breadcrumb should always be the last (right-most) one.

[Label](components/breadcrumbs#label) • [API](components/breadcrumbs#api)

---

## Label (Required)

The label defines which text string is shown to the user.

<iframe src="./assets/docs/components/breadcrumbs/label.html"></iframe>

---

## API

### Properties 

`kor-breadcrumb-item`

| Name | Type | Default | Description |
| :-- | :-- | :-- | :-- |
| **`label`** | `String` | `Label` | Defines the text label. |
| **`active`** | `Boolean` | _undefined_ | Defines whether the item is currently active or not. |
