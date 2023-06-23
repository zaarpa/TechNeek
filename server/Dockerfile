FROM node:18-alpine

RUN npm install -g nodemon

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000
# required for docker desktop port mapping

CMD ["npm", "run", "dev"]