#  Dockerfile for Node Express Backend api (development)
FROM node:14.16.0-alpine3.10

ARG NODE_ENV=development

# Set working directory
WORKDIR /usr/app

# Install Dependencies
COPY package*.json ./
RUN npm install -qyg nodemon@2.0.7
RUN npm install -qy

# Copy app source code
COPY . .

# Exports
EXPOSE 8080

# CMD ["npm","start"]
CMD ["npm","run", "dev"]
