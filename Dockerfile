FROM node:20.9.0-alpine

WORKDIR /app
COPY . .
COPY package.json .

RUN npm install
CMD npm run dev
EXPOSE 3000:3000