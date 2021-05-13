# Kor

## An open source Design System and lightweight UI Component Library.

Compatible with all major frameworks, browsers, operational systems, form factors and input types, **Kor** can be used virtually anywhere. It is built to facilitate the design and development of **intuitive, coherent and pleasing** user interfaces based on Web technologies (HTML5).

---

<style>
.highlight {
    display: flex; 
    flex-direction: column; 
}
.highlight kor-text[size="header-1"] {
    margin: 16px 0;
}
</style>

<kor-grid columns="3" style="margin: 64px 0">
    <div grid-cols-s="3" class="highlight">
        <kor-icon size="xl" icon="touch_app" color="rgb(var(--accent-1))"></kor-icon>
        <kor-text size="header-1">Ease of use</kor-text>
        <kor-text color="var(--text-2)">
            Designed to provide an intuitive, coherent and pleasing experience to users
        </kor-text>
    </div>
    <div grid-cols-s="3" class="highlight">
        <kor-icon size="xl" icon="device_hub" color="rgb(var(--accent-1))"></kor-icon>
        <kor-text size="header-1">Compatibility</kor-text>
        <kor-text color="var(--text-2)">
            Support to all main frameworks, browsers, OS, form factors and input types
        </kor-text>
    </div>
    <div grid-cols-s="3" class="highlight">
        <kor-icon size="xl" icon="fast_forward" color="rgb(var(--accent-1))"></kor-icon>
        <kor-text size="header-1">Size and Speed</kor-text>
        <kor-text color="var(--text-2)">
            Lightweight package made to provide fast loading and usage in any context
        </kor-text>
    </div>
</kor-grid>

---

## Components

<style>
    kor-grid a {
        text-decoration: none;
        color: var(--text-1);
    }
    kor-grid a img {
        background: #EBEBEB;
        box-shadow: unset;
        border: 1px solid rgba(var(--neutral-1), .1);
        transition: .1s all ease-out;
        border-radius: 4px;
    }
    kor-grid a:hover img {
        background: #E0E0E0;
    }
</style>

<kor-grid spacing="l">
    <a href="components/accordion" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/accordion.png"/>Accordion
    </a>
    <a href="components/app-bar" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/app-bar.png"/>App Bar
    </a>
    <a href="components/avatar" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/avatar.png"/>Avatar
    </a>
    <a href="components/badge" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/badge.png"/>Badge
    </a>
    <a href="components/breadcrumbs" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/breadcrumbs.png"/>Breadcrumbs
    </a>
    <a href="components/button" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/button.png"/>Button
    </a>
    <a href="components/card" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/card.png"/>Card
    </a>
    <a href="components/checkbox" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/checkbox.png"/>Checkbox
    </a>
    <a href="components/divider" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/divider.png"/>Divider
    </a>
    <a href="components/drawer" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/drawer.png"/>Drawer
    </a>
    <a href="components/empty-state" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/empty-state.png"/>Empty State
    </a>
    <a href="components/grid" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/grid.png"/>Grid
    </a>
    <a href="components/icon" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/icon.png"/>Icon
    </a>
    <a href="components/image" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/image.png"/>Image
    </a>
    <a href="components/input" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/input.png"/>Input
    </a>
    <a href="components/menu-item" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/menu-item.png"/>Menu Item
    </a>
    <a href="components/modal" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/modal.png"/>Modal
    </a>
    <a href="components/nav-bar" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/nav-bar.png"/>Nav Bar
    </a>
    <a href="components/notifications" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/notifications.png"/>Notifications
    </a>
    <a href="components/page" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/page.png"/>Page
    </a>
    <a href="components/pane" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/pane.png"/>Pane
    </a>
    <a href="components/popover" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/popover.png"/>Popover
    </a>
    <a href="components/progress-bar" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/progress-bar.png"/>Progress Bar
    </a>
    <a href="components/radio-button" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/radio-button.png"/>Radio Button
    </a>
    <a href="components/slider" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/slider.png"/>Slider
    </a>
    <a href="components/spinner" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/spinner.png"/>Spinner
    </a>
    <a href="components/stepper" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/stepper.png"/>Stepper
    </a>
    <a href="components/swipe-actions" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/swipe-actions.png"/>Swipe Actions
    </a>
    <a href="components/switch" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/switch.png"/>Switch
    </a>
    <a href="components/table" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/table.png"/>Table
    </a>
    <a href="components/tabs" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/tabs.png"/>Tabs
    </a>
    <a href="components/tag" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/tag.png"/>Tag
    </a>
    <a href="components/text" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/text.png"/>Text
    </a>
    <a href="components/textarea" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/textarea.png"/>Textarea
    </a>
    <a href="components/toggle" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/toggle.png"/>Toggle
    </a>
    <a href="components/tool" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/tool.png"/>Tool
    </a>
    <a href="components/tooltip" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/tooltip.png"/>Tooltip
    </a>
</kor-grid>

---

Questions, suggestions or any other messages are welcome at <contact@kor-ui.com>.
