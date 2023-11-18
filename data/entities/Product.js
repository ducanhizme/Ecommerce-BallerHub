
class Product {
    constructor(id,name,img,price,description,size,tag) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
        this._size = size;
        this._tag = tag;
        this._img = img;
    }


    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get tag() {
        return this._tag;
    }

    set tag(value) {
        this._tag = value;
    }
}