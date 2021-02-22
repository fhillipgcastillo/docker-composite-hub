# docker build -t simple-nodejs . --no-cache
# docker run -it -v $(pwd):/home/app simple-nodejs npm install
# docker run -it -v $(pwd):/home/app simple-nodejs bash
# We only need to modify the node version and add any extra instalation
# We could also use this for build and start up

FROM node:10.12.0

WORKDIR /home/app
