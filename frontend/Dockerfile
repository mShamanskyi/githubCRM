FROM node:10

WORKDIR /usr/src/app/frontend

COPY . .

RUN npm i && npm run build

EXPOSE 3000

CMD ["npm", "start"]