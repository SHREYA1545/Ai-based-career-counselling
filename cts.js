// Dataset for colleges, cities, and branches (as before)
const dataset = [
  // Mumbai Division
  { city: "Mumbai", college: "Indian Institute of Technology (IIT) Bombay", branch: "Computer Science and Engineering (CSE)", exam: "JEE" },
  { city: "Mumbai", college: "Indian Institute of Technology (IIT) Bombay", branch: "Electrical Engineering", exam: "JEE" },
  { city: "Mumbai", college: "Indian Institute of Technology (IIT) Bombay", branch: "Mechanical Engineering", exam: "JEE" },
  { city: "Mumbai", college: "Indian Institute of Technology (IIT) Bombay", branch: "Civil Engineering", exam: "JEE" },
  { city: "Mumbai", college: "Indian Institute of Technology (IIT) Bombay", branch: "Chemical Engineering", exam: "JEE" },
  { city: "Mumbai", college: "Indian Institute of Technology (IIT) Bombay", branch: "Aerospace Engineering", exam: "JEE" },
  { city: "Mumbai", college: "Indian Institute of Technology (IIT) Bombay", branch: "Metallurgical Engineering", exam: "JEE" },
  { city: "Mumbai", college: "Indian Institute of Technology (IIT) Bombay", branch: "Biotechnology", exam: "JEE" },
  { city: "Mumbai", college: "Indian Institute of Technology (IIT) Bombay", branch: "Data Science & Engineering (Postgraduate)", exam: "JEE" },
  { city: "Mumbai", college: "Veermata Jijabai Technological Institute (VJTI)", branch: "Computer Engineering", exam: "CET" },
  { city: "Mumbai", college: "Veermata Jijabai Technological Institute (VJTI)", branch: "Electronics Engineering", exam: "CET" },
  { city: "Mumbai", college: "Veermata Jijabai Technological Institute (VJTI)", branch: "Mechanical Engineering", exam: "CET" },
  { city: "Mumbai", college: "Veermata Jijabai Technological Institute (VJTI)", branch: "Civil Engineering", exam: "CET" },
  { city: "Mumbai", college: "Veermata Jijabai Technological Institute (VJTI)", branch: "Information Technology", exam: "CET" },
  { city: "Mumbai", college: "Veermata Jijabai Technological Institute (VJTI)", branch: "Electrical Engineering", exam: "CET" },
  { city: "Mumbai", college: "Veermata Jijabai Technological Institute (VJTI)", branch: "Production Engineering", exam: "CET" },
  { city: "Mumbai", college: "Veermata Jijabai Technological Institute (VJTI)", branch: "Chemical Engineering", exam: "CET" },
  { city: "Mumbai", college: "Sardar Patel Institute of Technology (SPIT)", branch: "Computer Engineering", exam: "CET" },
  { city: "Mumbai", college: "Sardar Patel Institute of Technology (SPIT)", branch: "Information Technology", exam: "CET" },
  { city: "Mumbai", college: "Sardar Patel Institute of Technology (SPIT)", branch: "Electronics Engineering", exam: "CET" },
  { city: "Mumbai", college: "Sardar Patel Institute of Technology (SPIT)", branch: "Mechanical Engineering", exam: "CET" },
  { city: "Mumbai", college: "Sardar Patel Institute of Technology (SPIT)", branch: "Civil Engineering", exam: "CET" },
  { city: "Mumbai", college: "KJ Somaiya College of Engineering", branch: "Computer Engineering", exam: "CET" },
  { city: "Mumbai", college: "KJ Somaiya College of Engineering", branch: "Information Technology", exam: "CET" },
  { city: "Mumbai", college: "KJ Somaiya College of Engineering", branch: "Electronics and Telecommunications Engineering", exam: "CET" },
  { city: "Mumbai", college: "KJ Somaiya College of Engineering", branch: "Mechanical Engineering", exam: "CET" },
  { city: "Mumbai", college: "KJ Somaiya College of Engineering", branch: "Civil Engineering", exam: "CET" },
  { city: "Mumbai", college: "KJ Somaiya College of Engineering", branch: "Electronics Engineering", exam: "CET" },

  // Pune Division
  { city: "Pune", college: "College of Engineering Pune (COEP)", branch: "Computer Engineering", exam: "JEE" },
  { city: "Pune", college: "College of Engineering Pune (COEP)", branch: "Electronics and Telecommunication Engineering", exam: "JEE" },
  { city: "Pune", college: "College of Engineering Pune (COEP)", branch: "Mechanical Engineering", exam: "JEE" },
  { city: "Pune", college: "College of Engineering Pune (COEP)", branch: "Civil Engineering", exam: "JEE" },
  { city: "Pune", college: "College of Engineering Pune (COEP)", branch: "Information Technology", exam: "JEE" },
  { city: "Pune", college: "College of Engineering Pune (COEP)", branch: "Electrical Engineering", exam: "JEE" },
  { city: "Pune", college: "College of Engineering Pune (COEP)", branch: "Production Engineering", exam: "JEE" },
  { city: "Pune", college: "College of Engineering Pune (COEP)", branch: "Instrumentation and Control Engineering", exam: "JEE" },
  { city: "Pune", college: "Pune Institute of Computer Technology (PICT)", branch: "Computer Engineering", exam: "CET" },
  { city: "Pune", college: "Pune Institute of Computer Technology (PICT)", branch: "Information Technology", exam: "CET" },
  { city: "Pune", college: "Pune Institute of Computer Technology (PICT)", branch: "Electronics and Telecommunication Engineering", exam: "CET" },
  { city: "Pune", college: "Pune Institute of Computer Technology (PICT)", branch: "Electrical Engineering", exam: "CET" },
  { city: "Pune", college: "Vishwakarma Institute of Technology (VIT)", branch: "Computer Engineering", exam: "CET" },
  { city: "Pune", college: "Vishwakarma Institute of Technology (VIT)", branch: "Information Technology", exam: "CET" },
  { city: "Pune", college: "Vishwakarma Institute of Technology (VIT)", branch: "Mechanical Engineering", exam: "CET" },
  { city: "Pune", college: "Vishwakarma Institute of Technology (VIT)", branch: "Civil Engineering", exam: "CET" },
  { city: "Pune", college: "Vishwakarma Institute of Technology (VIT)", branch: "Electrical Engineering", exam: "CET" },
  { city: "Pune", college: "Sinhgad College of Engineering (SCOE)", branch: "Computer Engineering", exam: "CET" },
  { city: "Pune", college: "Sinhgad College of Engineering (SCOE)", branch: "Information Technology", exam: "CET" },
  { city: "Pune", college: "Sinhgad College of Engineering (SCOE)", branch: "Mechanical Engineering", exam: "CET" },
  { city: "Pune", college: "Sinhgad College of Engineering (SCOE)", branch: "Civil Engineering", exam: "CET" },
  { city: "Pune", college: "Sinhgad College of Engineering (SCOE)", branch: "Electronics Engineering", exam: "CET" },
  { city: "Pune", college: "Sinhgad College of Engineering (SCOE)", branch: "Electrical Engineering", exam: "CET" },

  // Additional Divisions and Colleges
  { city: "Nashik", college: "K. K. Wagh Institute of Engineering Education and Research", branch: "Computer Engineering", exam: "CET" },
  { city: "Nashik", college: "K. K. Wagh Institute of Engineering Education and Research", branch: "Mechanical Engineering", exam: "CET" },
  { city: "Nashik", college: "K. K. Wagh Institute of Engineering Education and Research", branch: "Civil Engineering", exam: "CET" },
  { city: "Nashik", college: "K. K. Wagh Institute of Engineering Education and Research", branch: "Electronics and Telecommunication Engineering", exam: "CET" },
  { city: "Nashik", college: "K. K. Wagh Institute of Engineering Education and Research", branch: "Electrical Engineering", exam: "CET" },
  { city: "Nashik", college: "K. K. Wagh Institute of Engineering Education and Research", branch: "Information Technology", exam: "CET" },
  { city: "Nashik", college: "Government College of Engineering, Nashik", branch: "Civil Engineering", exam: "CET" },
  { city: "Nashik", college: "Government College of Engineering, Nashik", branch: "Mechanical Engineering", exam: "CET" },
  { city: "Nashik", college: "Government College of Engineering, Nashik", branch: "Electronics Engineering", exam: "CET" },
  { city: "Nashik", college: "Government College of Engineering, Nashik", branch: "Computer Engineering", exam: "CET" },
  { city: "Nashik", college: "Government College of Engineering, Nashik", branch: "Electrical Engineering", exam: "CET" },

  // Add other divisions as needed...
];
// Populate city dropdown dynamically
const cityDropdown = document.getElementById('city');
const branchDropdown = document.getElementById('branch');
const nextButton = document.getElementById('nextButton');
const resultsContainer = document.getElementById('resultsContainer');
const collegeList = document.getElementById('collegeList');
const backButton = document.getElementById('backButton');

