// import "data/data-source/Datasource.js"
// import "data/entities/Product.js"
// import "data/repositories/ProductRepository.js"
// import "data/services/ProductService.js"
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


const products=[]
for (let i = 2; i <= 16; i++) {
    const product = new Product(i, `Product${i}`, `../img/banner_element${i}.png`, 100.00 * i, `Description${i}`, ["XS", "S", "L", "XL", "XXL"], []);
    products.push(product);
}
const dataSource = new Datasource()
dataSource.setProducts(products);

const productService = new ProductService();
console.log("Service",productService.getAll())
