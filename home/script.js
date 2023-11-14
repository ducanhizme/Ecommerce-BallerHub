const navToggle =  document.querySelector(".header__button")
const navIconToggle = document.querySelector(".icon-button-border i")
const navMenuHeader = document.querySelector(".header__toggle-menu")
navToggle.addEventListener("click",() =>{
    const visibility = navMenuHeader.getAttribute("data-visible")
   if(visibility==="false"){
       navIconToggle.classList.remove('fa-bars')
       navIconToggle.classList.add('fa-xmark');
       navMenuHeader.setAttribute("data-visible","true");
   }else{
       navIconToggle.classList.remove('fa-xmark')
       navIconToggle.classList.add('fa-bars')
       navMenuHeader.setAttribute("data-visible","false");
   }
})