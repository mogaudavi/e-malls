# FROM node:16-alpine
# WORKDIR /
# COPY package.json yarn.lock ./
# RUN npm i --frozen-lockfile
# COPY . .
# EXPOSE 5000
# CMD npm start

FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json yarn.lock ./

# RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "server.js" ]