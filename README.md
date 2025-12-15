# GreenScape Gardens - Modern Gardening Website

A modern, responsive React single-page application for a gardening company featuring smooth scrolling animations and dynamic background changes.

## Features

✨ **8 Interactive Sections:**
1. **Hero Section** - Animated introduction with company branding
2. **Previous Work Gallery** - Showcase of lawn care projects with hover effects
3. **Company Description** - About the company with statistics
4. **Location Map** - Interactive Google Maps integration with contact info
5. **Video Showcase** - Embedded YouTube video demonstrating skills
6. **About Us** - Team members and company values
7. **Services** - Detailed service offerings with feature lists
8. **Contact Form** - Interactive contact form with validation

🎨 **Modern Design Features:**
- Smooth scroll animations using Framer Motion
- Dynamic background color changes on scroll
- Glassmorphism UI elements with backdrop blur effects
- Responsive design for all screen sizes
- Custom scrollbar styling
- Hover animations and micro-interactions

🚀 **Technical Stack:**
- React 18
- Framer Motion for animations
- React Intersection Observer for scroll detection
- CSS3 with modern features (backdrop-filter, gradients)
- Responsive grid layouts

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd gardening-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Customization

### Changing Background Colors
Edit the `bgColor` values in the `sections` array in `src/App.js`:

```javascript
const sections = [
  { id: 'hero', component: Hero, bgColor: '#2d5016' },
  // ... other sections
];
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Add the component to the sections array in `App.js`
3. Import the component at the top of `App.js`

### Modifying Content
- **Images**: Replace image URLs in component files with your own
- **Text**: Edit the content directly in each component
- **Styling**: Modify the corresponding CSS files in `src/components/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Lazy loading of images
- Optimized animations with GPU acceleration
- Efficient scroll event handling
- Responsive image sizing

## License

This project is open source and available under the [MIT License](LICENSE).