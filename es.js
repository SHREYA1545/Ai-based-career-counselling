const questions = [
  "Do you enjoy solving logical puzzles and brain-teasers?",
  "Are you interested in how computers and software work?",
  "Do you find it exciting to write code or create applications?",
  "Are you curious about artificial intelligence and machine learning?",
  "Do you enjoy working on projects that involve databases?",
  "Do you like designing user-friendly interfaces or websites?",
  "Are you interested in cybersecurity and data protection?",
  "Do you like automating repetitive tasks using technology?",
  "Do you enjoy analyzing and solving technical problems?",
  "Do you prefer working in teams on software development projects?",
  "Are you curious about developing mobile applications?",
  "Do you like experimenting with computer hardware?",
  "Do you enjoy learning new programming languages?",
  "Are you interested in data visualization and analytics?",
  "Do you enjoy the idea of working in the tech industry?",
  "Do you enjoy observing and analyzing the design of buildings?",
  "Are you interested in infrastructure projects like bridges or dams?",
  "Are you curious about construction techniques and materials?",
  "Do you enjoy working on structural designs and blueprints?",
  "Are you fascinated by urban planning and architecture?",
  "Do you want to work on projects that improve transportation systems?",
  "Are you interested in land surveying and topographical studies?",
  "Do you like solving problems related to load distribution in structures?",
  "Do you enjoy working outdoors on-site for projects?",
  "Do you find satisfaction in building things from scratch?",
  "Are you interested in sustainable and green construction methods?",
  "Do you like studying maps and layouts of construction projects?",
  "Do you prefer projects that involve teamwork and collaboration?",
  "Do you enjoy the idea of constructing safe and durable structures?",
  "Are you excited about shaping the physical environment?",
  "Are you passionate about solving environmental problems?",
  "Do you enjoy working on projects that reduce pollution?",
  "Are you interested in renewable energy systems?",
  "Do you like studying how human activity affects the environment?",
  "Are you curious about waste management and recycling methods?",
  "Are you interested in improving water quality and sanitation?",
  "Do you enjoy learning about climate change and mitigation strategies?",
  "Do you like working on sustainable solutions for energy use?",
  "Are you fascinated by ecosystems and biodiversity?",
  "Do you prefer working in outdoor environments?",
  "Do you enjoy designing solutions to reduce carbon footprints?",
  "Are you interested in projects involving soil conservation?",
  "Do you want to work on renewable energy projects like solar or wind?",
  "Do you enjoy collaborating on projects for environmental conservation?",
  "Do you feel motivated to create a healthier environment for future generations?",
  "Do you enjoy working with tools and machines?",
  "Are you interested in designing mechanical systems?",
  "Are you curious about how engines and vehicles work?",
  "Do you enjoy solving problems related to fluid mechanics?",
  "Do you like projects involving robotics and automation?",
  "Are you interested in manufacturing processes and technologies?",
  "Do you enjoy understanding thermal dynamics and heat transfer?",
  "Are you fascinated by mechanical structures and their designs?",
  "Do you like working on projects related to renewable energy machines?",
  "Do you enjoy experimenting with mechanical components?",
  "Are you excited about innovations in automotive engineering?",
  "Do you prefer practical, hands-on problem-solving?",
  "Are you interested in materials science and engineering?",
  "Do you like working with CAD software for mechanical designs?",
  "Are you curious about the future of industrial machinery?",
  "Do you enjoy studying circuits and electronics?",
  "Are you curious about how power systems operate?",
  "Are you interested in renewable energy solutions like solar power?",
  "Do you enjoy solving problems related to electrical systems?",
  "Are you fascinated by electric motors and transformers?",
  "Do you like designing and testing electrical equipment?",
  "Are you curious about how batteries and energy storage work?",
  "Do you enjoy studying and working on control systems?",
  "Do you prefer hands-on work involving wiring and circuits?",
  "Are you interested in automation and electrical systems in industries?",
  "Do you enjoy working on projects related to smart grids?",
  "Are you fascinated by electrical safety systems?",
  "Do you want to contribute to advancing electrical infrastructure?",
  "Do you like working on projects involving renewable energy grids?",
  "Do you enjoy experimenting with innovative electrical technologies?",
  "Do you enjoy working with electronic devices?",
  "Are you fascinated by the principles of signal processing?",
  "Do you like learning about telecommunication systems?",
  "Are you curious about designing microchips and circuits?",
  "Do you enjoy solving problems in wireless communication?",
  "Are you interested in satellite and radar systems?",
  "Do you like studying communication protocols like 5G?",
  "Are you fascinated by innovations in IoT (Internet of Things)?",
  "Do you enjoy working on audio and video transmission projects?",
  "Are you curious about radio-frequency engineering?",
  "Do you like experimenting with embedded systems and sensors?",
  "Are you interested in projects involving robotics and electronics?",
  "Do you want to contribute to developing smarter communication systems?",
  "Do you enjoy learning about analog and digital signal processing?",
  "Are you excited about working in advanced electronics fields?"
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

  // Enable/Disable Prev/Next buttons
  prevBtn.disabled = currentPageIndex === 0;
  nextBtn.disabled = currentPageIndex === totalPages - 1 || !areAllAnswered(start, end);

  // Show submit button only on the last page
  submitBtn.style.display = currentPageIndex === totalPages - 1 ? 'inline-block' : 'none';

  // Disable submit button until all questions on the last page are answered
  submitBtn.disabled = !areAllAnswered(start, end);
}


// Check if all questions on the current page have been answered
function areAllAnswered(start, end) {
  for (let i = start; i < end; i++) {
    if (responses[i] === null) {
      return false;
    }
  }
  return true;
}

// Function to handle answer selection
function selectOption(questionIndex, answerIndex) {
  responses[questionIndex] = answerIndex;
  renderPage();
}

// Event listeners for pagination buttons
document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    renderPage();
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentPageIndex < totalPages - 1 && areAllAnswered(currentPageIndex * questionsPerPage, (currentPageIndex + 1) * questionsPerPage)) {
    currentPageIndex++;
    renderPage();
  }
});

document.getElementById("submit-btn").addEventListener("click", () => {
  alert("Thank you for completing the survey!");
  // Here, you can handle form submission logic if needed
});

// Initial render
renderPage();
