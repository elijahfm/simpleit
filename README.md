# Simple Website

This is a simple website project designed to assist with common IT issues.

## Project Structure

```
simple-website
├── src
│   ├── images
│   ├── python
│   │   └── clear_java_cache.py
│   │   └── clear_teams_cache.py
│   │   └── run_windows_update.py
│   ├── scripts
│   │   └── main.js
│   └── styles
│   │   └── main.css
│   └── index.html
└── README.md
└── server.js
└── package-lock.json
└── package.json
```

## Purpose

A common-practice troubleshooting guide made simple to solve a majority of computer and app related issues.

1. Streamlines IT tasks
2. Provides self-help content right next to actionable scripts
3. Ensures safer script execution by being offline and local-only

## Setup and Usage

- Requirements
   - Node.js (v18+ recommended)
   - Python 3.x installed and in ```PATH```

- Installation
```bash
git clone https://github.com/elijahfm/simpleit.git
cd simpleit
npm install
```
- Running the App
```bash
node server.js
```

## Security Notes

- The app is *designed for local use only* - do not expose to the internet (opening firewall, hosting on cloud, bind node to server without restricting access)
- Add any interactive features in `src/scripts/main.js`.

## License

This project is open source and available under the [MIT License](LICENSE).
