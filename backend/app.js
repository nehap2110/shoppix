//const express = require('express');
import express from 'express';
const app = express();
import product from './routes/productRoutes.js'
import errorhandlemiddleware from './middleware/error.js'

//middleware
app.use(express.json())

app.use('/api/v1/product',product);

app.use(errorhandlemiddleware);
export default app;