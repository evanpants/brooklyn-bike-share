# Brooklyn Bicycle Library

A website for the Brooklyn Bicycle Library - helping families try electric cargo bikes before buying.

## Project Information

**Website**: https://bikefamilies.nyc

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI framework
- **shadcn-ui** - UI component library
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Setup

```sh
# Step 1: Clone the repository
git clone https://github.com/evanpants/brooklyn-bike-share.git

# Step 2: Navigate to the project directory
cd brooklyn-bike-share

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The development server will start at http://localhost:8080 with auto-reloading and instant preview.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Project Structure

- `src/pages/` - Page components
- `src/components/` - Reusable components
- `src/components/ui/` - shadcn-ui components
- `public/` - Static assets
- `index.html` - HTML template

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by GitHub Actions (see `.github/workflows/deploy.yml`).

### Manual Deployment

If you need to deploy manually:

1. Build the project: `npm run build`
2. The `dist/` folder contains the production files
3. Push to GitHub and the workflow will automatically deploy

## Custom Domain

The site is configured to use the custom domain **bikefamilies.nyc** via the `CNAME` file. This is automatically handled by GitHub Pages.

## Contributing

1. Make your changes
2. Test locally with `npm run dev`
3. Commit and push your changes
4. GitHub Actions will automatically build and deploy
