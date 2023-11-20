import {Datasource} from "../data-source/Datasource.js";

export class ProductRepository {
    constructor() {
        this.products =[]
        this.data = new Datasource().getProducts();
    }

    getAll(){
        return this.data
    }

    findProductByID(value){
        return this.data.find(x=>x.id === value)
    }

    storeProduct(value){
        this.data.append(value);
    }

}