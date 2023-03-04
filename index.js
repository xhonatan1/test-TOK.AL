
const programi = document.getElementById("Programi");
const dega = document.getElementById("Dega");
const kerkoButton1 = document.querySelector(".Kerko");


function handleSearchFormSubmit(event) {

  event.preventDefault();


  const selectedProgrami = programi.value;
  const selectedDega = dega.value;


  console.log(`Selected programi: ${selectedProgrami}`);
  console.log(`Selected dega: ${selectedDega}`);
}
kerkoButton1.addEventListener("click", handleSearchFormSubmit);


const degaSelect = document.getElementById('Dega');
const kerkoButton = document.querySelector('.Kerko');

kerkoButton.addEventListener('click', function () {
  if (degaSelect.value === 'Ekonomia') {
    console.log(
      "Ekonomia institucionale",
      "Ekonomia ndërkombëtare",
      "Ekonomi shëndetësore",
      "Ekonomia financiare",
      "Ekonomia e sjelljes",
      "Bioekonomia",
      "Ekonomi klasike",
      "Ekonometria",
      "Gjeografia ekonomike",
      "Ekonomia historike",
      "Ekonomi sociologjike",
      "Ekonomia e arsimit",
      "Ekonomia e energjisë",
      "Inxhinieri ekonomike",
      "Ekonomia sipërmarrëse",
      "Ekonomi feministe",
      "Ekonomia e mjedisit",
      "Ekonomi politike",
      "Gjeorgjizëm",
      "Ekonomia e gjelbër",
      "Ekonomia e informacionit",
      "Ekonomia islame",
      "Ekonomia e punës",
      "Ekonomi matematike",
      "Ekonomia monetare",
      "Ekonomi e Biznesit",
      "Ekonomia publike"
    );
  }
});

function showResults() {
  // Get the selected program and field of study
  const program = document.getElementById("Programi").value;
  const field = document.getElementById("Dega").value;

  // Create the content for the new window based on the user's selections
  let content;
  if (program === "Bachelor" && field === "Ekonomia") {
    content = "Content Bachelor of Economics.";
  } else if (program === "Bachelor" && field === "Teknologjia") {
    content = "Content for Bachelor of Technology.";
  } else if (program === "Bachelor" && field === "Mjekesia") {
    content = "Content for Bachelor of Medicine.";
  } else if (program === "Master" && field === "Ekonomia") {
    content = "Content for Master of Economics.";
  } else if (program === "Master" && field === "Teknologjia") {
    content = "Content for Master of Technology.";
  } else if (program === "Master" && field === "Mjekesia") {
    content = "Content for Master of Medicine.";
  } else if (program === "Specializim" && field === "Ekonomia") {
    content = "Content for Specialization in Economics.";
  } else if (program === "Specializim" && field === "Teknologjia") {
    content = "Content for Specialization in Technology.";
  } else if (program === "Specializim" && field === "Mjekesia") {
    content = "Content for Specialization in Medicine.";
  }

  // Open a new window with the content
  const newWindow = window.open("", "Results", "width=1200,height=680");
  newWindow.document.write(`<p>${content}</p>`);
}

function searchPage() {
  // Get the input element and search query
  var input = document.getElementById("search-box");
  var query = input.value.toLowerCase();

  // Get all the elements to search within
  var elements = document.querySelectorAll("body *");

  // Loop through each element and search for the query
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent.toLowerCase();
    if (text.includes(query)) {
      // Highlight the matching text
      element.style.backgroundColor = "yellow";
      element.style.color = "black";
    }
  }
}
function contactUs(type) {
  if (type === 'phone') {
    window.open('tel:+355672000874');
  } else if (type === 'email') {
    window.location.href = 'mailto:info@qiriazi.edu.al';
  }
}