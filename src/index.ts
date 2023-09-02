import express from 'express';
import router from './router';
import dotenv from 'dotenv';
dotenv.config();

// console.log('Hello from Node and Express!');

const app = express();

const port = process.env.PORT || 5000;

// ENABLE BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router());

app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);
