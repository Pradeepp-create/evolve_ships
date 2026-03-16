/* =========================
NAVBAR MENU
========================= */

function toggleMenu(){

const nav=document.getElementById("navLinks");

if(nav){
nav.classList.toggle("active");
}

}


/* =========================
LOGIN & REGISTER SYSTEM
========================= */

function register(){

const email=document.getElementById("registerEmail").value;
const pass=document.getElementById("registerPassword").value;

if(email==="" || pass===""){
alert("Fill all fields");
return;
}

localStorage.setItem("userEmail",email);
localStorage.setItem("userPass",pass);

alert("Registration successful. Now login.");

}


function login(){

const email=document.getElementById("loginEmail").value;
const pass=document.getElementById("loginPassword").value;

const savedEmail=localStorage.getItem("userEmail");
const savedPass=localStorage.getItem("userPass");

if(email===savedEmail && pass===savedPass){

localStorage.setItem("loggedIn","true");

window.location.href="internship.html";

}else{

alert("Invalid login");

}

}


/* =========================
CHECK LOGIN BEFORE ACCESS
========================= */

function checkLogin(){

const status=localStorage.getItem("loggedIn");

if(status!=="true"){

window.location.href="login.html";

}

}


/* =========================
LOGOUT
========================= */

function logout(){

localStorage.removeItem("loggedIn");

alert("Logged out successfully");

window.location.href="login.html";

}


/* =========================
INTERNSHIP DATA
========================= */

const internships=[

{title:"Frontend Developer",image:"https://img.icons8.com/color/96/html-5.png"},
{title:"Backend Developer",image:"https://img.icons8.com/color/96/server.png"},
{title:"Full Stack Developer",image:"https://img.icons8.com/color/96/source-code.png"},
{title:"Python Developer",image:"https://img.icons8.com/color/96/python.png"},
{title:"Machine Learning Intern",image:"https://img.icons8.com/color/96/artificial-intelligence.png"},
{title:"Data Analyst",image:"https://img.icons8.com/color/96/combo-chart.png"},
{title:"UI Designer",image:"https://img.icons8.com/color/96/design.png"},
{title:"UX Researcher",image:"https://img.icons8.com/color/96/user-experience.png"},
{title:"Graphic Designer",image:"https://img.icons8.com/color/96/adobe-photoshop.png"},
{title:"Product Designer",image:"https://img.icons8.com/color/96/product.png"},
{title:"Motion Designer",image:"https://img.icons8.com/color/96/video-editing.png"},
{title:"Digital Marketing",image:"https://img.icons8.com/color/96/marketing.png"},
{title:"SEO Specialist",image:"https://img.icons8.com/color/96/search.png"},
{title:"Content Writer",image:"https://img.icons8.com/color/96/blog.png"},
{title:"Social Media Manager",image:"https://img.icons8.com/color/96/instagram-new.png"},
{title:"Brand Marketing",image:"https://img.icons8.com/color/96/megaphone.png"},
{title:"Cyber Security",image:"https://img.icons8.com/color/96/security-checked.png"},
{title:"Cloud Computing",image:"https://img.icons8.com/color/96/cloud.png"},
{title:"Android Developer",image:"https://img.icons8.com/color/96/android-os.png"},
{title:"Game Developer",image:"https://img.icons8.com/color/96/controller.png"}

];


/* =========================
DISPLAY INTERNSHIPS
========================= */

function loadInternships(){

const container=document.getElementById("internshipContainer");

if(!container) return;

container.innerHTML="";

internships.forEach(intern=>{

const card=document.createElement("div");

card.className="internship-card";

card.innerHTML=`

<img src="${intern.image}" class="intern-img">

<h3>${intern.title}</h3>

<div class="tags">
<span class="tag">Remote</span>
<span class="tag">₹5000 Stipend</span>
<span class="tag">3 Months</span>
</div>

<button class="apply-btn" onclick="apply('${intern.title}')">
Apply
</button>

`;

container.appendChild(card);

});

}


/* =========================
APPLY POPUP
========================= */

function apply(title){

const popup=document.getElementById("applyPopup");

if(!popup) return;

document.getElementById("popupText").innerText=
"You applied for "+title;

popup.style.display="flex";

}


function closePopup(){

const popup=document.getElementById("applyPopup");

if(popup){
popup.style.display="none";
}

}

function checkLogin(){

const status=localStorage.getItem("loggedIn");

if(status!=="true"){
window.location.href="login.html";
}

}


/* =========================
PAGE LOAD
========================= */

window.onload=function(){

loadInternships();

};
