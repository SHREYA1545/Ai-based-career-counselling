const questions = [
  "Would you accept to work writing articles in the economic section of a newspaper?",
  "Would you offer to organize your friend's bachelor's party?",
  "Would you like to lead an organization project in your province?",
  "Do you have a positive thought in times of frustration?",
  "Would you help out people who were injured or attacked by assailants?",
  "When you were a kid, were you interested in how your toys were built?",
  "Are you more interested in mysteries of nature than the secrets of technology?",
  "Do you listen carefully to the problems of your friends?",
  "Would you offer to explain to your classmate a certain topic that they didn't understand?",
  "Are you demanding and critical with your team?",
  "Are you attracted to putting together puzzles?",
  "Can you establish the conceptual difference between macroeconomics and microeconomics?",
  "Does wearing a uniform make you feel different and important?",
  "Would you participate as a professional in an acrobatic show?",
  "Do you organize your money so that it lasts until the next salary?",
  "Do you easily convince others about the validity of your arguments?",
  "Are you aware of the big discoveries about the Big Bang Theory?",
  "Do you act quickly in an emergency situation?",
  "When you have to solve a mathematical problem, will you persist until you find the solution?",
  "Would you agree to plan, organize, and run your favorite club or sports field?",
  // Add all 98 questions...
];

// Dividing the questions into groups of 10
const questionsPerPage = 10;
const totalPages = Math.ceil(questions.length / questionsPerPage);

let currentPageIndex = 0;
const responses = Array(questions.length).fill(null); // To store responses

// Function to render the current page of questions
function renderPage() {
  const questionPages = document.getElementById("question-pages");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");

  // Calculate the range of questions to show
  const start = currentPageIndex * questionsPerPage;
  const end = Math.min(start + questionsPerPage, questions.length);
  
  questionPages.innerHTML = ""; // Clear the current page content

  for (let i = start; i < end; i++) {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question-container");

    const questionText = document.createElement("p");
    questionText.classList.add("question");
    questionText.textContent = questions[i];

    const optionsList = document.createElement("ul");
    optionsList.classList.add("options");

    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
    options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.className = responses[i] === index ? "selected" : "";
      button.onclick = () => selectOption(i, index);
      optionsList.appendChild(button);
    });

    questionElement.appendChild(questionText);
    questionElement.appendChild(optionsList);
    questionPages.appendChild(questionElement);
  }

  // Update button states
  prevBtn.disabled = currentPageIndex === 0;
  nextBtn.disabled = currentPageIndex === totalPages - 1;
  nextBtn.style.display = currentPageIndex < totalPages - 1 ? "inline-block" : "none";
  submitBtn.style.display = currentPageIndex === totalPages - 1 ? "inline-block" : "none";
}

// Function to handle selection of an option
function selectOption(questionIndex, optionIndex) {
  responses[questionIndex] = optionIndex; // Store the response
  renderPage(); // Re-render the page to highlight the selected option
}

// Go to the previous page
function prevPage() {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    renderPage();
  }
}

// Go to the next page
function nextPage() {
  if (currentPageIndex < totalPages - 1) {
    currentPageIndex++;
    renderPage();
  }
}

// Submit the test and show the responses
function submitAnswers() {
  console.log("User responses:", responses);
  alert("Thank you for completing the test! Your responses have been recorded.");
}

// Initialize the questionnaire
renderPage();
