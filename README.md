# ShadCN Dashboard Starter Template

A ShadCN dashboard starter template built with **Next.js 15** and **TypeScript**. This starter template simplifies the process of setting up a consistent layout for your projects.

---

## Table of Contents

- [Installation](#installation)
- [Customization](#customization)
  - [Changing Colors](#changing-colors)
  - [Menus Configuration](#menus-configuration)

---

## Installation

Follow these steps to get started:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/rifkiahmadfahrezi/next-dashboard-starter
   ```

   You can either clone this repository to start your project or click the **"Use this template"** button on the repository page.

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Run the Development Server**

   ```bash
   pnpm run dev
   ```

---

## Customization

This template is built with [ShadCN UI](https://ui.shadcn.com/docs), a collection of reusable components that are easy to install and customize.

### Changing Colors

To customize the colors:

1. Visit the [ShadCN Themes](https://ui.shadcn.com/themes) page.
2. Choose or customize a color palette using HSL values. For reference, visit the [ShadCN Colors](https://ui.shadcn.com/colors) page.
3. Copy the color template and paste it into the `src/app/globals.css` file.
4. [Reference from ShadCN](https://ui.shadcn.com/docs/theming)

### Menus Configuration

1. **Navbar Menus**
   - Update the navigation menus in the file:
     ```
     src/components/navbar/navbar-menu.ts
     ```

2. **Dashboard Sidebar Menus**
   - Modify the sidebar menus in the file:
     ```
     src/components/sidebar/dashboard-menu.ts
     ```
   - For menu icons, visit [Lucide Icons](https://lucide.dev/icons/).
   - Copy the desired icon name and use it in the menu configuration.


