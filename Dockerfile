FROM node:11-alpine

RUN mkdir -p /src/app
WORKDIR /src/app

ENV PATH /src/app/node_modules/.bin:$PATH

COPY . /src/app

RUN npm install
RUN npm rebuild

EXPOSE 50051

CMD [ "npm", "start" ]