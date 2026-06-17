# Outing Planner App

## Design System: Vivid Editorial Minimalism

A sophisticated, minimalist outing planning application that combines editorial elegance with modern digital interactions.

### Features

- **Personalized Filter Configuration**: Four-tab filter system covering Place/Hour, Basics, Preferences, and Requirements
- **Venue Matching**: Real-time venue recommendations based on user preferences
- **Visual Design**: Editorial typography, vibrant gradient accents, and generous whitespace
- **Responsive Layout**: Optimized for both desktop and mobile experiences

### Design Highlights

- **Typography**: Young Serif for headlines + Plus Jakarta Sans for body text
- **Color Palette**: Deep navy blue (#15157d) to vibrant coral (#ad3300) gradient
- **Components**: Buttons, chips, checkboxes, search inputs with premium styling
- **Spacing**: 8px base unit with generous margins and section gaps

### File Structure

```
src/
├── design-system/
│   └── design-tokens.ts
├── components/
│   ├── Button.tsx
│   ├── Chip.tsx
│   ├── Checkbox.tsx
│   └── SearchInput.tsx
├── screens/
│   └── FiltersScreen.tsx
├── styles/
│   ├── global.css
│   ├── Button.css
│   ├── Chip.css
│   ├── Checkbox.css
│   ├── SearchInput.css
│   └── FiltersScreen.css
└── App.tsx
```

### Getting Started

```bash
npm install
npm start
```

### Design System Values

- **Primary Gradient**: `linear-gradient(135deg, #15157d 0%, #ad3300 100%)`
- **Surface Color**: `#fcf9f8`
- **Text Color**: `#1c1b1b`
- **Base Spacing Unit**: `8px`
- **Border Radius**: `0.5rem` (default), `0.75rem` (containers), `9999px` (pills)
