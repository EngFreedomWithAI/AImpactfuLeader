// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const page = path.split("/").pop().split(".")[0];

    // Apply the page-specific background class to the body
    document.body.className = `${page}-bg`;

  // Apply the default background initially
  document.body.className = 'default-bg';

  // Determine which content file to load based on the page
    let contentFile = '';
    switch (page) {
      case 'index':
          document.body.className = 'index-bg';
          contentFile = 'content/home.txt';
          break;
      case 'about':
          document.body.className = 'about-bg';
          contentFile = 'content/about.txt';
          break;
      case 'services':
          document.body.className = 'services-bg';
          contentFile = 'content/services.txt';
          break;
      case 'contact':
          document.body.className = 'contact-bg';
          contentFile = 'content/contact.txt';
          break;
      case 'booksession':
          document.body.className = 'booksession-bg';
          contentFile = 'content/booking.txt';
          break;
      default:
          document.body.className = 'default-bg';
          contentFile = 'content/home.txt';
    }


    // Load the content into the `content` div
    fetch(contentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        }).catch(error => console.error('Error loading the content: ', error));
}
);
