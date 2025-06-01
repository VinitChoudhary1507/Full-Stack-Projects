import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import mongodb from '../src/libs/db.js'
import Userlogin from '../src/Routes/Users.routes.js'
dotenv.config(); 
const app = express()// POST route
app.use(express.json()); // needed to parse JSON body
const port =  process.env.PORT || 3000 
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

mongodb()
app.use('/api/route/', Userlogin)

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/`)
})