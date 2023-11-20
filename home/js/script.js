import {Product} from "../../modules/entities/Product.js";
import {ProductRepository} from "../../modules/repositories/ProductRepository.js";
import {Datasource} from "../../modules/data-source/Datasource.js";
import {ProductService} from "../../modules/services/ProductService.js";

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


var swiper = new Swiper(".product-list", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});



