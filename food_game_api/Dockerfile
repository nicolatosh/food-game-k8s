FROM node:15.8.0-alpine
WORKDIR /food_game_api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
ENV NODE_ENV=production
CMD [ "npm", "start" ]
