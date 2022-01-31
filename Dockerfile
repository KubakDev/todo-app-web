FROM node:16-alpine as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as runtime
COPY --from=build /app/dist/todo-app-web /usr/share/nginx/html
