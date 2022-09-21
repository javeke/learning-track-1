FROM node:14.20.0-alpine

RUN apk add --no-cache autoconf automake

RUN apk --update add gcc make g++ zlib-dev

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build


FROM nginx:1.22.0-alpine

COPY --from=0 /app/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=0 /app/dist /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]