const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync('product.proto')
const productProto = grpc.loadPackageDefinition(packageDefinition).product
const service = require('./service')

const server = new grpc.Server()

server.addService(productProto.ProductService.service, service(grpc))

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()