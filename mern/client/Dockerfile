# Dockerfile for client

# Stage 1: Build react client
FROM node:14.16.0-alpine3.10

# Set working directory
WORKDIR /usr/app
# Install app dependencies
COPY package*.json ./

# Install dependencies
RUN npm install -qy

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]