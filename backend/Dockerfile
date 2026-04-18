FROM node:lts-alpine3.22

WORKDIR /app

COPY package.json package-local.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
