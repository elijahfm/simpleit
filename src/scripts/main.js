function clearCache() {
    if ('caches' in window) {
        caches.keys().then(function(names) {
            for (let name of names) caches.delete(name);
        });
        alert("Cache cleared (if this site used the Cache API).");
    } else {
        alert("Cache API not supported.");
    }
}
const helpArticles = {
    "Google Chrome": `
        <button class="clear-cache-btn-article" onclick="clearCache()" title="Clear Cache">Clear Cache</button>
        <strong>Clearing your cache:</strong>
        <ol>
            <li>Find the ellipses (three dots) in the top right of the browser.</li>
            <li>Go to the History option (may need to click twice).</li>
            <li>On the left side, click "Delete browsing data".</li>
            <li>Set your time range to "All time" and delete.</li>
        </ol>
    `,
    "Java App": `
        <strong>Clearing your cache:</strong>
        <ol>
            <li>In the bottom of the screen go to the Windows search function.</li>
            <li>Search for "Configure Java" and click the app.</li>
            <li>Under temporary internet files click on "settings".</li>
            <li>Near the bottom you will click "Delete Files".</li>
            <li>The "Trace and Log Files" and "Cached Applications and Applets" will be the only checked options.</li>
            <li>Click "Ok" to confirm and delete cache.</li>
        </ol>
    `,
    "Microsoft Office": `
        <button class="clear-cache-btn-article office" onclick="clearOfficeCache()" title="Clear Cache">Clear Cache</button>
        <strong>Clearing your cache:</strong>
        <ol>
            <li>In the Microsoft application open up "File" in top left</li>
            <li>Go to the options near the bottom of the side menu.</li>
            <li>Go to the "Save" tab and then "Cache Settings"</li>
            li>Click tab option "Delete cached files" near the bottom.</li>
        </ol>
`,
    "Windows": `
        <strong>Updating Windows:</strong>
        <ol>
            <li>In the bottom of the screen navigate to the Windows search function.</li>
            <li>Search for "Windows Update Settings" and click the app.</li>
            <li>Click the "Check for updates" button.</li>
            <li>Follow the prompts to install any updates.</li>
            <li>Restart your computer if prompted.</li>
        </ol>
    `,
};

// When setting article content, use innerHTML
document.querySelectorAll('.sidebar-box').forEach(box => {
    box.addEventListener('click', function(e) {
        e.stopPropagation();
        const label = this.getAttribute('data-label');
        const articleBox = document.getElementById('article-box');
        document.getElementById('article-title').textContent = label;
        document.getElementById('article-content').innerHTML = helpArticles[label] || "";
        articleBox.style.display = 'block';
    });
});

// ...rest of your code...


// Checking to see if hiding body is ok
document.body.addEventListener('click', function() {
    document.getElementById('article-box').style.display = 'none';
});

// Prevents closing article box when clicked
document.getElementById('article-box').addEventListener('click', function(e) {
    e.stopPropagation();
});
function clearCache() {
    if ('caches' in window) {
        caches.keys().then(function(names) {
            for (let name of names) caches.delete(name);
        });
        alert("Cache cleared (if this site used the Cache API).");
    } else {
        alert("Cache API not supported.");
    }
}
function clearOfficeCache() {
    fetch('/clear-office-cache', { method: 'POST' })
        .then(res => res.text())
        .then(msg => alert(msg))
        .catch(err => alert('Failed to clear Office cache.'));
}