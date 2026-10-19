---
name: HPP-Ku
description: A compact, one-page HPP and selling-price calculator for Indonesian drink businesses.
colors:
  primary: "#2563eb"
  primary-soft: "#eaf1ff"
  page: "#f6f8fc"
  surface: "#ffffff"
  surface-soft: "#f2f5fa"
  ink: "#152238"
  muted: "#5d6b80"
  border: "#dce3ed"
  danger: "#b42318"
  dark-page: "#141a24"
  dark-surface: "#1c2533"
  dark-surface-soft: "#242f40"
  dark-ink: "#edf3fc"
  dark-muted: "#aab8cb"
  dark-border: "#344258"
  dark-primary: "#84adff"
  dark-primary-soft: "#253754"
  dark-danger: "#ffb4ab"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "38px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "28px"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "18px"
    fontWeight: 650
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.5
  control:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
  helper:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 400
  summaryTotal:
    fontSize: "18px"
    fontWeight: 650
  sellingPrice:
    fontSize: "32px"
    mobileFontSize: "28px"
    fontWeight: 650
  presetValue:
    fontSize: "18px"
    mobileFontSize: "16px"
    fontWeight: 600
  dialogTitle:
    fontSize: "22px"
    fontWeight: 650
  footerWordmark:
    fontSize: "26px"
    fontWeight: 600
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "9px"
  xl: "12px"
  2xl: "14px"
spacing:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "24px"
  3xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.xs}"
    padding: "11px 16px"
    height: "42px"
  button-secondary:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xs}"
    padding: "11px 14px"
    height: "42px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "8px 12px"
    height: "42px"
  card-summary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: "18px"
  badge-active:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted}"
    rounded: "{rounded.xs}"
    padding: "4px 8px"
  table-ingredient:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "14px 12px"
  disclosure-overhead:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: "18px 24px"
  quick-add-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "999px"
    padding: "8px 12px"
    height: "44px"
  dialog-import:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "22px"
    width: "620px"
  header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    padding: "12px 40px"
    height: "72px"
---

# Design System: HPP-Ku

## Overview

**Creative North Star: "The Clear Counter"**

The Clear Counter is a calm, practical workspace for checking drink costs and a selling price without making the calculation feel like a finance dashboard. Keep the first screen compact and familiar: a small HPP-Ku wordmark, short Indonesian labels, clearly grouped inputs, and the HPP result easy to find.

Use a clean white and blue light theme with a dark slate-blue option. Plus Jakarta Sans carries the interface; Cormorant Garamond is reserved for the HPP-Ku wordmark. Radix controls, quiet borders, and direct state messages should make each action feel familiar. The interface has no decorative imagery or oversized marketing hero.

**Key Characteristics:**
- Compact calculator interface with concise Indonesian copy.
- White and cool-gray surfaces, blue actions, and a user-selectable dark theme.
- Ingredients and margin editor before the HPP summary on mobile.
- One ingredient per table row, with optional overhead and margin controls.

## Colors

The palette pairs a clear action blue with cool, low-contrast surfaces; the dark theme shifts the same roles onto deep slate-blue backgrounds.

### Primary
- **Action Blue**: Primary actions, links, selected controls, and visible focus treatment.
- **Pale Action Blue**: Soft action surfaces and selected margin preset backgrounds.
- **Night Action Blue**: Primary actions and focus accents in dark appearance.
- **Night Soft Blue**: Soft selected and accent surfaces in dark appearance.

### Neutral
- **Cool Canvas**: Page background around the calculator panels.
- **White Surface**: Main panels, fields, and header in light appearance.
- **Soft Cool Surface**: Table headings, inactive rows, and secondary control surfaces.
- **Deep Ink**: Primary text in light appearance.
- **Slate Muted**: Helper text, field hints, and secondary labels.
- **Fine Divider**: Panel boundaries, table rules, and section separators.
- **Alert Red**: Invalid field and storage error treatment.
- **Night Canvas**: Page background in dark appearance.
- **Night Surface**: Main panels, fields, and header in dark appearance.
- **Night Soft Surface**: Secondary surfaces and inactive rows in dark appearance.
- **Light Ink**: Primary text in dark appearance.
- **Night Muted**: Helper text and secondary labels in dark appearance.
- **Night Divider**: Panel boundaries and table rules in dark appearance.
- **Night Alert**: Invalid field and storage error treatment in dark appearance.

