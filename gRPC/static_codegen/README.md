```sh
npm i google-protobuf
npm install -D grpc-tools
npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./ --grpc_out=grpc_js:./ Products.proto
```