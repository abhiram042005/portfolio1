// Show only login at first
window.onload = function() {
  showSection("login");
  document.querySelector("nav").style.display = "none"; // hide nav until login
};

function showSection(sectionId) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let message = document.getElementById("loginMessage");

  if (user === "admin" && pass === "1234") {
    message.innerText = "Login Successful!";
    message.style.color = "green";

    // Show navigation and redirect to home
    document.querySelector("nav").style.display = "flex";
    showSection("home");
  } else {
    message.innerText = "Invalid Credentials!";
    message.style.color = "red";
  }
}

function logout() {
  document.querySelector("nav").style.display = "none";
  showSection("login");
  document.getElementById("loginMessage").innerText = "You have logged out.";
  document.getElementById("loginMessage").style.color = "blue";
}

function uploadCertificate() {
  let fileInput = document.getElementById("certificateUpload");
  let file = fileInput.files[0];
  if (file) {
    let list = document.getElementById("certificateList");
    let newItem = document.createElement("li");
    newItem.textContent = file.name;
    list.appendChild(newItem);
    alert("Certificate uploaded: " + file.name);
  } else {
    alert("Please select a file to upload.");
  }
}
function submitSkills() {
  const selected = Array.from(document.querySelectorAll(".skills-list input:checked"))
                        .map(skill => skill.value);

  const message = document.getElementById("skillsMessage");

  if (selected.length > 0) {
    message.innerText = "You selected: " + selected.join(", ");
    message.style.color = "green";
  } else {
    message.innerText = "No skills selected!";
    message.style.color = "red";
  }
}