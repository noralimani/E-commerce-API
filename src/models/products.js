class  Product{
    product = "";
    price = "";
    productName = "";

    constructor(paramsObject) {
        this.product = paramsObject.product;
        this.price = paramsObject.price;
        this.productName = paramsObject.name;
    }
}

module.exports = Product