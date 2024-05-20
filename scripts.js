// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const page = path.split("/").pop().split(".")[0];

    // Apply the page-specific background class to the body
    document.body.className = `${page}-bg`;

    // Determine which content file to load based on the page
    let contentFile = '';
    switch (page) {
        case 'index':
            contentFile = 'content/home.txt';
            break;
        case 'about':
            contentFile = 'content/about.txt';
            break;
        case 'services':
            contentFile = 'content/services.txt';
            break;
        case 'contact':
            contentFile = 'content/contact.txt';
            break;
        case 'booksession':
            contentFile = 'content/booking.txt';
            break;
        default:
            contentFile = 'content/home.txt';
    }

    // Load the content into the `content` div
    fetch(contentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        }).catch(error => console.error('Error loading the content: ', error));
});
