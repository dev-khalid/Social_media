FROM node:lts
WORKDIR /SOCIAL_MEDIA 
COPY package*.json .  
RUN npm install yarn 
RUN npm install pm2 -g 
RUN yarn install 
COPY . . 
#image build done 
ENV PORT=5000
EXPOSE 5000 
#for taking the request or sending response
CMD ["pm2-runtime","start","index.js"] 
#docker run -p 80:5000 exposedPort -d[for running this in background] -t tagName 
#docker run -p 80:5000 server
 