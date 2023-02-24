const grpc = require("@grpc/grpc-js");

const productsProto = require("./protos/products");
const client = new productsProto.Products("localhost:4000", grpc.credentials.createInsecure());

// const idProduct = {
//     value: "abc123"
// };
// 
// client.getProduct(
//     idProduct,
//     (err, result) => {
//         console.log("[Error]:", err);
//         console.log("[Result]:", result);
//     }
// );

const product = {
    id: "Some identifier",
    name: "Some name",
    description: "Some description"
};

client.addProduct(
    product,
    (err, result) => {
        console.log("[Error]:", err);
        console.log("[Result]:", result);
    }
);