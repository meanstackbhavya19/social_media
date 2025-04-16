import express from 'express'

const app=express()
app.get('/',(req,res)=>{
    res.send("hello")
})

const PORT=3000
app.listen(3000,()=>{
    console.log("app is running on servers")
})