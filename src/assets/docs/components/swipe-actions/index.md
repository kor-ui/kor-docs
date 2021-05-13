# Swipe Actions

<iframe src="./assets/docs/components/swipe-actions/main.html"></iframe>

On touch devices, swipe actions can be used to allow users to quickly perform an action with only one gesture, without having to open a drawer or navigate to a deeper page.

This component is commonly used in conjunction with [Table rows](components/table), but any other element can be used as well.

[Slots](components/swipe-actions#slots) • [Icon and Background Color](components/avatar#icon-and-background-color-(optional)) • [Swipe Events](components/avatar#swipe-events) • [API](components/avatar#api)

---

## Slots

The **left** and **right** slots can be used to host individual actions. They can be used together or only one of them at a time.

Both slots can be used for the same actions of for different ones. In the last case, color can be used to allow the user to quickly differentiate between them.

<iframe src="./assets/docs/components/swipe-actions/slots.html" height="480px"></iframe>

```html
<kor-table columns="1fr">
  <!-- left and right -->
  <kor-swipe-actions>
    <!-- content -->
    <kor-table-row>
      <kor-table-cell>Swipe to the left or right</kor-table-cell>
    </kor-table-row>
    <!-- action -->
    <kor-swipe-action
      slot="left"
      icon="archive"
    ></kor-swipe-action>
    <kor-swipe-action
      slot="right"
      icon="archive"
    ></kor-swipe-action>
  </kor-swipe-actions>
  <!-- left only -->
  <kor-swipe-actions>
    <!-- content -->
    <kor-table-row>
      <kor-table-cell>Swipe to the left only</kor-table-cell>
    </kor-table-row>
    <!-- action -->
    <kor-swipe-action
      slot="left"
      icon="archive"
    ></kor-swipe-action>
  </kor-swipe-actions>
  <!-- left only -->
  <kor-swipe-actions>
    <!-- content -->
    <kor-table-row>
      <kor-table-cell>Swipe to the right only</kor-table-cell>
    </kor-table-row>
    <!-- action -->
    <kor-swipe-action
      slot="right"
      icon="archive"
    ></kor-swipe-action>
  </kor-swipe-actions>
</kor-table>
```

---

## Icon and Background Color (Optional)

Every action item should contain an icon that clearly represents the action triggered by it. To help communicating the meaning of the action, a background color can be used (e.g. red for negative action such as 'Delete' or green for positive ones such as 'Reply').

<iframe src="./assets/docs/components/swipe-actions/icon-bg-color.html" height="480px"></iframe>

```html
  <kor-table columns="1fr">
    <!-- red and green -->
    <kor-swipe-actions>
      <!-- content -->
      <kor-table-row>
        <kor-table-cell>Swipe to delete or reply</kor-table-cell>
      </kor-table-row>
      <!-- action -->
      <kor-swipe-action
        slot="left"
        icon="delete"
        bg-color="rgba(var(--functional-red), .2)"
      ></kor-swipe-action>
      <kor-swipe-action
        slot="right"
        icon="reply"
        bg-color="rgba(var(--functional-green), .2)"
      ></kor-swipe-action>
    </kor-swipe-actions>
  </kor-table>
```

---

## Swipe events

When the user swipes to the right or left more than 1 third of the element's width, an event will be fired and can be used to trigger actions on the application, such as Delete or Reply.

If the user releases the touch when swiping less than 1 third of the width, no event is fired and the action is therefore cancelled. 

<iframe src="./assets/docs/components/swipe-actions/swipe-events.html" height="480px"></iframe>

```html
<kor-table columns="1fr">
  <kor-swipe-actions>
    <!-- content -->
    <kor-table-row>
      <kor-table-cell>Swipe more than 1/3 of the width</kor-table-cell>
    </kor-table-row>
    <!-- action -->
    <kor-swipe-action
      slot="left"
      icon="delete"
      bg-color="rgba(var(--functional-red), .2)"
    ></kor-swipe-action>
    <kor-swipe-action
      slot="right"
      icon="reply"
      bg-color="rgba(var(--functional-green), .2)"
    ></kor-swipe-action>
  </kor-swipe-actions>
</kor-table>

<script>
  const swipeActionsEl = document.querySelector('kor-swipe-actions');
  // alert when swipe left or right event fires
  swipeActionsEl.addEventListener('swipe-left', () => alert('Swiped left!'));
  swipeActionsEl.addEventListener('swipe-right', () => alert('Swiped right!'));
</script>
```

---

## API

### Properties

`kor-swipe-action`

| Name            | Type      | Default     | Description                                                                                                                                                |
| :-------------- | :-------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`icon`** | `String` | _undefined_ | If set, defines the icon shown inside the action item. Takes any value accepted by `kor-icon`. |
| **`bg-color`** | `String` | _undefined_ | If set, defines the background color of the action item (e.g. `red`). |

### Slots

`kor-swipe-actions`

| Name          | Description                         |
| :------------ | :---------------------------------- |
| **_unnamed_** | Hosts the main element to be swiped. |
| **`left`** | Hosts the left `kor-swipe-action`. |
| **`right`** | Hosts the right `kor-swipe-action`. |

### Events

`kor-swipe-actions`

| Name          | Description                         |
| :------------ | :---------------------------------- |
| **`swipe-left`** | Triggered when the user swipes to the left more than 1/3 of the element's width. |
| **`swipe-right`** | Triggered when the user swipes to the right more than 1/3 of the element's width. |