const express=require('express')
const app=express()
 const PORT=process.env.PORT||3002;  //process.env.PORT is used when we are unable to get port it will help us for getting the free port 
 //web server:
 app.use(express.static("frontend"))
 app.listen(PORT,function()
 {
    console.log("successfully running at http://localhost:"+PORT )
 })