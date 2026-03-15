// MOBILE MENU
function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}


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

document.getElementById("loginMessage").innerText="Registered successfully";

}


// LOGIN
function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

let savedUser=localStorage.getItem("user");
let savedPass=localStorage.getItem("pass");

if(user===savedUser && pass===savedPass){

localStorage.setItem("loggedIn","true");

window.location.href="index.html";

}else{

document.getElementById("loginMessage").innerText="Invalid login";

}

}


// LOGOUT
function logout(){

localStorage.removeItem("loggedIn");

window.location.href="login.html";

}


// BROWSE BUTTON
function browseInternships(){

if(localStorage.getItem("loggedIn")==="true"){

window.location.href="internship.html";

}else{

window.location.href="login.html";

}

}


// INTERNSHIPS
const internships=[

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

const container=document.getElementById("courseContainer");

if(container){

internships.forEach(course=>{

let card=document.createElement("div");

card.classList.add("course");

card.innerHTML=`
<h3>${course}</h3>
<p>Duration: 3 Months</p>
<p>Stipend: ₹5000</p>
<button onclick="apply('${course}')">Apply</button>
`;

container.appendChild(card);

});

}


// APPLY
function apply(course){

alert("Applied for "+course);

}
