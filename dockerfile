FROM node:8
# Create app directory
WORKDIR /
# Install app dependencies
COPY . .
RUN npm install
# Copy app source code
COPY . .
#Expose port and start application
EXPOSE 8080
CMD [ "node", "app.js" ]
#sudo docker system prune -a
#docker build -t app .
#sudo docker run -p 8080:8080 app
