// ==============================
// MOBILE NAVBAR
// ==============================

function toggleMenu(){

const menu = document.getElementById("navLinks");

if(menu){
menu.classList.toggle("active");
}

}


// ==============================
// REGISTER USER
// ==============================

function register(){

const username = document.getElementById("username").value.trim();
const password = document.getElementById("password").value.trim();
const message = document.getElementById("loginMessage");

if(username === "" || password === ""){
message.innerText = "Please fill all fields";
return;
}

localStorage.setItem("user", username);
localStorage.setItem("pass", password);

message.innerText = "Registration successful. Now login.";

}


// ==============================
// LOGIN USER
// ==============================

function login(){

const username = document.getElementById("username").value.trim();
const password = document.getElementById("password").value.trim();

const savedUser = localStorage.getItem("user");
const savedPass = localStorage.getItem("pass");

const message = document.getElementById("loginMessage");

if(username === savedUser && password === savedPass){

localStorage.setItem("loggedIn","true");

message.innerText = "Login successful";

setTimeout(()=>{
window.location.href = "index.html";
},800);

}else{

message.innerText = "Invalid username or password";

}

}


// ==============================
// LOGOUT
// ==============================

function logout(){

localStorage.removeItem("loggedIn");

window.location.href = "login.html";

}


// ==============================
// BROWSE INTERNSHIPS BUTTON
// ==============================

function browseInternships(){

const loggedIn = localStorage.getItem("loggedIn");

if(loggedIn === "true"){

window.location.href = "internship.html";

}else{

window.location.href = "login.html";

}

}


// ==============================
// PROTECT PAGES (LOGIN REQUIRED)
// ==============================

document.addEventListener("DOMContentLoaded", function(){

const page = window.location.pathname;

if(page.includes("index.html") || page.includes("internship.html") || page.includes("review.html")){

if(localStorage.getItem("loggedIn") !== "true"){

window.location.href = "login.html";

}

}

});


// ==============================
// INTERNSHIP LIST
// ==============================

const internships = [

"Web Development",
"Frontend Development",
"Backend Development",
"Full Stack Development",
"Python Development",
"Java Development",
"Machine Learning",
"Data Analytics",
"UI UX Design",
"Graphic Design",
"Cyber Security",
"Cloud Computing",
"Android Development",
"IOS Development",
"Game Development",
"Digital Marketing",
"Content Writing",
"Software Testing",
"Blockchain Development",
"AI Development"

];


// ==============================
// GENERATE INTERNSHIP CARDS
// ==============================

const container = document.getElementById("courseContainer");

if(container){

internships.forEach(course => {

let card = document.createElement("div");

card.classList.add("course");

card.innerHTML = `
<h3>${course}</h3>
<p>Duration: 3 Months</p>
<p>Stipend: ₹5000</p>
<button onclick="apply('${course}')">Apply</button>
`;

container.appendChild(card);

});

}


// ==============================
// APPLY FUNCTION
// ==============================

function apply(course){

alert("Application submitted for " + course);

}


// ==============================
// FEEDBACK SYSTEM
// ==============================

function submitFeedback(){

const name = document.getElementById("name");
const feedback = document.getElementById("feedbackText");
const message = document.getElementById("feedbackMessage");

if(!name || !feedback) return;

if(name.value.trim() === "" || feedback.value.trim() === ""){

message.innerText = "Please enter your feedback";

}else{

message.innerText = "Thank you for your feedback!";
name.value = "";
feedback.value = "";

}

}
