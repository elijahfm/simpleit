const helpArticles = {
    "Google Chrome": `
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
            <li>In the bottom of the screen go to the Windows seach function.</li>
            <li>Search for "Configure Java" and click the app.</li>
            <li>Under temporary internet files click on "settings".</li>
            <li>Near the bottom you wil click "Delete Files".</li>
            <li>The "Trace and Log Files" and "Cached Applications and Applets" will be the only checked options.</li>
            <li>Click "Ok" to confirm and delete cache.</li>
        </ol>
    `,
    "Microsoft Office": "Try repairing the Office installation from Control Panel.",
    "Windows": "Restart your PC and check for updates in Settings."
};

document.querySelectorAll('.sidebar-box').forEach(box => {
    box.addEventListener('click', function(e) {
        e.stopPropagation();
        const label = this.getAttribute('data-label');
        const articleBox = document.getElementById('article-box');
        document.getElementById('article-title').textContent = label;
        // Use innerHTML to render HTML content
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