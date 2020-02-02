# Data Binding

Just like native HTML5 elements, all web components included in the library supports one- and two-way data binding.

---

## Property-changed Notifiers

When a property is changed either manually by the user or internally by the component itself, the element notifies the application through the dispatch of a custom event called `(propertyName)-changed`. The value of the property can be discovered through `event.target.propertyName`.

```html
<!-- event dispatched every time the value changes -->
<kor-input (value-changed)="myVar = $event.target.value"></kor-input>

<!-- event dispatched when active changes, an additional check can be done to determine if active value is true or false-->
<kor-menu-item (active-changed)="$event.target.active ? handleActive() : myOtherFunction()"></kor-menu-item>
```

---

## Property Binding

Regardless of type, any property can be bound to a value dynamically. This is specially useful for translation of strings or two-way binding

```html
<!-- value will be changed in the UI every time the variable updates in the background -->
<kor-tab-item [active]="currentTab == 'tab-1'" (click)="currentTab = 'tab-1"></kor-tab-item>

<!-- inner html of components can be bound as well -->
<kor-text>{{myString}}</kor-text>
```