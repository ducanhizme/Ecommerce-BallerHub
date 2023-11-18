class Datasource {
     #products
    #users
    constructor() {
        this.#products =[]
        this.#users=[]
    }

    getProducts() {
         const products = JSON.parse(localStorage.getItem("products"))
        return this.#products =  products;
    }

    setProducts(value) {
        this.#products = value;
        console.log(this.#products);
        localStorage.removeItem("products")
        localStorage.setItem("products",JSON.stringify(value));
    }

    getUsers() {
        return this.#users;
    }

    setUsers(value) {
        this.#users = value;
    }
}