const helpArticles = {
    "Google Chrome": "1",
    "Java App": "2",
    "Microsoft Office": "3",
    "Windows": "4"
};

document.querySelectorAll('.sidebar-box').forEach(box => {
    box.addEventListener('click', function(e) {
        e.stopPropagation();
        const label = this.getAttribute('data-label');
        const articleBox = document.getElementById('article-box');
        document.getElementById('article-title').textContent = label;
        document.getElementById('article-content').textContent = helpArticles[label] || "";
        articleBox.style.display = 'block';

        // Position the article box beside the clicked icon
        const rect = this.getBoundingClientRect();
        articleBox.style.position = 'absolute';
        articleBox.style.left = (rect.right + 20 + window.scrollX) + 'px';
        articleBox.style.top = (rect.top + window.scrollY) + 'px';
    });
});

// Hide the article box when clicking outside
document.body.addEventListener('click', function() {
    document.getElementById('article-box').style.display = 'none';
});

// Prevent closing when clicking inside the article box
document.getElementById('article-box').addEventListener('click', function(e) {
    e.stopPropagation();
});