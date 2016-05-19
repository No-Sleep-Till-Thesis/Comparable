#[Comparable](https://comparable.herokuapp.com/)
##See how your job offer stacks up...
Comparable's mission it to provide all prospective job seekers with the data needed to assess and leverage their current offers against similar in the market.

###When setting up local environment, do the following:
1. `npm install` in root folder
note: `postintstall` will run, and will take a few minutes, as it seeds the DB.

###Setting up the database:
1. Install MongoDB & Mongoose via npm
2. Add and setup MongoLab via Heroku

###Setting up authentication with Auth0:
1. Create an account on Auth0
2. Generate a key
3. Add key to `src/actions/Auth_Actions.jsx`

###Starting the app:
1. `mongod` to start up the local DB
2. `npm start` to boot up local server

###Set up AngelList API:
1. Signup for an AngelList API Key
2. Create a `.secrets.json` file in `/server/config`
3. Add your `access_token`, follow the example in `/server/config/.secrets-example.json`

###Testing:
1. Run `npm run test`

###Compiling:
1. This is set up automatically through Webpack
