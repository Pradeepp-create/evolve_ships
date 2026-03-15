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
const internships = [

{
title:"Frontend Developer",
category:"tech",
image:"https://img.icons8.com/color/96/html-5.png"
},

{
title:"Backend Developer",
category:"tech",
image:"https://img.icons8.com/color/96/server.png"
},

{
title:"Full Stack Developer",
category:"tech",
image:"https://img.icons8.com/color/96/source-code.png"
},

{
title:"Python Developer",
category:"tech",
image:"https://img.icons8.com/color/96/python.png"
},

{
title:"Machine Learning Intern",
category:"tech",
image:"https://img.icons8.com/color/96/artificial-intelligence.png"
},

{
title:"Data Analyst",
category:"tech",
image:"https://img.icons8.com/color/96/combo-chart.png"
},

{
title:"UI Designer",
category:"design",
image:"https://img.icons8.com/color/96/design.png"
},

{
title:"UX Researcher",
category:"design",
image:"https://img.icons8.com/color/96/user-experience.png"
},

{
title:"Graphic Designer",
category:"design",
image:"https://img.icons8.com/color/96/adobe-photoshop.png"
},

{
title:"Product Designer",
category:"design",
image:"https://img.icons8.com/color/96/product.png"
},

{
title:"Motion Designer",
category:"design",
image:"https://img.icons8.com/color/96/video-editing.png"
},

{
title:"Digital Marketing",
category:"marketing",
image:"https://img.icons8.com/color/96/marketing.png"
},

{
title:"SEO Specialist",
category:"marketing",
image:"https://img.icons8.com/color/96/search.png"
},

{
title:"Content Writer",
category:"marketing",
image:"https://img.icons8.com/color/96/blog.png"
},

{
title:"Social Media Manager",
category:"marketing",
image:"https://img.icons8.com/color/96/instagram-new.png"
},

{
title:"Brand Marketing",
category:"marketing",
image:"https://img.icons8.com/color/96/megaphone.png"
},

{
title:"Cyber Security",
category:"tech",
image:"https://img.icons8.com/color/96/security-checked.png"
},

{
title:"Cloud Computing",
category:"tech",
image:"https://img.icons8.com/color/96/cloud.png"
},

{
title:"Android Developer",
category:"tech",
image:"https://img.icons8.com/color/96/android-os.png"
},

{
title:"Game Developer",
category:"tech",
image:"https://img.icons8.com/color/96/controller.png"
}

];

const container=document.getElementById("courseContainer");

if(container){

internships.forEach(course=>{

let card=document.createElement("div");

card.classList.add("course");

card.innerHTML = `

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


// APPLY
function apply(course){

alert("Applied for "+course);

}
