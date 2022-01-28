# Kor

## An open source Design System and lightweight UI Component Library.

Compatible with all major frameworks, browsers, operational systems, form factors and input types, **Kor** can be used virtually anywhere. It is built to facilitate the design and development of **intuitive, coherent and pleasing** user interfaces based on Web technologies (HTML5).

---

<style>
    .highlight {
        display: flex; 
        flex-direction: column; 
        gap: 8px;
    }
    .highlight kor-text[size="header-1"] {
        margin: 16px 0;
    }
    .highlight kor-icon {
        padding: 8px;
        background-size: 48px;
        background-color: rgba(var(--neutral-1), 0.05);
        border-radius: 50%;
        margin-bottom: 8px;
    }
</style>

<kor-grid columns="3" style="gap: 32px">
    <div grid-cols-s="3" class="highlight">
        <kor-icon size="xl" icon="url(assets/docs/introduction/welcome/ease-of-use.png)"></kor-icon>
        <h2>Ease of use</h2>
        <p>Designed to provide an intuitive, coherent and pleasing experience to users.</p>
    </div>
    <div grid-cols-s="3" class="highlight">
        <kor-icon size="xl" icon="url(assets/docs/introduction/welcome/compatibility.png)"></kor-icon>
        <h2>Compatibility</h2>
        <p>Support to all main frameworks, browsers, OS, form factors and input types.</p>
    </div>
    <div grid-cols-s="3" class="highlight">
        <kor-icon size="xl" icon="url(assets/docs/introduction/welcome/size-and-speed.png)"></kor-icon>
        <h2>Size and Speed</h2>
        <p>Lightweight package made to provide fast loading and usage in any context.</p>
    </div>
</kor-grid>

---

## Toolkit

<kor-grid columns="2">
    <a href="https://theme.kor-ui.com" target="_blank">
        <div grid-cols-s="3" class="highlight">
            <img src="assets/docs/introduction/welcome/theme.gif">
            <h2>Theme Editor</h2>
            <p>Browse Kor themes, edit and export them as a CSS snippet.</p>
        </div>
    </a>
    <a href="https://sandbox.kor-ui.com" target="_blank">
        <div grid-cols-s="3" class="highlight">
            <img src="assets/docs/introduction/welcome/sandbox.gif">
            <h2>Drag & drop Sandbox</h2>
            <p>Prototype with Kor components by dragging them into a canvas.</p>
        </div>
    </a>
</kor-grid>

---

## Components

<style>
    kor-grid {
        margin: 48px 0;
    }
    kor-grid h3 {
        color: var(--text-1);
    }
    kor-grid a {
        text-decoration: none;
        color: var(--text-1);
        font-weight: unset;
    }
    kor-grid a img {
        background: rgba(var(--neutral-1), .1);
        box-shadow: unset;
        border: 1px solid rgba(var(--neutral-1), .1);
        transition: .1s all ease-out;
        border-radius: 4px;
    }
    kor-grid a:hover img {
        background: rgba(var(--neutral-1), .25);
    }
</style>

<kor-grid spacing="l">
    <a href="components/accordion" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/accordion.png"/><b>Accordion</b>
    </a>
    <a href="components/app-bar" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/app-bar.png"/><b>App Bar</b>
    </a>
    <a href="components/avatar" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/avatar.png"/><b>Avatar</b>
    </a>
    <a href="components/badge" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/badge.png"/><b>Badge</b>
    </a>
    <a href="components/breadcrumbs" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/breadcrumbs.png"/><b>Breadcrumbs</b>
    </a>
    <a href="components/button" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/button.png"/><b>Button</b>
    </a>
    <a href="components/card" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/card.png"/><b>Card</b>
    </a>
    <a href="components/checkbox" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/checkbox.png"/><b>Checkbox</b>
    </a>
    <a href="components/divider" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/divider.png"/><b>Divider</b>
    </a>
    <a href="components/drawer" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/drawer.png"/><b>Drawer</b>
    </a>
    <a href="components/empty-state" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/empty-state.png"/><b>Empty State</b>
    </a>
    <a href="components/grid" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/grid.png"/><b>Grid</b>
    </a>
    <a href="components/icon" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/icon.png"/><b>Icon</b>
    </a>
    <a href="components/image" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/image.png"/><b>Image</b>
    </a>
    <a href="components/input" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/input.png"/><b>Input</b>
    </a>
    <a href="components/menu-item" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/menu-item.png"/><b>Menu Item</b>
    </a>
    <a href="components/modal" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/modal.png"/><b>Modal</b>
    </a>
    <a href="components/nav-bar" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/nav-bar.png"/><b>Nav Bar</b>
    </a>
    <a href="components/notifications" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/notifications.png"/><b>Notifications</b>
    </a>
    <a href="components/page" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/page.png"/><b>Page</b>
    </a>
    <a href="components/pane" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/pane.png"/><b>Pane</b>
    </a>
    <a href="components/popover" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/popover.png"/><b>Popover</b>
    </a>
    <a href="components/progress-bar" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/progress-bar.png"/><b>Progress Bar</b>
    </a>
    <a href="components/radio-button" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/radio-button.png"/><b>Radio Button</b>
    </a>
    <a href="components/slider" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/slider.png"/><b>Slider</b>
    </a>
    <a href="components/spinner" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/spinner.png"/><b>Spinner</b>
    </a>
    <a href="components/stepper" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/stepper.png"/><b>Stepper</b>
    </a>
    <a href="components/swipe-actions" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/swipe-actions.png"/><b>Swipe Actions</b>
    </a>
    <a href="components/switch" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/switch.png"/><b>Switch</b>
    </a>
    <a href="components/table" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/table.png"/><b>Table</b>
    </a>
    <a href="components/tabs" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/tabs.png"/><b>Tabs</b>
    </a>
    <a href="components/tag" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/tag.png"/><b>Tag</b>
    </a>
    <a href="components/text" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/text.png"/><b>Text</b>
    </a>
    <a href="components/textarea" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/textarea.png"/><b>Textarea</b>
    </a>
    <a href="components/toggle" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/toggle.png"/><b>Toggle</b>
    </a>
    <a href="components/tool" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/tool.png"/><b>Tool</b>
    </a>
    <a href="components/tooltip" grid-cols="3" grid-cols-m="4" grid-cols-s="6">
        <img src="assets/wireframes/tooltip.png"/><b>Tooltip</b>
    </a>
</kor-grid>

---

Questions, suggestions or any other messages are welcome at <contact@kor-ui.com>.
