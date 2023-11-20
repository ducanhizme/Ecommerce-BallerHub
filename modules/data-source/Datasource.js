 export class Datasource {
     #products
    #users
    constructor() {
        this.#products =[]
        this.#users=[]
    }

    getProducts() {
         let products =[]
         products = JSON.parse(localStorage.getItem("products"))
        return this.#products =  products;
    }

    setProducts(value) {
        let products = JSON.parse(localStorage.getItem("products"))||[];
        if(Array.isArray(value)){
            let uniqueProduct = value.filter(element=>{
                return products.find(item => item.id === element.id) === undefined;
            })
            products.push(...uniqueProduct)
        }else{
            if(products.find(item=> item.id === value.id) !== undefined){
                console.log("Exits")
            }else{
                products.push(value)
            }
        }
        localStorage.removeItem("products")
        this.#products = products;
        localStorage.setItem("products",JSON.stringify(products));
    }


    getUsers() {
        return this.#users;
    }

    setUsers(value) {
        this.#users = value;
    }

}