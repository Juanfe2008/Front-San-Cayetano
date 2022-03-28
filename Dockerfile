FROM node:16.14-alpine
ENV NODE_ENV=dev
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "start"]
