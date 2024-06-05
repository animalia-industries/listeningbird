FROM node:20-alpine

WORKDIR /app
COPY package.json ./
RUN npm install --save-prod

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["node", "build"]
