FROM node:26-alpine

WORKDIR /app

COPY ./app .

LABEL author="Hidde"

RUN npm install --only=production

EXPOSE 3000

CMD ["node","server.js"]
