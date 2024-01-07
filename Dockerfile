FROM node:alpine 
ENV NODE_ENV development
WORKDIR /host
COPY ./package.json /host
RUN npm install
COPY . .
CMD ["npm","start"]