// Get unique cities from the dataset
const cities = [...new Set(dataset.map(item => item.city))];

// Add cities to the dropdown
cities.forEach(city => {
  const option = document.createElement('option');
  option.value = city;
  option.textContent = city;
  cityDropdown.appendChild(option);
});

// Enable/disable the 'Next' button based on form completion
function checkFormCompletion() {
  if (cityDropdown.value && branchDropdown.value) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }
}

// Event listener for city selection
cityDropdown.addEventListener('change', () => {
  const selectedCity = cityDropdown.value;
  const branches = [...new Set(dataset.filter(item => item.city === selectedCity).map(item => item.branch))];

  // Reset and populate the branch dropdown based on the selected city
  branchDropdown.innerHTML = '<option value="" disabled selected>Select a branch</option>'; // Reset branches

  branches.forEach(branch => {
    const option = document.createElement('option');
    option.value = branch;
    option.textContent = branch;
    branchDropdown.appendChild(option);
  });

  // Check if both city and branch are selected, enable the 'Next' button
  checkFormCompletion();
});

// Event listener for branch selection
branchDropdown.addEventListener('change', () => {
  checkFormCompletion();
});

// Handle Next button click to display results
nextButton.addEventListener('click', () => {
  const selectedCity = cityDropdown.value;
  const selectedBranch = branchDropdown.value;

  // Filter colleges based on selected city and branch
  const filteredColleges = dataset.filter(item =>
    item.city === selectedCity && item.branch === selectedBranch);

  // Clear previous results
  collegeList.innerHTML = '';

  // Show filtered colleges in the list
  filteredColleges.forEach(college => {
    const li = document.createElement('li');
    li.textContent = `${college.college} - Branch: ${college.branch} (Exam: ${college.exam})`;
    collegeList.appendChild(li);
  });

  // Show the results container and hide the form
  resultsContainer.style.display = 'block';
  document.querySelector('.form-container').style.display = 'none';
});

// Handle Back button click to go back to the form
backButton.addEventListener('click', () => {
  // Hide the results container and show the form again
  resultsContainer.style.display = 'none';
  document.querySelector('.form-container').style.display = 'block';

  // Reset the form
  cityDropdown.value = '';
  branchDropdown.value = '';
  nextButton.disabled = true;
});