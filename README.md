# Simple Website

This is a simple website project designed to assist with common IT issues.

## Project Structure

```
simple-website
├── src
│   ├── index.html
│   └── assets
│       ├── images
│       ├── python
│       ├── scripts
│       └── styles
├── README.md
├── server.js
├── package-lock.json
└── package.json
```

## Purpose

A common-practice troubleshooting guide made simple to solve a majority of computer and app related issues.

1. Streamlines IT tasks
2. Provides self-help content right next to actionable scripts
3. Ensures safer script execution by being offline and local-only

## Process
   ### Node.js Backend
   The app runs a local Express.js server that:
   1. Serves static frontend files (`index.html`, CSS, JS, help docs)
   2. Accepts HTTP requests from the frontend (e.g., to run Python scripts)
   3. Uses `child_process` to securely execute Python scripts when triggered
   ### Python Scipts
   Python is used to interact with the OS because of its cross-platform capabilities and access to system-level features. Each script handles one task, such as clearing Teams or Office caches, or starting Windows Update.
   - Python scripts live in `src/assets/python/`
   ### Frontend (HTML/JS)
   - `index.html` provides a simple interface with buttons and help articles.
   - - `main.js` contains JavaScript that listens for user clicks and sends fetch requests to the backend (e.g., `/clear-teams-cache`).

## Design Reason
   ### JavaScript Frontend → Python Backend Bridge
   JavaScript cannot execute system-level commands directly for security reasons. Instead, the frontend sends a message to the Node backend, which runs the appropriate Python script using `child_process.spawn`.
   - Keeps security boundaries clear
   - Makes frontend and backend responsibilities distinct
   - Lets us use Python’s powerful system tools without exposing them directly to the browser
   ### Chrome Cache Script – API Cache Only
   The script for clearing Chrome's cache is limited to **API cache only**. This is intentional:
   - Full Chrome cache clearing would require interfering with user-level profiles, which poses privacy and security risks.
   - API cache clearing targets only specific app-related cache files (e.g., related to web apps or service workers).
   - This tradeoff allows basic troubleshooting without compromising user data.

## Setup and Usage

- Requirements
   - Node.js (v18+ recommended)
   - Python 3.x installed and in `PATH`

1. Installation
```bash
git clone https://github.com/elijahfm/simpleit.git
cd simpleit
npm install
```
2. Running the App
```bash
node server.js
```

3. Open http://localhost:3000 in your browser.

## Security Notes

- The app is **designed for local use only** - do not expose to the internet (opening firewall, hosting on cloud, bind node to server without restricting access)
- Add any interactive features in `src/assets/scripts/main.js`.

## License

This project is open source and available under the [MIT License](LICENSE).
