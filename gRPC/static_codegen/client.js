const grpc = require("@grpc/grpc-js");
const messages = require("./Products_pb");
const services = require("./Products_grpc_pb");

const client = new services.ProductsClient("localhost:4000", grpc.credentials.createInsecure());

// const idProduct = new messages.ProductID();
// idProduct.setValue("sid123");
// 
// client.getProduct(
//     idProduct,
//     (err, result) => {
//         console.log(err);
//         console.log(result);
//         console.log([result?.getId(), result?.getName(), result?.getDescription()]);
//     }
// );

const product = new messages.Product();
product.setId("sus123");
product.setName("sus");
product.setDescription("sus description");

client.addProduct(
    product,
    (err, result) => {
        console.log(err);
        console.log(result);
        console.log(result.getValue());
    }
);
