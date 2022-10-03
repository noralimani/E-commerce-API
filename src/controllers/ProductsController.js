const Product = require('../models/products');
const data = require('../data/products.json');

class ProductsController {
    index = (req, res) => {
        const products = data.map(d => new Product(d))
        res.json({products})
    }
}

module.exports = new ProductsController()