FROM node:16
WORKDIR /app
COPY . .
ENV PORT 3000
EXPOSE 3000
RUN npm install
RUN rm -rf Dockerfile
CMD npm start