import {Product} from "../../modules/entities/Product.js";
import {Datasource} from "../../modules/data-source/Datasource.js";
import {ProductRepository} from "../../modules/repositories/ProductRepository.js";
const datasource = new Datasource()
const sizes = ["S", "M", "L", "XL", "XXL"];
const fixedTags = ["New Arrival", "Popular Item"];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function createRandomProduct(id) {
    const name = `Jersey${id}`;
    const image = `../img/jersey${id}.png`;
    const price = Math.floor(Math.random() * 500) + 100;
    const description = "Description";
    const numberOfSizes = Math.floor(Math.random() * sizes.length) + 1;
    const sizesArray = [];
    while (sizesArray.length < numberOfSizes) {
        const randomSize = getRandomElement(sizes);
        if (!sizesArray.includes(randomSize)) {
            sizesArray.push(randomSize);
        }
    }
    const numberOfTags = Math.floor(Math.random() * fixedTags.length) + 1;
    const tagsArray =[];
    while (tagsArray.length < numberOfTags) {
        const randomTag = getRandomElement(fixedTags);
        if (!tagsArray.includes(randomTag)) {
            tagsArray.push(randomTag);
        }
    }

    return new Product(id, name, image, price, description, sizesArray, tagsArray);
}
const products = [];
const numberOfProducts = 16;
for (let i = 1; i <= numberOfProducts; i++) {
    const product = createRandomProduct(i.toString());
    products.push(product);
}
datasource.setProducts(products)

