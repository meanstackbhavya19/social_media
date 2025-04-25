
require('dotenv').config();
const express = require('express');
const app = express();
const authRoute=require('./routes/auth');

const {errors}= require('./constant/errorResponse');
const { errorHandler } = require('./errorhandler/errorHandlerMiddleware');


app.use(express.json());
app.use('/api/users', authRoute);

app.all('*', (req, res, next) => {
  const err = Object.assign(new Error(`Can't find ${req.originalUrl} on this server!`), errors.ROUTE_NOT_FOUND);
  next(err);
});

app.use(errorHandler)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});