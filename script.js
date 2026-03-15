// PROTECT INTERNSHIP PAGE

if(window.location.pathname.includes("internships.html")){

let loggedIn = localStorage.getItem("loggedIn");

if(loggedIn !== "true"){

window.location.href="login.html";

}

}

function browseInternships(){

let loggedIn = localStorage.getItem("loggedIn");

if(loggedIn === "true"){

window.location.href="internships.html";

}else{

window.location.href="login.html";

}

}

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

const container = document.getElementById("courseContainer");

if(container){

internships.forEach(course=>{

let div = document.createElement("div");

div.classList.add("course");

div.innerHTML=`
<h3>${course}</h3>
<p>Duration: 3 Months</p>
<p>Stipend: ₹5000</p>
<button onclick="apply('${course}')">Apply</button>
`;

container.appendChild(div);

});

}


function apply(course){

alert("Application submitted for " + course);

}


// LOGIN SYSTEM
// REGISTER

function register(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user==="" || pass===""){

document.getElementById("loginMessage").innerText="Fill all fields";
return;

}

localStorage.setItem("user",user);
localStorage.setItem("pass",pass);

document.getElementById("loginMessage").innerText="Registration successful. Now login.";

}

function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

let savedUser=localStorage.getItem("user");
let savedPass=localStorage.getItem("pass");

if(user===savedUser && pass===savedPass){

localStorage.setItem("loggedIn","true");

document.getElementById("loginMessage").innerText="Login successful";

setTimeout(()=>{

window.location.href="internships.html";

},1000);

}else{

document.getElementById("loginMessage").innerText="Invalid login";

}

}
// FEEDBACK

function submitFeedback(){

document.getElementById("feedbackMessage").innerText="Thanks for your feedback!";

}

function toggleMenu(){

let menu = document.getElementById("navLinks");

menu.classList.toggle("active");

}
