# How to Edit bikefamilies.nyc

This guide explains how to make edits to your bikefamilies.nyc website locally and deploy them to GitHub Pages.

## ✅ Confirmation

- **This repository is for bikefamilies.nyc** (NOT ridewhee.com)
- **Making changes here will NOT affect ridewhee.com**
- **Your domain is already connected**: bikefamilies.nyc

## 📁 Project Structure

This is a React/TypeScript project built with:
- **Vite** - Build tool
- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn-ui** - UI components

Main files to edit:
- `src/pages/Index.tsx` - Main homepage
- `src/components/` - Reusable components
- `src/App.tsx` - App routing and layout
- `src/index.css` - Global styles
- `public/` - Static assets (images, favicon, etc.)

## 🚀 Quick Start

### 1. Install Dependencies (First Time Only)

```bash
cd "/Users/evan/Documents/brooklyn-bike-share"
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

This will:
- Start a local development server (usually at http://localhost:8080)
- Auto-reload when you make changes
- Show you a preview of your site

### 3. Make Your Edits

Edit any files in the `src/` directory. The dev server will automatically reload.

### 4. Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with the production-ready files.

### 5. Deploy to GitHub Pages

```bash
# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Update: describe your changes here"

# Push to GitHub
git push
```

**GitHub Pages will automatically deploy** your changes (takes 1-2 minutes).

## 📝 Common Editing Tasks

### Change Text Content
- Edit `src/pages/Index.tsx` for homepage content
- Look for text inside JSX elements (between `<p>`, `<h1>`, etc.)

### Change Images
1. Add new images to `public/` or `src/assets/`
2. Update the image paths in your components
3. Example: `<img src="/image.png" />` or `import image from '@/assets/image.png'`

### Change Colors/Styles
- Edit `tailwind.config.ts` for theme colors
- Edit `src/index.css` for global styles
- Use Tailwind classes directly in components (e.g., `className="bg-blue-500"`)

### Add New Pages
1. Create a new file in `src/pages/`
2. Add a route in `src/App.tsx`
3. Update navigation links if needed

## 🔍 Verify Your Changes

1. **Local Testing**: Run `npm run dev` and check http://localhost:8080
2. **After Deployment**: Visit https://bikefamilies.nyc (wait 1-2 minutes after pushing)

## ⚠️ Important Notes

- **Always test locally first** with `npm run dev`
- **Build before pushing** if you want to verify the production build works
- **GitHub Pages auto-deploys** when you push to the `main` branch
- **The CNAME file** must stay as "bikefamilies.nyc" (don't delete it!)

## 🆘 Troubleshooting

### Changes not showing up?
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check the "Actions" tab in your GitHub repository for deployment status
- Clear your browser cache (Cmd+Shift+R on Mac)

### Build errors?
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: Look for red underlines in your editor
- Check the terminal for error messages

### Need to check what's deployed?
- Visit: https://evanpants.github.io/brooklyn-bike-share/ (GitHub Pages URL)
- Or: https://bikefamilies.nyc (your custom domain)

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

**Remember**: This is your bikefamilies.nyc site. The ridewhee.com site is in a completely separate folder and won't be affected by changes here.


