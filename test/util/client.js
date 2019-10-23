const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync('./product.proto')
const productProto = grpc.loadPackageDefinition(packageDefinition).product

const ProductService = productProto.ProductService
const client = new ProductService('127.0.0.1:50051', grpc.credentials.createInsecure());

module.exports = client