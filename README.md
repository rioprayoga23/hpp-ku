# HPP-Ku

A drink cost calculator for ingredient costs, selling prices, and estimated profit per cup or production batch.

## Features

- Single account login.
- Create, edit, open, and delete recipes.
- Centralized Supabase storage shared across devices.
- Cost calculations for ingredients, packaging, operating costs, HPP, margin, selling price, and profit.
- Automatic calculations for any production quantity.
- Recipe categories and category filtering.
- Saved recipes can be used as ingredients in other recipes, including nested recipe details.
- Copy recipe tables to spreadsheets.
- Export all recipes to Excel with one sheet per category.
- Responsive light and dark themes built with DaisyUI.

## Architecture

- **Frontend:** React with the Next.js App Router.
- **Backend:** Next.js Route Handlers for authentication and recipe operations.
- **Database:** Supabase PostgreSQL for accounts, sessions, and recipe data.
- **UI:** DaisyUI and Tailwind CSS.
- **Calculations:** A separate model module handles data normalization, HPP, selling price, margin, and profit calculations.
- **Data transfer:** A dedicated module handles imports, spreadsheet copy, and Excel export.
- **Storage:** The app does not use `localStorage`; Supabase.
