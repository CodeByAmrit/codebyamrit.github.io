// Generate a nonce value for inline scripts
function generateNonce() {
    return btoa(Math.random().toString()).substr(0, 16); // Generate a 16-character nonce
}

// Inject the nonce into the Content-Security-Policy header and the inline script
document.addEventListener('DOMContentLoaded', function () {
    const nonce = generateNonce();

    // Update the CSP meta tag with the generated nonce value
    const cspHeader = document.getElementById('csp-header');
    if (cspHeader) {
        cspHeader.setAttribute('content', `default-src 'self'; img-src 'self' https://*; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'nonce-${nonce}' https://static.cloudflareinsights.com https://codebyamrit.co.in/js; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.github.com;`);
    }

    // Create a JSON-LD script element and inject it into the page
    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.nonce = nonce;
    jsonLdScript.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Amrit Sharma",
        "url": "https://codebyamrit.co.in",
        "sameAs": [
            "https://github.com/codebyamrit",
            "https://www.instagram.com/warrior_amrit"
        ],
        "jobTitle": "Full Stack Developer",
        "description": "Amrit Sharma is a Full Stack Developer and creator of CodeByAmrit. Explore projects, resume, and contact details.",
        "image": "https://codebyamrit.co.in/images/logoMain.png"
    });

    // Append the script to the head
    document.head.appendChild(jsonLdScript);
});
