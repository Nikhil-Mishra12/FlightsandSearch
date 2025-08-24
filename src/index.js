const express =require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser=require('body-parser');




const setupandStartServer=async ()=>{
    const app=express();
     
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    })
}

setupandStartServer();