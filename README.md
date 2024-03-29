# Login using express and jwt

### Installation
1. Clone the repository.
2. Add `.env` with your JWT_SECRET, MONGO_DB_URI and MONGO_DB_URI_TEST for you test
3. Run the following commands in the terminal `npm install`

### Commands
Use the following commands in the terminal:
- `npm run dev`: run the development server
- `npm start`: run the production server
- `npm run test`: run the tests
- `npm run lint`: check the syntax errors
- `npm run lint-fix`: fix the syntax errors
- `npm run test:watch`: run the tests and listen for changes in the test

### Dependencies
* [Express](https://expressjs.com/): Node.js web framework, used for routing.
* [ESLint](): Find syntax errors in the code
* [dotenv](): Use environment variables
* [bcryptjs](): Encrypt the password
* [jsonwebtoken](): Use jwt in the project
* [mongoose](): Use the mongodb database
* [mongoose-unique-validator](): Validate the fields are unique in the database
