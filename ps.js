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
  "Are you the party man or woman?",
  "Do you think the details are as important as the whole?",
  "Would you feel comfortable working in a hospital setting?",
  "Would you like to participate to maintain order in the face of major disorders and cataclysm?",
  "Would you spend several hours reading a book of your interest?",
  "Do you plan your work in detail before you start?",
  "Do you have an almost personal relationship with your computer?",
  "Do you enjoy modeling clay?",
  "Would you help a blind person cross the street?",
  "Do you consider it important that critical attitudes and active participation be encouraged from primary schools?",
  "Would you accept that a woman should be part of the armed forces under the same rules as men?",
  "Would you like to create new technologies to discover the pathologies of some disease through the microscope?",
  "Would you participate in the disease prevention campaign?",
  "Are you interested in issues related to the past and man’s evolution?",
  "Would you include yourself in a research project on seismic movements and their consequences?",
  "Outside school hours, do you dedicate some part of the week to sports?",
  "Are you interested in quick reaction and action activities in unforeseen and dangerous situations?",
  "Would you volunteer for NASA space cadets?",
  "Do you like manual labor more than intellectual work?",
  "Would you be willing to give up a pleasant moment to offer your services as a professional?",
  "Would you participate in an investigation about violence in football?",
  "Would you like to work in a lab while you study?",
  "Would you risk your life to save someone else's life?",
  "Would you like to take a first aid course?",
  "Would you tolerate starting as many times as necessary until you achieve the desired achievement?",
  "Do you distribute your schedules properly to be able to do everything as planned?",
  "Would you take a course to learn how to read the instruments or parts of the machines you would work with?",
  "Would you choose a profession where you have to stay away from your family for a few months, e.g., sailor, military?",
  "Would you like to live in an agricultural area to develop your activities as a professional?",
  "When you are working in a group, do you get excited about producing original ideas that are considered?",
  "Is it easy for you to coordinate a task group?",
  "Did you find the study of biological science interesting?",
  "Would you feel comfortable playing the role of marketing manager?",
  "Would you include yourself in a national development project of your city's main source of resources?",
  "Are you interested in the causes that determine certain phenomena?",
  "Have you discovered any philosophers or writers who have expressed the same ideas as yours?",
  "Would you like to get a musical instrument for your birthday?",
  "Would you agree to collaborate with compliance with the rules in public places?",
  "Do you think the ideas are important and do everything possible to put them into practice?",
  "When an appliance breaks down in your home, are you ready to repair it?",
  "Would you be part of a team aimed at preserving endangered flora and fauna?",
  "Do you read journals related to the latest scientific and technological advances in the health area?",
  "Do you think it is important to preserve the cultural roots of our country?",
  "Would you like to conduct research that would help make the distribution of wealth fairer?",
  "Would you like to perform auxiliary tasks on a ship such as hosting and lowering of sails, painting, hull conservation, troubleshooting, engine conservation, etc.?",
  "Do you think that a country should have the highest weapons technology at any price?",
  "Are freedom and justice fundamental values in your life?",
  "Would you agree to do lease practice in the food products industry in the quantity control sector?",
  "Do you think that public health should be prioritized, free, and efficient for everyone?",
  "Would you be interested in researching a new vaccine?",
  "In a work team, do you prefer the role of coordinator?",
  "In an argument between friends, do you volunteer as a mediator?",
  "Do you agree with the training of professional soldiers?",
  "Would you fight for just a cause to the last consequence?",
  "Would you like to do scientific research on agricultural crops?",
  "In the face of an unforeseen meeting, would you make a new design of an outdated garment?",
  "Would you visit an astronomical observatory to learn how the devices work?",
  "Would you like to run a company's import and export area?",
  "Do you inhibit yourself when you meet new people?",
  "Would you like to work with children?",
  "Would you design a poster for an AIDS campaign?",
  "Would you lead an independent theatre group?",
  "Would you submit your resume to an automotive company that requires a manager for its production area?",
  "Would you participate in an international defense group with an armed force?",
  "Would you afford your studies by working on an audit?",
  "Are you a person who defends lost causes?",
  "In the event of an epidemic emergency, would you participate in the campaign by offering your help?",
  "Would you know what DNA and RNA mean?",
  "Would you choose a career that requires the use of a foreign language?",
  "Is working with objects more rewarding than working with people?",
  "Would you like to be an accounting advisor at a recognized company?",
  "In the face of a solitary call, would you offer to care for sick people?",
  "Are you attracted to research into mysteries of the universe, for example, black holes?",
  "In the event of an epidemic emergency, would you offer to care for sick people?",
  "Would you spend part of your time helping people in deprived areas?",
  "When you choose your clothes or decorate an environment, do you consider the combination of colors, fabrics, or styles of your furniture?",
  "Would you like to work as a professional running the construction of hydroelectric companies?",
  "Do you know what GDP means?"
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
  submitBtn.disabled = !areAllAnswered(start, end);

  // Scroll to top of the page when navigating
  window.scrollTo(0, 0);
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
