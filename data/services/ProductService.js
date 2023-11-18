class ProductService {
    constructor() {
        this.productRepository = new ProductRepository();
    }

    addProduct(value){
        this.productRepository.storeProduct(value);
    }

    getAll(){
        return this.productRepository.getAll()
    }
}