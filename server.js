
require('dotenv').config();
const express= require('express');
const helmet=require('helmet');
const cors=require('cors');
const app=express();

//middleware
app.use(helmet());
app.use(cors());

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('hello');

});

app.listen(process.env.HOST_PORT, ()=>{
    console.log(`listening at http://${process.env.HOST_NAME}:${process.env.HOST_PORT}`)
});