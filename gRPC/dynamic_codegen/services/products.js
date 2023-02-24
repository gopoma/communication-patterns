const productsProto = require("../protos/products");
const productsService = productsProto.Products.service;

const methods = {
    addProduct(request, response) {
        const product = request.request.product;
        console.log({product});

        response(null, {
            value: "did123"
        });
    },
    getProduct(request, response) {
        const idProduct = request.request.value;
        console.log({idProduct});

        response(null, {
            id: "did123",
            name: "Product 1",
            description: "Descripción del producto"
        })
    }
};

module.exports = {
    productsService,
    methods
};
