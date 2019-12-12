FROM node:10.17.0
RUN npm install nodemon -g
WORKDIR /app
EXPOSE $PORT