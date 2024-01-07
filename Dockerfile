FROM node

WORKDIR /app

COPY package.json .
RUN npm i
RUN apt-get update && apt-get install -y xdg-utils


COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 5173

CMD ["npm", "run", "dev"]
