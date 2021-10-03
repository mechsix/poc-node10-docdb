FROM node:10.24.1

RUN mkdir -p /var/app
WORKDIR /var/app

COPY . .
RUN yarn install --frozen-lockfile

CMD ["node", "main.js"]
