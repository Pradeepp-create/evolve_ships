/* =========================
CHECK LOGIN
========================= */
function checkLogin(){
  if(localStorage.getItem("loggedIn") !== "true"){
    window.location.href = "login.html";
  }
}

/* =========================
NAVBAR MENU
========================= */
function toggleMenu(){
  const nav = document.getElementById("navLinks");
  if(nav) nav.classList.toggle("active");
}

/* =========================
LOGOUT
========================= */
function logout(){
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

/* =========================
REGISTER USER
========================= */
function register(){
  const email = document.getElementById("registerEmail")?.value;
  const pass = document.getElementById("registerPassword")?.value;

  if(!email || !pass){
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPass", pass);

  alert("Registration successful! You can login now.");
}

/* =========================
LOGIN USER
========================= */
function login(){
  const email = document.getElementById("loginEmail")?.value;
  const pass = document.getElementById("loginPassword")?.value;

  const savedEmail = localStorage.getItem("userEmail");
  const savedPass = localStorage.getItem("userPass");

  if(email === savedEmail && pass === savedPass){
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Incorrect email or password");
  }
}

/* =========================
INTERNSHIPS DATA
========================= */
const internships = [
  {title:"Frontend Developer",image:"https://img.icons8.com/color/96/html-5.png"},
  {title:"Backend Developer",image:"https://img.icons8.com/color/96/server.png"},
  {title:"Full Stack Developer",image:"https://img.icons8.com/color/96/source-code.png"},
  {title:"Python Developer",image:"https://img.icons8.com/color/96/python.png"},
  {title:"Machine Learning Intern",image:"https://img.icons8.com/color/96/artificial-intelligence.png"},
  {title:"Data Analyst",image:"https://img.icons8.com/color/96/combo-chart.png"},
  {title:"UI Designer",image:"https://img.icons8.com/color/96/design.png"},
  {title:"UX Researcher",image:"https://img.icons8.com/color/96/user.png"},
  {title:"Graphic Designer",image:"https://img.icons8.com/color/96/adobe-photoshop.png"},
  {title:"Product Designer",image:"https://img.icons8.com/color/96/product.png"},
  {title:"Motion Designer",image:"https://img.icons8.com/color/96/video-editing.png"},
  {title:"Digital Marketing",image:"https://img.icons8.com/color/96/online-advertising.png"},
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
PAGE-SPECIFIC INTERNSHIP FUNCTIONS
========================= */
document.addEventListener("DOMContentLoaded", function(){
  const container = document.getElementById("internshipContainer");
  const popup = document.getElementById("applyPopup");
  const popupText = document.getElementById("popupText");

  if(container){
    internships.forEach(intern => {
      const card = document.createElement("div");
      card.className = "internship-card";
      card.innerHTML = `
        <img src="${intern.image}" class="intern-img">
        <h3>${intern.title}</h3>
        <div class="tags">
          <span class="tag">Remote</span>
          <span class="tag">₹5000 Stipend</span>
          <span class="tag">3 Months</span>
        </div>
        <button class="apply-btn">Apply</button>
      `;

      const btn = card.querySelector(".apply-btn");
      btn.addEventListener("click", () => {
        const email = localStorage.getItem("userEmail");
        if(!email){
          alert("Please login first");
          window.location.href = "login.html";
          return;
        }

        if(popup && popupText){
          popupText.innerText = `You applied for "${intern.title}"`;
          popup.style.display = "flex";
        }

        if(typeof emailjs !== "undefined"){
          emailjs.init("BGlCay9QTmi0OZliy");
          emailjs.send("service_qzaz2hs","template_jrcp7ee",{
            user_email: email,
            internship_name: intern.title
          }).then(()=>console.log("Email sent"))
            .catch(()=>console.log("Email failed"));
        }
      });

      container.appendChild(card);
    });
  }

  window.closePopup = function(){
    if(popup) popup.style.display = "none";
  };
});
