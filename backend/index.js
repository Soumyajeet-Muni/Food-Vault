require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT||5000


// const mongoDB = require("./db")
const connectDB = require('./db')
connectDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })

  app.use(express.json())
  app.use('/api/auth', require('./Routes/Auth'));
  
  app.use('/api', require('./Routes/DisplayData'));

  app.use('/api', require('./Routes/OrderData'));
  // app.use('/api', require('./Routes/Payment.js'));
const paymentRoute = require('./Routes/Payment.js');

app.use('/api',paymentRoute);
  
