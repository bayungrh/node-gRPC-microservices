# node-gRPC-microservices

Example of using NodeJS for Microservices using gRPC

## Prerequisites

- NodeJS
- MongoDB
- Docker

## Setup

- Run mongodb on default port 27017
- Install packages
```bash 
$ npm install 
```
- Run server
```bash
$ npm run start
```
- Run unittest
```bash
$ npm run test
```

## Setup with Docker

- Run MongoDB container on default port 27017
```bash
$ docker run -dt -p 27017:27017 --name mongodb mongo
```
- Build Docker Images
```bash
$ docker build -t muhbayu/node-grpc-microservices .
```
- Run Docker Container
```bash
$ docker run -dt -p 50051:50051 --name product-service muhbayu/node-grpc-microservices
```