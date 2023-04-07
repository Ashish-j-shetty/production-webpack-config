FROM node:alpine3.16 as webpackAppProd

WORKDIR /webpackApp
COPY ./package.json .
RUN yarn install

COPY . .

RUN npm run build


#ngnix
FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=webpackAppProd ./webpackApp/build .

ENTRYPOINT [ "nginx" , "-g" , "daemon off;" ]
