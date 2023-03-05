FROM node:14
WORKDIR /api-fest-22
COPY . .
RUN npm install
CMD ["npm", "start"]
