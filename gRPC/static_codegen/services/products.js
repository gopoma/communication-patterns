const messages = require("../Products_pb");
const services = require("../Products_grpc_pb");
const productsService = services.ProductsService;

const methods = {
    addProduct(request, response) {
        const product = {
            id: request.request.getId(),
            name: request.request.getName(),
            description: request.request.getDescription()
        };
        console.log({product});

        const idProduct = new messages.ProductID();
        idProduct.setValue("sid123");

        response(null, idProduct);
    },
    getProduct(request, response) {
        const idProduct = request.request.getValue();
        console.log({idProduct});

        const product = new messages.Product();
        product.setId("sid123");
        product.setName("Producto 1");
        product.setDescription("Descripción del producto");

        response(null, product);
    }
};

module.exports = {
    productsService,
    methods
};
