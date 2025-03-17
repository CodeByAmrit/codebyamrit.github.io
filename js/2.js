
const sanskritQuotes = [
    {
        line: "संगणकः साधनं, मस्तिष्कः साध्यता।",
        meaning: "The computer is a tool, but the mind is the true capability."
    },
    {
        line: "यथा कार्यं तथा साधनम्।",
        meaning: "As is the task, so should be the method."
    },
    {
        line: "ज्ञानं परमं बलम्।",
        meaning: "Knowledge is the supreme strength."
    },
    {
        line: "सर्वं यन्त्रेण साध्यते।",
        meaning: "Everything is achievable through technology."
    },
    {
        line: "कर्मणि एव अधिकारः ते।",
        meaning: "Your right is only to work."
    },
    {
        line: "विकासस्य मूलं सृजनशीलता।",
        meaning: "Creativity is the root of development."
    },
    {
        line: "सत्यं वद, कोडं लिख।",
        meaning: "Speak the truth, write the code."
    },
    {
        line: "नवीनं न सुलभं किन्तु आवश्यकम्।",
        meaning: "Innovation is not easy, but it is essential."
    },
    {
        line: "यन्त्रं तु युक्त्या वर्धते।",
        meaning: "Technology grows with logic."
    },
    {
        line: "अहं सृजामि भविष्यं।",
        meaning: "I create the future."
    },
    {
        line: "संकल्पस्य सिद्धिः सदा परिश्रमे निहिता|",
        meaning: "The fulfillment of determination always lies in persistent effort."
    }
];

localStorage.setItem('theme', 'dark');

// Function to display a random Sanskrit quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * sanskritQuotes.length);
    const quote = sanskritQuotes[randomIndex];
    try {
        // Display the Sanskrit line and its meaning
        const quoteContainer = document.getElementById("quote-container");
        quoteContainer.innerHTML = `
    <p class="sanskrit-line">${quote.line}</p>
    
  `;
        document.getElementById("quote-container-english").innerHTML = `<p class="pt-5">${quote.meaning}</p>`;
    } catch (error) {
        console.log(error);
    }
    try {
        document.getElementById("quote-container-english").innerHTML = `<p class="pt-5">${quote.meaning}</p>`;
    } catch (error) {
        console.log(error);
    }

}

// Call the function on page load
window.onload = displayRandomQuote;