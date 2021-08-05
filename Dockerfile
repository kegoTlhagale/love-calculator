FROM node:10-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN apt-get update \
  && apt-get install curl -y \
  && npm install
COPY . .
RUN npm run build
EXPOSE 2000:2000
CMD ["node", "dist/index.js" ]
