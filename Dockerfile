# Dockerfile
FROM node:16.14-alpine

# create destination directory
RUN mkdir -p /Users/juanf/OneDrive/Documentos/pruebaFront
WORKDIR /Users/juanf/OneDrive/Documentos/pruebaFront

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /Users/juanf/OneDrive/Documentos/pruebaFront
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
