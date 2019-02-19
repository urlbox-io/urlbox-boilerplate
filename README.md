# Overview

It consists of:

- **Webapp Client** code using Next.js, React, Redux and tailwind for styling - original repo for this code is [here](https://github.com/deptno/next.js-typescript-starter-kit)
- **Server API** code using Express, Mongoose - original repo for server code is from [here](https://github.com/vladotesanovic/typescript-mongoose-express)

# Instructions

- clone the repo

## Client

- install client dependencies (`cd client` and `npm i`)
- start client: `npm run start:dev`
- check http://localhost:3000 is serving the app correctly

## Server

- install server dependencies (`cd server` and `npm i`)
- start server: `npm start`
- check server is responding - you will need to have mongodb running so start `mongod` locally.
- check http://localhost:4000/api/author returns empty array []
