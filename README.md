# Love Calculator REST API
A calculator that calculates the love between two people using their names

## API Documentation
Use Google Chrome for best results
 - http://localhost:2000/api-docs

## To run the server: 
  - install nodejs
  - install dependencies by running `npm i` in the root directory
  - start the server by running `npm start` in the root directory

## To run the server with Docker:
Run the following commands in the root directory
 - install docker
 - build and run the container by running `npm run docker` in the root directory

## To test on POSTMAN/Insomnia
  - POST: http://localhost:2000/love-calculator/calculate
  - Request Body(JSON): { "name": "_yourName", "otherName": "_yourPartnersName"}





