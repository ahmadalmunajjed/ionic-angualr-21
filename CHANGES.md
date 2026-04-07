# Ionic Component Demo Index — Changes

Converted the default Ionic Angular starter homepage into a component demo index, modelled after [ionic-team/docs-demo](https://github.com/ionic-team/docs-demo).

---

## What Changed

### New Files

| File | Purpose |
|---|---|
| `src/app/shared/component-registry.ts` | Central registry — `COMPONENT_REGISTRY` const array defining all 15 demo entries (`id`, `name`, `icon`, `description`) |
| `src/app/shared/demo-header.ts` | Reusable `<app-demo-header>` component — toolbar with back button, used by every demo page |
| `src/app/demos/demos.routes.ts` | Lazy-loaded child routes for all 15 demo pages under `/demo/:id` |
| `src/app/demos/accordion/accordion-demo.ts` | Accordion demo — Basic, Multiple Open, Default Open, Readonly |
| `src/app/demos/alert/alert-demo.ts` | Alert demo — Basic, Sub-header, With inputs, With radio buttons |
| `src/app/demos/badge/badge-demo.ts` | Badge demo — Colors, In list items, Counter with signal |
| `src/app/demos/button/button-demo.ts` | Button demo — Fill, Colors, Sizes, Icons, Expand, States |
| `src/app/demos/card/card-demo.ts` | Card demo — Basic, With image, With footer actions |
| `src/app/demos/checkbox/checkbox-demo.ts` | Checkbox demo — Basic, Colors, Disabled, Indeterminate, Label positions |
| `src/app/demos/chip/chip-demo.ts` | Chip demo — Basic, Colors, Outline, With icon/avatar, Dismissible |
| `src/app/demos/input/input-demo.ts` | Input demo — Types, Label styles, States, Password toggle |
| `src/app/demos/progress-bar/progress-bar-demo.ts` | Progress Bar demo — Determinate, Indeterminate, Buffer, Colors, Animated |
| `src/app/demos/radio/radio-demo.ts` | Radio demo — Basic group, Colors, Disabled, Selected value display |
| `src/app/demos/range/range-demo.ts` | Range demo — Basic, Min/max/step, Snaps, Dual knobs, With icons |
| `src/app/demos/select/select-demo.ts` | Select demo — Basic, Interface variants, Multiple, Reactive value |
| `src/app/demos/spinner/spinner-demo.ts` | Spinner demo — All 8 named spinner variants |
| `src/app/demos/toast/toast-demo.ts` | Toast demo — Positions, Colors, With button/icon |
| `src/app/demos/toggle/toggle-demo.ts` | Toggle demo — Basic, Colors, Disabled, Labeled, Reactive state |
| `src/app/home/home.scss` | Replaced `home.css` — minimal SCSS for icon slot styling |

### Modified Files

| File | What Changed |
|---|---|
| `src/app/app.routes.ts` | Added `/demo` lazy route via `loadChildren` → `demos.routes.ts` |
| `src/app/home/home.ts` | Rewrote: imports registry, renders `ion-list` of all components with `ChangeDetectionStrategy.OnPush` |
| `src/app/home/home.html` | Rewrote: `ion-list` with `@for` loop over registry, each item links to `/demo/:id` |

### Deleted Files

| File | Reason |
|---|---|
| `src/app/home/home.css` | Replaced by `home.scss` for consistency with project SCSS convention |

---

## Architecture

```
/home                      → Component index (ion-list of all 15 components)
/demo/accordion            → Accordion demo (lazy loaded)
/demo/alert                → Alert demo (lazy loaded)
/demo/badge                → Badge demo (lazy loaded)
/demo/button               → Button demo (lazy loaded)
/demo/card                 → Card demo (lazy loaded)
/demo/checkbox             → Checkbox demo (lazy loaded)
/demo/chip                 → Chip demo (lazy loaded)
/demo/input                → Input demo (lazy loaded)
/demo/progress-bar         → Progress Bar demo (lazy loaded)
/demo/radio                → Radio demo (lazy loaded)
/demo/range                → Range demo (lazy loaded)
/demo/select               → Select demo (lazy loaded)
/demo/spinner              → Spinner demo (lazy loaded)
/demo/toast                → Toast demo (lazy loaded)
/demo/toggle               → Toggle demo (lazy loaded)
```

### Key Design Decisions

- **Registry-driven**: `COMPONENT_REGISTRY` in `shared/component-registry.ts` is the single source of truth — adding a new demo only requires adding an entry here and a route in `demos.routes.ts`.
- **Lazy loading**: every demo page is a separate bundle, keeping the initial load at ~67 KB.
- **Shared `DemoHeader`**: all demo pages use `<app-demo-header [title]="...">` which encapsulates the toolbar, back button (`defaultHref="/home"`), and all required Ionic imports.
- **Signals throughout**: interactive demos (click counters, toggle state, progress animation, dismissible chips, etc.) use `signal()` and `computed()` — no `ngModel`, no `@Input()` decorators.
- **`ChangeDetectionStrategy.OnPush`** on every component.
- **Native control flow**: all templates use `@for`, `@if`, `@switch` — no `*ngFor`/`*ngIf`.
- **Standalone components**: no `standalone: true` set (default in Angular 20+).

---

## Component Demos — What Each Shows

| Demo | Sections |
|---|---|
| **Accordion** | Basic (3 items), Multiple open, Default open, Readonly |
| **Alert** | Basic, With sub-header, With text input, With radio buttons |
| **Badge** | Colors (6), In list items, Reactive counter |
| **Button** | Fill variants, Colors (6), Sizes (3), With icons, Expand modes, States |
| **Card** | Basic, With image placeholder, With footer actions |
| **Checkbox** | Basic, Colors, Disabled, Indeterminate, Label start/end |
| **Chip** | Basic, Colors, Outline, With icon, With avatar, Dismissible |
| **Input** | Types (text/number/email/password), Label styles, Disabled/readonly, Clear button |
| **Progress Bar** | Determinate, Indeterminate, Buffer, Colors, Signal-animated |
| **Radio** | Basic group, Colors, Disabled option, Selected value display |
| **Range** | Basic, Min/max/step, Snaps, Dual knobs, With icons |
| **Select** | Basic, Popover/action-sheet/alert interfaces, Multiple, Reactive value |
| **Spinner** | All 8 variants: bubbles, circles, circular, crescent, dots, lines, lines-sharp, lines-small |
| **Toast** | Top/middle/bottom positions, Colors, With action button, With icon |
| **Toggle** | Basic, Colors, Disabled, In list, Reactive checked state |
