FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 8001
COPY . .