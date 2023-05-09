const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

function pageTransition() {
    // buttton click active
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener("click", function () {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", " ");
            this.className += " active-btn";
        });
        
    }

    // section active class
    for (let i = 0;  i < allSections.length; i++){
       
    allSections[i].addEventListener("click", (e) =>{
        const id = e.target.dataset.id;
        if(id){
            // remove selected from the other btns
            sectBtn.forEach(btn =>{
                btn.classList.remove("active");
            });
            e.target.classList.add("active");

            // hide other sections
            sections.forEach(section =>{
                section.classList.remove("active");
            });
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    })
}
// Toggle theme
 const themeBtn = document.querySelector(".theme-btn");
 themeBtn.addEventListener("click", ()=>{
    let element = document.body;
     element.classList.toggle("light-mode") 
 })

//  preloader

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 10)
  });
}
pageTransition();
// for (i = 0; i < sectBtn.length; i++) {

//     sectBtn[i].addEventListener("click", function() {
  
//       for (i = 0; i < sectBtn.length; i++) {
//         sectBtn[i].classList.remove('active-btn');
//       }
  
//       this.classList.toggle("active-btn");
  
//     });
  
//   }