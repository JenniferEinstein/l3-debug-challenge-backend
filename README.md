# Debug Challenge


<img src="./assets/learn-nation-logo.webp" alt="LearnNation Logo" width="350" height="auto">

## Introduction
The CTO at LearnNation wants you to sharpen your debugging skills both with and without AI, while strengthening your knowledge of the full technology stack. This application is your playground to achieve just that—and compete for prizes!

### Features of the Application:

- Animated Bug Component: A fully intact and bug-free feature to add a touch of fun.
- Random Quote Generator: Providing inspiration as you work through the challenges using the https://zenquotes.io/api/random API.
- Music Tracker: A tool where you can create and manage your list of favorite songs.

Here is a video of the working application: [Video of the working application](https://drive.google.com/file/d/1ZFkdOs6kR_i1L2-fiuyc5kA_xWr0dXmW/view?usp=sharing)


## The Challenge

This application has 3 frontend bugs and 7 backend bugs. Your mission is to find and fix them! Keep track of your work and solutions in the MY DEBUGGING NOTES section below.



## Competition Rules

Winners will be determined based on accuracy and completion time. Use AI or don't, but make sure to document your debugging process.
Proof of completion will be based on your presentation of the working application and the notation of the bugs you fixed to your manager.

### Prizes:

- 1st Place: $20 Amazon gift card
- 2nd Place: $10 Amazon gift card

### How to Win

- Fix all the bugs
- Complete the challenge in the least amount of time
- Document your debugging process
- Present your working application to your manager
- Create a pull request with your changes to the `main` branch
- Submit your PR link to your manager

**Note:** You must fix at least 7 bugs to attain the first place prize. Otherwise, you will be awarded the second place amount.

## Technology Stack

- React
- Express
- PostgreSQL
- pg-promise
- axios
- fetch
- cors
- dotenv
- nodemon
- material-ui

## Where NOT to look for bugs
These are the files you should **not** look at:

- `backend/db/` folder (this setup is in tact, do not modify)
- `backend/server.js`
- `backend/package.json`
- `backend/package-lock.json`
- `frontend/src/Image.jsx/`
- `frontend/main.jsx`
- `frontend/assets/` folder
- `frontend/package.json`
- `frontend/package-lock.json`
- Material-UI
- css


## Setup

You may want to clone your forked frontend and backend applications into one folder but it is not required.

### Frontend Setup

- `fork` and `clone` the [frontend application](https://github.com/jdrichards-pursuit/debug-challenge-frontend) and run it locally on port 3000.
- `cd` into the app directory
- `cd` into the frontend directory
- run `npm install`
- run `npm run dev`
- you don't need to add a `.env` file
- navigate to `localhost:3000` and you will not see the app due to the bugs

### Backend Setup

- `fork` and `clone` the [backend application](https://github.com/jdrichards-pursuit/debug-challenge-backend) and run it locally on port 3003.
- `cd` into the app directory
- `cd` into the backend application
- run `npm install`
- add `.env` file based on `.env.EXAMPLE` file
- run `npm run db:init` to create the database and tables
- run `npm run db:seed` to seed the database
- run `npm run dev`

- navigate to `localhost:3003` and you will start the backend application BUT it be broken due to the bugs

**Note:** You will need to have PostgresSQL installed and running on your machine in order to run the backend application.

## Debugging

Study the code first. Both frontend and backend. 
Study the error messages. 
Use both AI and your knowledge of the stack to debug. 
You are not required to only use AI you should also use your manual debugging skills.


## MY BACKEND DEBUGGING NOTES (add your debugging notes here)

1.
2.
3.
4.
5.
6.
7.

## MY FRONTEND DEBUGGING NOTES (add your debugging notes here)

1. In Quote.jsx, I changed the name to export from Quote to Quotations.
2. The errors are not named very well; is that really a 404 error? In Quotations, added more info in an error.
3. Added "export default App;" to the end of App.jsx


Good luck and may the best debuggers win!
