# Backend Challenge Post APIv1

This is an APIRestful to post/manage users and posts

# Steps to use the API 

1. We have to point to the directory where we want to clone our git repository

2. Then we use the command line 

```
$ git clone git@github.com:ivzc07/desafio-backend.git
```

3. Once we have our repository cloned we point again to our directory
```
cd ./desafio-backend.git
```
4. We must install all our project's dependecies with the next command, so we can use our project properly

```
$ npm i

```
5. Then we create our .env file with 
```
touch .env
```
6. Now we can go to "example.env" file and we can copy the names of the enviroment variables and we put our own info 

 ```plaintext
    PORT=8080
    DB_USER= youUser
    DB_PASSWORD= yourPassword
    DB_HOST= host.mongodb.com
    DB_NAME= yourDataBase_name
    JWT_SECRET= yourOwnSecretPassword
```

7. If we already have all our stuff arranged now we are available to run our project, and we will do that using our command 
```
npm run dev
```
This command in particularly runs a script that recides in our package.json so the whole script would be:

```
node --watch index.js
```
From now we have our server running in http//:localhost:8080

## Project Structure

For this project we are using Clean Architecture to order our files and directories

- `index.js`: Starts and connects the server to the data base
- `server.js`: It has the server info and external routers
- `src/`: Here we put our all of our Source Code
- `lib/`: Contains all the libraries that we using in this project
- `middlewares/`: Here we put the middlewares that help us to manage requests before they go through the routes
- `usecases/`: Use cases that we need to give funcionallity to our API
- `models/`: Data Models that represent entities in our Data Base
- `routes/`: Routes that define the endpoints in our API

## Endpoints

- **POST /auth/login**: Logs you in and returns a JWT Token .
- **POST /users**: Creates a new user.
- **GET /users/:id**: Gives you an user info by ID.
- **GET /posts**: Gives you the filtered posts by a query.
- **🔒POST /posts**: Creates a new post.
- **🔒PATCH /posts/:id**: Updates a specific post given by an ID.
- **🔒DELETE /posts/:id**: Deletes a picked post with an ID.

Remember that you must had logged into your user account using /auth/login endpoint so you can have access to the other endpoints that are marked with the 🔒 

## Body structure for Post/User

** POST **

{
    "title" : "nameTitle,
    "image" : "imageURL",
    "body" : "bodyText
}

** USER **

{
    "name" : "userName",
    "profilePic : "pictureURL",
    "email" : "yourEmail@domain"
    "password" : "yourPassword"
}



