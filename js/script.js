
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

// Function to display a random Sanskrit quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * sanskritQuotes.length);
    const quote = sanskritQuotes[randomIndex];

    // Display the Sanskrit line and its meaning
    const quoteContainer = document.getElementById("quote-container");
    quoteContainer.innerHTML = `
    <p class="sanskrit-line">${quote.line}</p>
    
  `;
    document.getElementById("quote-container-english").innerHTML = `<p class="pt-5">${quote.meaning}</p>`;
}

// Call the function on page load
window.onload = displayRandomQuote;


const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check the initial theme preference
if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
    document.getElementById("theme-svg").style.color = "white";
} else {
    htmlElement.classList.remove('dark');
    document.getElementById("theme-svg").style.color = "black";
}

// Toggle the theme on button click
themeToggleBtn.addEventListener('click', function () {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        document.getElementById("theme-svg").style.color = "black";
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.add('dark');
        document.getElementById("theme-svg").style.color = "white";
        localStorage.setItem('theme', 'dark');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    const fadeInOnScroll = () => {
        fadeElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("show");
            } else {
                el.classList.remove("show");
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

const cardSlider = document.getElementById('cardSlider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

// Scroll next
next.addEventListener('click', () => {
    cardSlider.scrollBy({
        left: 300, // Adjust to match the width of your card
        behavior: 'smooth',
    });
});

// Scroll previous
prev.addEventListener('click', () => {
    cardSlider.scrollBy({
        left: -300, // Adjust to match the width of your card
        behavior: 'smooth',
    });
});

// Function to add a card to the slider

function addCardToSlider(heading, description, image, link) {
    const card = document.createElement('div');
    card.classList.add('flex-shrink-0', 'scale-75', 'ml-4', 'md:mx-0', 'md:scale-90', 'snap-center', 'max-w-sm', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'dark:bg-gray-800', 'dark:border-gray-700', 'z-40');
    card.innerHTML = `
        <a href="#">
            <img class="rounded-t-lg" src="images/${image}.png" alt="${image}" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ${heading}
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                ${description}
            </p>
            <a href="${link}" target="_blank"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Live Site
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    `;
    cardSlider.appendChild(card);
}

addCardToSlider('Global Wings', 'This API provides detailed information about aircraft, with the ability to filter results by various criteria.It is built using Node.js, Express.js, and MySQL', 'globalwings', 'https://globalwings.codebyamrit.co.in');

addCardToSlider("Student Tracker",
    "Welcome to the Student Tracker repository. This project is a web application designed for teachers to manage student data efficiently.", "BajrangVidyaMandir", "https://edu.codebyamrit.co.in/");

addCardToSlider("File Manager 2025",
    "The Student Data Management System is a Python-based desktop application GUI designed for efficiently managing student data.", "file_manager_2025", "https://codebyamrit.co.in/file_manager_2025/");

addCardToSlider("SmartBoot",
    "SmartBoot is a desktop software designed to make pendrives bootable with ease.", "boot", "https://github.com/CodeByAmrit/SmartBoot");
