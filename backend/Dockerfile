FROM node:10

WORKDIR /usr/src/app/backend

COPY . . 

RUN npm i && npm run build

EXPOSE 3200

CMD ["sh", "-c", "npm run migrate && npm run dev"]