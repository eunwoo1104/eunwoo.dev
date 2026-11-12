FROM node:26-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN npm install -g yarn

RUN yarn install --frozen-lockfile --production=true && yarn cache clean

COPY next.config.ts ./
COPY public ./public
COPY .next ./.next

CMD ["yarn", "run", "start"]
