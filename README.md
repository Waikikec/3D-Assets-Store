# React JS November 2021 SoftUni

![MERN](https://raw.githubusercontent.com/miles-till/easy-mern-stack/master/media/mern.png)

# Contents

- [Quick Start](#quick-start)
  - [Configure](#configure)
  - [Run](#run)
  - [Deploy](#deploy)
- [NPM Scripts (package.json)](#npm-scripts-package.json)
- [Client](#client)
- [Server](#server)
- [Development Tools](#development-tools)
- [License](#license)

# Quick Start

## `config`

1. Install [Node.js](https://nodejs.org/en/) & NPM
2. Install [Nodemon](https://github.com/remy/nodemon) package globally:
   ```
   npm i nodemon -g
   ```
3. Install server and client packages:

   ```
   npm install
   ```

4. Install [MongoDB](https://www.mongodb.com/download-center/community)

## `run`

1. start node.js web server from api folder

   ```
   npm start
   ```

2. start react client app from client folder
   ```
   npm start
   ```

# Folder Structure

```
+-- client/                # react client app
|   +-- public/                 # static resources
|   +-- src/                    # client source
|   |   +-- pages/                  # react pages
|   |   +-- components/             # react components
|   |   +-- redux/                  # redux store and user slice
|   |   +-- utils/                  # firebase config and dummy data
|   |   +-- App.js                  # Routes and Navigations
|   |   +-- index.js                # client-side config
|   |
|   +-- package.json            # npm package config
|
+-- api/                   # node web server + api
|   +-- src/                    # server source
|   |   +-- routes/                 # api endpoints
|   |   +-- models/                 # mongoose data models
|   |   +-- index.js                # server config
|   |
|   +-- package.json            # server npm package config
|
+-- README.md              # this readme file
```

# Client

- [React](https://reactjs.org/)
  - Web client
- [Axios](https://github.com/axios/axios)
  - AJAX requests

# Server

- [Node.js](https://nodejs.org/en/)
  - Server platform
- [Express](https://expressjs.com/)
  - Web server
- [MongoDB Atlas Database](https://www.mongodb.com/atlas/database)
  - Database server
- [Mongoose](https://mongoosejs.com/)
  - Server-side data models

# Development Tools

- [NPM](https://yarnpkg.com/en/)
  - Package manager and script runner
- [Nodemon](https://github.com/remy/nodemon)
  - Monitors and restarts node server when source changes
- [Cors](https://www.npmjs.com/package/cors)
  - Package for providing a Connection/Express middleware that can be used to enable CORS with various options.
- [Styled Components](https://styled-components.com/)
  - Visual primitives to style application
- [Firebase Storage](https://www.npmjs.com/package/firebase)
  - Firebase Storage lets you upload and store user generated content, such as files, and images.
- [Redux Toolkig](https://redux.js.org/)
  - Centralizing your application's state and logic

# License

This project is licensed under the `MIT open source license`.
