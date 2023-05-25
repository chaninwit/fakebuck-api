require('dotenv').config
const express = require("express");
const cors = require('cors');
const morgan = require('morgan')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const notFoundMiddlewares = require('./middlewares/not-found');
const errorMiddlewares = require('./middlewares/error')

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


app.use(rateLimit({
    windowMs: 1000*60*15,
    max:1000,
    mssage: { message:'too many requests'}
}))

app.use(helmet())
app.use(cors())
app.use(express.json())


app.use(notFoundMiddlewares)
app.use(errorMiddlewares)

const port = process.env.PORT || 8000 
 app.listen(port, () =>  console.log("server running on port" + port))

