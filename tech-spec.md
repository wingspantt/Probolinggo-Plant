# Production Tracking Dashboard - Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Customization |
|-----------|---------|---------------|
| Card | KPI cards, chart containers | Custom shadows, hover effects |
| Button | Actions, navigation | Custom colors, sizes |
| Badge | Status indicators | Custom color variants |
| Table | Production data display | Custom row hover, sorting |
| Progress | Inventory levels | Color-coded based on value |
| Tabs | Section navigation | Custom active state |
| DropdownMenu | Filters, user menu | Custom styling |
| Avatar | User profile | - |
| Separator | Visual dividers | - |
| Skeleton | Loading states | - |
| Tooltip | Chart hover info | - |
| Select | Date range, filters | - |

### Third-Party Components

| Component | Registry | Purpose |
|-----------|----------|---------|
| Recharts | npm | Production charts (Line, Bar, Pie) |
| Lucide React | npm | Icons throughout |

### Custom Components

| Component | Purpose | Props |
|-----------|---------|-------|
| KPICard | Key metric display | title, value, change, icon, color |
| ProductionChart | Line/Bar charts | data, type, title |
| StatusBadge | Production status | status, size |
| InventoryBar | Stock level display | name, current, max, unit |
| ReactorCard | Reactor status | name, status, lastUsed, runs |
| ProductionTable | Data table | data, columns, pagination |
| AnimatedNumber | Counter animation | value, duration, suffix |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load fade-in | Framer Motion | AnimatePresence + motion.div | Low |
| KPI card stagger | Framer Motion | staggerChildren variant | Medium |
| Number counter | Custom hook | useCountUp with requestAnimationFrame | Medium |
| Card hover lift | CSS/Tailwind | hover:translate-y + shadow transition | Low |
| Chart animations | Recharts | built-in animation props | Low |
| Table row hover | CSS/Tailwind | hover:bg-color transition | Low |
| Progress bar fill | Framer Motion | animate width on mount | Low |
| Status pulse | CSS | animate-pulse keyframes | Low |
| Scroll reveal | Framer Motion | whileInView prop | Medium |
| Tab transitions | Framer Motion | AnimatePresence for content | Medium |

---

## Animation Library Choices

### Primary: Framer Motion
- React-native integration
- Declarative API
- AnimatePresence for mount/unmount
- whileInView for scroll triggers
- Gesture support

### Secondary: CSS/Tailwind
- Simple hover states
- Transitions
- Keyframe animations (pulse, spin)

### Chart Animations: Recharts
- Built-in chart animations
- Tooltip interactions
- Responsive containers

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── data/
│       └── production-data.json    # Processed Excel data
├── src/
│   ├── components/
│   │   ├── ui/                     # shadcn components
│   │   ├── KPICard.tsx
│   │   ├── ProductionChart.tsx
│   │   ├── StatusBadge.tsx
│   │   ├── InventoryBar.tsx
│   │   ├── ReactorCard.tsx
│   │   ├── ProductionTable.tsx
│   │   ├── AnimatedNumber.tsx
│   │   └── Header.tsx
│   ├── hooks/
│   │   ├── useCountUp.ts
│   │   └── useProductionData.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── dataProcessor.ts        # Excel data processing
│   ├── types/
│   │   └── production.ts           # TypeScript interfaces
│   ├── data/
│   │   └── production-data.ts      # Raw data import
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── KPISection.tsx
│   │   ├── ChartsSection.tsx
│   │   ├── StatusSection.tsx
│   │   ├── TableSection.tsx
│   │   ├── InventorySection.tsx
│   │   └── ReactorSection.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Dependencies

### Core
- react
- react-dom
- typescript
- vite

### UI
- tailwindcss
- @radix-ui/* (via shadcn)
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Animation
- framer-motion

### Charts
- recharts

### Data Processing
- xlsx (for initial data conversion)

---

## Data Structure

### Production Data Types

```typescript
interface BriquetteProduction {
  id: number;
  date: string;
  rawMaterial: string;
  rawMaterialUsed: number;
  totalProduction: number;
  biocharConsumption: number | null;
  remainingRawMaterial: number | null;
  status: 'completed' | 'pending' | 'maintenance' | 'holiday';
}

interface BiocharProduction {
  id: number;
  date: string;
  reactor: 'Vertikal' | 'Horizontal';
  rawMaterial: string;
  rawMaterial1Used: number;
  rawMaterial2Used: number | null;
  totalRawMaterial: number;
  fuelVeneer: number | null;
  fuelPellet: number | null;
  unfinishedBiochar: number | null;
  productionYield: number | null;
  bioOil: number | null;
  kempuLevel: number | null;
  grease: number | null;
  notes: string | null;
}

interface SawdustProduction {
  id: number;
  date: string;
  rawMaterial: string;
  rawMaterialAmount: number;
  fuelVeneer: number;
  sawdustCrusherResult: number;
  status: 'completed' | 'pending' | 'maintenance' | 'holiday';
}

interface ProductionSummary {
  totalBriquette: number;
  totalBiochar: number;
  totalSawdust: number;
  avgEfficiency: number;
  materialUsage: {
    veneerHitam: number;
    briket: number;
    pellet: number;
    serbuk: number;
  };
}
```

---

## Color Configuration (Tailwind)

```javascript
// tailwind.config.js extend colors
colors: {
  primary: {
    DEFAULT: '#1E3A5F',
    dark: '#152A45',
    light: '#2A4A73',
  },
  secondary: {
    DEFAULT: '#3D8B75',
    dark: '#2D6B5A',
  },
  accent: {
    DEFAULT: '#E8B339',
    light: '#F5D78E',
  },
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
}
```

---

## Performance Considerations

1. **Animation Performance**
   - Use transform and opacity only
   - Add will-change to animated elements
   - Limit simultaneous animations

2. **Data Loading**
   - Static JSON import (no API calls needed)
   - Process data at build time

3. **Chart Performance**
   - Use ResponsiveContainer
   - Limit data points displayed
   - Debounce resize handlers

4. **Bundle Size**
   - Tree-shake unused components
   - Lazy load chart components if needed