**The One Blue Rule.** Use blue to mark an action, selection, link, or focus state. Keep the surrounding data surfaces neutral.

## Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback), for the HPP-Ku wordmark only.  
**Body Font:** Plus Jakarta Sans (with sans-serif fallback).  
**Label/Mono Font:** Plus Jakarta Sans; numeric prices use tabular figures.

**Character:** Friendly and direct, with compact sans-serif text for fast scanning. The restrained serif wordmark preserves HPP-Ku's identity without turning calculator headings into editorial display type.

### Hierarchy
- **Display** (600, 38px desktop / 32px mobile, line-height 1): The wordmark in the sticky header and footer.
- **Headline** (650, 28px desktop / 22px mobile, line-height 1.3): The page title.
- **Title** (650, 18px desktop / 16px mobile, line-height 1.35): Panel headings.
- **Body** (400, 14px, line-height 1.5): Form values, table content, and explanatory copy.
- **Label** (600, 12px, line-height 1.5): Field labels and control labels; helper text uses the compact 11px role.
- **Control** (400, 14px): Input values, table values, and select text at every breakpoint.
- **Summary**: HPP total 18px; selling price 32px desktop / 28px mobile; margin preset values 18px desktop / 16px mobile. Dialog titles use 22px; the footer wordmark uses 26px.

**The Wordmark Boundary Rule.** Keep Cormorant Garamond on the HPP-Ku wordmark; use Plus Jakarta Sans for calculator content.

## Layout

Use a centered workspace up to 1440px wide. The sticky header is compact, with the wordmark and product label at left and autosave/theme controls at right. Desktop places the ingredient, optional overhead, and margin editor beside a narrow HPP summary; the summary stays visible while scrolling when the viewport allows.

At widths below 1024px, use one column and put the editor before the summary. The compact bottom action bar keeps the selling price and import/copy actions within reach. On small screens, preserve one ingredient per row and contain horizontal scrolling inside the ingredient table; keep its name column pinned while the other columns move. Use compact 34px desktop / 32px mobile field shells with 14px text, and keep action controls at a 44px minimum height. In the overhead disclosure, give the monthly target input a full row on mobile, then align the monthly-cost label and value in one compact row. Keep page padding compact and use the same spacing rhythm between fields, panels, and sections.

## Elevation & Depth

Panels are flat at rest. Separate the page, panels, and table sections with cool tonal surfaces and fine borders; reserve a soft shadow for the transient notification. Short control-state transitions remain subtle, and the reduced-motion preference removes transitions.

### Shadow Vocabulary
- **Floating Notice**: The only ambient shadow, used to lift a temporary status notice above the page.

**The Flat-at-Rest Rule.** Do not add shadows to ordinary panels or controls; use surface tone and border edges to show grouping.

## Shapes

Use softly rounded rectangular panels and compact controls. Main panels have a 14px radius on desktop and tighten to 12px on mobile; smaller presets and warning blocks use a 9px radius. Radix buttons, badges, and field shells use a tighter 4px radius, while dialogs use an 8px radius. Keep a quiet 1px border and reserve a full pill shape for the common-cost suggestion chips. Let the ingredient table keep its square cell geometry and thin row rules so columns remain easy to compare.

## Components

### Buttons
- **Character:** Compact Radix controls with clear action hierarchy.
- **Primary:** Blue filled action for committing a recipe import or copying the recipe; keep the label short and the icon secondary.
- **Secondary / Ghost / Outline:** Soft blue for add actions, and neutral outline or ghost styles for import, reset, and low-emphasis actions.
- **Hover / Focus:** Accent the border or surface on hover. Keep the visible accent outline for keyboard focus. Mobile actions have a 44px minimum height.
- **Press:** A brief, subtle pressed response is used; honor reduced-motion preferences.

