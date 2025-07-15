const helpArticles = {
    "Google Chrome": "Try clearing your cache or checking your internet connection.",
    "Java App": "Ensure Java is installed and updated to the latest version.",
    "Microsoft Office": "Try repairing the Office installation from Control Panel.",
    "Windows": "Restart your PC and check for updates in Settings."
};

// ...existing code...
document.querySelectorAll('.sidebar-box').forEach(box => {
    box.addEventListener('click', function(e) {
        e.stopPropagation();
        const label = this.getAttribute('data-label');
        const articleBox = document.getElementById('article-box');
        document.getElementById('article-title').textContent = label;
        document.getElementById('article-content').textContent = helpArticles[label] || "";
        articleBox.style.display = 'block';
        // Remove dynamic positioning!
    });
});
// ...existing code...

// Hide the article box when clicking outside
document.body.addEventListener('click', function() {
    document.getElementById('article-box').style.display = 'none';
});

// Prevent closing when clicking inside the article box
document.getElementById('article-box').addEventListener('click', function(e) {
    e.stopPropagation();
});