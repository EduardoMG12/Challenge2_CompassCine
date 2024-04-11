FROM node:20.9.0-alpine
EXPOSE 3000:3000
WORKDIR /app
COPY . .

COPY package.json .
RUN npm install
RUN npx prisma generate

ENTRYPOINT ["npm", "run", "dev"]