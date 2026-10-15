FROM node:26-slim

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN npm install -g yarn
RUN yarn install

COPY . .

RUN yarn run build

CMD ["yarn", "run", "start"]
