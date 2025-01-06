
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
    document.getElementById("quote-container-english").innerHTML = `<p class="meaning">${quote.meaning}</p>`;
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

// get github 
const username = "codebyamrit";

async function getProject() {
    const resultRepo = await fetch(`https://api.github.com/users/${username}/repos`).then(response => response.json());

    const projects = document.getElementById('projects');

    console.log(resultRepo);

    resultRepo.forEach(repo => {
        const project = document.createElement('div');
        project.classList.add('project');
        project.innerHTML = `
            <a href="${repo.html_url}" target="_blank" class="block bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div class="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h1 class="text-xl font-bold dark:text-gray-300">${repo.name}</h1>
                    <p class="mt-2 dark:text-gray-300">${repo.description || 'No description available'}</p>
                </div>
                <div class="flex justify-between mt-4">
                    <div class="flex items-center">
                        <img src="images/github.svg" alt="GitHub Icon" class="w-6 h-6">
                        <p class="ml-2 dark:text-gray-300">${repo.stargazers_count}</p>
                    </div>
                    <div class="flex items-center">
                        <img src="images/fork.svg" alt="Fork Icon" class="w-6 h-6">
                        <p class="ml-2 dark:text-gray-300">${repo.forks_count}</p>
                    </div>
                </div>
                <div class="flex justify-between mt-4">
                    <div class="flex items-center">
                        <span class="dark:text-gray-300">Language: ${repo.language || 'N/A'}</span>
                    </div>
                    <div class="flex items-center">
                        <span class="dark:text-gray-300">Updated: ${new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>
                </div>
            </a>
        `;
        projects.appendChild(project);
    });

}

getProject();



