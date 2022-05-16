FROM node:14.19.1-alpine as builder


COPY package.json package-lock.json ./

RUN npm install && mkdir /app-ui && ls -la && mv ./node_modules ./app-ui

WORKDIR /app-ui

COPY . .

RUN ./compile.sh && ./compile.sh

FROM nginx:1.20.2

COPY --from=builder /app-ui/dist/frontend /usr/share/nginx/html


