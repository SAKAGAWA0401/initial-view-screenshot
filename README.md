# Initial View Screenshot

This is a simple Node.js script using Puppeteer to take initial view screenshots of websites. The primary purpose of this tool is to capture screenshots for the **portfolio page** of [sloperiver.com](https://sloperiver.com).

## How to Use

### 1. Clone the repository

```bash
git clone https://github.com/SAKAGAWA0401/initial-view-screenshot.git
cd initial-view-screenshot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the script

```bash
node screenshot.js <site-name>
```
For example, to take a screenshot of example.com, run:

```bash
node screenshot.js example.com
```
This will save a screenshot as `screenshot-example.com-1280x720.png` in the project directory.

### 4. Customization

- The script is currently set to take a screenshot at `1280x720` resolution and save it in `.png` format.
- You can modify the viewport size, user agent, or any other Puppeteer settings in `screenshot.js` to fit your specific needs.
