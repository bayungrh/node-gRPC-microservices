FROM node:latest

RUN mkdir /src/app
WORKDIR /src/app

ENV PATH /src/app/node_modules/.bin:$PATH

COPY . /src/app
RUN npm install

EXPOSE 50051

CMD [ "npm", "start" ]