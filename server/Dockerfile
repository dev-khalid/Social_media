FROM node:alpine 
WORKDIR /SOCIAL_MEDIA 
COPY package*.json .
RUN npm install yarn 
RUN yarn install 
COPY . .
ENV PORT=5000
EXPOSE 5000
CMD ["yarn","start"]
#docker run -p 5000:exposedPort -d[for running this in background] -t tagName 