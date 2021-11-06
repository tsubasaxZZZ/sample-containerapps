FROM node

WORKDIR /app
COPY package*.json ./

RUN apt-get update && \
    apt-get install -y iproute2 procps

RUN npm install
COPY . .
EXPOSE 3100
CMD [ "/app/dumb-init", "node", "index.js" ]
