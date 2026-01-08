# How to Run the Development Server - Step by Step Instructions

## Prerequisites Check

First, make sure you have Node.js installed:

1. Open Terminal (on Mac: press `Cmd + Space`, type "Terminal", press Enter)
2. Type this command and press Enter:
   ```bash
   node --version
   ```
3. You should see a version number (like `v24.11.1`). If you see "command not found", install Node.js from https://nodejs.org/

## Step-by-Step: Running the Development Server

### Step 1: Navigate to the Project Folder

In Terminal, type this exact command (or copy and paste it):

```bash
cd "/Users/evan/Documents/brooklyn-bike-share"
```

Press Enter. You should now be in the project directory.

### Step 2: Verify You're in the Right Place

Type this to confirm:
```bash
ls package.json
```

You should see: `package.json` listed. If you see "No such file or directory", you're in the wrong folder.

### Step 3: Install Dependencies (First Time Only)

If you haven't run this yet, or if you just cloned the repo:
```bash
npm install
```

Wait for it to finish (it will say "added X packages" when done).

### Step 4: Start the Development Server

Type this command:
```bash
npm run dev
```

**Important:** Keep this Terminal window open! The server runs in this window.

### Step 5: Look for the Server URL

After running `npm run dev`, you should see output that looks like this:

```
  VITE v5.4.19  ready in 500 ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://[::1]:8080/
  ➜  Network: http://192.168.x.x:8080/
```

**The important line is: `➜  Local:   http://localhost:8080/`**

### Step 6: Open the URL in Your Browser

1. **Copy** the Local URL (something like `http://localhost:8080/`)
2. **Open your web browser** (Chrome, Firefox, Safari, etc.)
3. **Paste the URL** into the address bar and press Enter
4. Your website should load!

## Troubleshooting

### Problem: "localhost:8080 refused to connect" or "This site can't be reached"

**Solutions:**

1. **Check if the server is actually running:**
   - Look at your Terminal window where you ran `npm run dev`
   - Do you see the "Local:" URL? If not, wait a few more seconds for it to start
   - If you see any error messages, read them carefully

2. **Try a different URL:**
   - If Vite shows a different port (like 5173), use that instead
   - Look for any line that says "Local:" in the Terminal output

3. **Try these alternative URLs:**
   - `http://127.0.0.1:8080` (alternative to localhost)
   - `http://localhost:5173` (Vite's default port if 8080 is busy)

4. **Check if port 8080 is already in use:**
   ```bash
   lsof -ti:8080
   ```
   - If this shows a number, something else is using port 8080
   - Kill it with: `kill -9 <number>` (replace <number> with what you saw)
   - Or change the port in `vite.config.ts` to `5173`

5. **Make sure you're using HTTP, not HTTPS:**
   - Use: `http://localhost:8080`
   - NOT: `https://localhost:8080`

### Problem: "Cannot find module" or "npm: command not found"

**Solution:**
- Make sure Node.js is installed: `node --version`
- If it's not installed, go to https://nodejs.org/ and download the LTS version

### Problem: The server starts but the page is blank or shows an error

**Solutions:**

1. **Check the browser console:**
   - Right-click on the page → "Inspect" or "Inspect Element"
   - Click the "Console" tab
   - Look for red error messages

2. **Check the Terminal output:**
   - Look for any error messages in the Terminal where you ran `npm run dev`

3. **Try rebuilding:**
   - Press `Ctrl + C` in Terminal to stop the server
   - Run `npm install` again
   - Run `npm run dev` again

### Problem: Changes I make don't show up

**Solution:**
- The page should automatically refresh (this is called "hot module replacement")
- If it doesn't, try manually refreshing the browser (Cmd + R on Mac, Ctrl + R on Windows)
- Make sure you saved the file you edited

## Stopping the Server

When you're done:

1. Go back to the Terminal window where the server is running
2. Press `Ctrl + C` (or `Cmd + C` on Mac)
3. The server will stop

## Quick Reference Commands

```bash
# Navigate to project
cd "/Users/evan/Documents/brooklyn-bike-share"

# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Stop server (press Ctrl+C or Cmd+C in the Terminal window)

# Build for production (when ready to deploy)
npm run build

# Preview production build locally
npm run preview
```

## Still Having Issues?

1. **Check the exact error message** in Terminal and share it
2. **Check what URL Vite actually displayed** when you ran `npm run dev`
3. **Try these URLs one by one:**
   - `http://localhost:8080`
   - `http://127.0.0.1:8080`
   - `http://localhost:5173`
   - `http://127.0.0.1:5173`

4. **Verify the server is running:**
   - Don't close the Terminal window
   - You should see the "Local:" URL in the output
   - If you don't see it, something went wrong - check for error messages

