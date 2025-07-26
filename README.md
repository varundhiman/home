# Varun Dhiman - Personal Website

A modern, dark-themed React landing page for varundhiman.com featuring three main sections accessible through interactive icon cards.

## Features

- **Dark Theme**: Modern glassmorphism design with gradient backgrounds
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Icons**: Hover effects with smooth animations
- **Three Main Sections**:
  - **Weight**: Fitness tracking application (weight.varundhiman.com)
  - **Blog**: Personal thoughts and insights (blog.varundhiman.com)
  - **Reviews**: Product and service recommendations (review.varundhiman.com)

## Tech Stack

- React 18
- CSS3 with modern features (backdrop-filter, gradients)
- SVG icons
- Responsive grid layout

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/varundhiman/home.git
cd home
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── IconCard.js      # Reusable card component
│   └── Icons.js         # SVG icon components
├── App.js               # Main application component
├── App.css              # Component styles
├── index.js             # React entry point
└── index.css            # Global styles
```

## Deployment

To build for production:

```bash
npm run build
```

This creates a `build` folder with optimized static files ready for deployment.

## Adding New Icons

To add more functionality, simply update the `iconData` array in `src/App.js`:

```javascript
const iconData = [
  // existing icons...
  {
    href: 'https://new-section.varundhiman.com',
    icon: <NewIcon />,
    title: 'New Section',
    description: 'Description of new section',
    ariaLabel: 'New Section'
  }
];
```

Don't forget to create the corresponding icon component in `src/components/Icons.js`.

## License

This project is private and proprietary.