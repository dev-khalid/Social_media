FROM node:lts 
WORKDIR /SOCIAL_MEDIA 
COPY package*.json .
RUN npm install yarn 
RUN npm install pm2 -g
RUN yarn install 
COPY . .
ENV PORT=5000
EXPOSE 5000
CMD ["pm2-runtime","start","index.js"]
#docker run -p 5000:exposedPort -d[for running this in background] -t tagName 