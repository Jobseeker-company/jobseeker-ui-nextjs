# @jobseeker-company/jobseeker-ui

A comprehensive UI component library built with [React](https://react.dev/), [shadcn/ui](https://ui.shadcn.com/), and [Tailwind CSS v4](https://tailwindcss.com/).

## Installation

Install the package via npm:

```bash
npm install @jobseeker-company/jobseeker-ui
```

Make sure you also have the peer dependencies installed in your project:

```bash
npm install react react-dom tailwindcss
```

## Configuration

Import the CSS file in your root entry point (e.g., `main.tsx`, `App.tsx`, or `layout.tsx`):

```tsx
import '@jobseeker-company/jobseeker-ui/style.css'
```

## Usage

Import and use components in your React application:

```tsx
import { Button } from '@jobseeker-company/jobseeker-ui'

function App() {
  return <Button variant="default">Click me</Button>
}
```

## Running Storybook

To view and test components in isolation, you can run the Storybook documentation locally:

```bash
npm run storybook
```

This will start the Storybook server on `http://localhost:6006`.

## Heavy Components

The following components pull in significant third-party dependencies. Be mindful when importing them if bundle size is a critical concern, although tree-shaking should handle unused exports in modern build tools.

- **Chart**: Depends on `recharts`.
- **Calendar**: Depends on `react-day-picker` and `date-fns`.
- **Carousel**: Depends on `embla-carousel-react`.
- **Command**: Depends on `cmdk`.
- **Sidebar**: Contains complex layout logic.
