FROM node:lts-buster

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install nodejs ffmpeg imagemagick webp -y

WORKDIR /app
COPY . /app
RUN npm install
CMD ["node", "api.js"]
EXPOSE 6892