### Chips
- Use pill-shaped chips only for quick-add suggestions such as Sewa tempat, Gaji karyawan, and Listrik & air.
- Keep the chip surface white, the border quiet, the label ink-colored, and the plus icon blue.
- Use a compact 38px minimum height on desktop and a 44px touch target on mobile; keep fields rectangular.

### Cards / Containers
- **Corner Style:** Soft corners; 14px on desktop panels and 12px on mobile panels.
- **Background:** White or dark slate surface, with a softer neutral for secondary groups and inactive ingredient rows.
- **Shadow Strategy:** Flat at rest; the transient notification alone uses a soft shadow.
- **Border:** One quiet border separates panels, the summary, the table, and disclosure sections.
- **Internal Padding:** Panel headings and bodies use compact 16–24px spacing, tightening on mobile.

### Inputs / Fields
- **Style:** Radix text fields and selects use the current theme surface. Place a short visible label above each value; use Rp prefixes, unit selectors, or suffixes where they clarify the field.
- **Numbers:** Align numeric inputs to the right and use tabular figures for prices and totals. Keep field and select text at 14px across devices.
- **Focus / Error:** Preserve Radix keyboard focus treatment. Invalid active ingredient values receive an explicit red field state and corrective text.
- **Mobile Size:** Use compact 34px desktop / 32px mobile field shells with 14px text. Keep action buttons and icon buttons at a 44px minimum height.

### Navigation
- **Style:** A compact sticky header with the HPP-Ku wordmark, product label, autosave status, and a single theme control. Do not add a full navigation bar to this one-page calculator.

### Ingredient Table
- Keep every ingredient and packaging component in one row across devices. Allow horizontal scrolling only within the table and keep the name column sticky.
- Show inactive rows with a softened surface while retaining their values. Make the active switch state explicit.
- Use concise column labels and tabular prices; show clear input errors instead of a false zero cost.

### Overhead Disclosure
- Keep monthly or per-cup overhead optional inside a disclosure. Show the current per-cup amount in the summary row, and explain when monthly costs still need a target cup count.
- On mobile, place the monthly target field at full width and show its monthly-cost label and value on one aligned row.
- When there are no overhead rows, offer common costs as wrapping chips, followed by a compact Tambah biaya action.

### Margin Controls
- Keep pricing controls focused on margin: three clearly labeled presets, a slider, and a direct percentage field.
- Use the same restrained selected treatment across presets and avoid introducing a separate markup mode.

### HPP Summary
- Show ingredient, packaging, and operational cost breakdown, total HPP, selling price, and estimated profit in a single compact panel.
- On mobile, place the summary after the ingredient, overhead, and margin editor. Retain the compact bottom price/import/copy action bar.
- Copy only active ingredients with the recipe's overhead and margin settings. Preview pasted recipe details and require an explicit apply action before replacing the current recipe.

## Do's and Don'ts

### Do:
- **Do** keep field labels visible and copy plain, brief, and Indonesian.
- **Do** use blue for primary actions, selection, links, and visible focus.
- **Do** use 34px desktop / 32px mobile field shells with 14px input text, while keeping mobile action controls at least 44px tall.
- **Do** put the editor before the summary on mobile and keep the selling price available in the bottom action bar.
- **Do** keep table scrolling inside the ingredient table and preserve its pinned name column.
- **Do** show explicit saving, saved, invalid, and error states.

### Don't:
- **Don't** add a large marketing hero, decorative image, or page-entry animation.
- **Don't** bring back the cream-and-espresso screen palette; use the documented light or dark theme.
- **Don't** move the mobile summary ahead of ingredient and overhead entry.
- **Don't** remove labels to make the ingredient table fit; keep its internal horizontal scroll.
- **Don't** present invalid units or zero package quantities as a valid zero HPP.
