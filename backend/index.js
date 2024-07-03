const express=require('express')
const app=express()

const port=9876

app.get('/numbers/e',(req,res)=>{
    res.send('even')
})

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`);
})