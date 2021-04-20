FROM node:alpine

RUN mkdir -p /app && chown -R node:node /app

# App directory
WORKDIR /app

COPY --chown=node:node package*.json ./

USER node

#for proxy ssl certificate
RUN npm config set registry http://registry.npmjs.org/

RUN npm i

# Copy app source code
COPY --chown=node:node . .

EXPOSE 3000

# Start the app
CMD [ "npm", "run", "start:dev"]
