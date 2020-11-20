import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

import Cards from './dbCards.js'

// app config
const app = express()
const port = process.env.port || 8001
const conection_url = 'mongodb+srv://vishwa:vishwa1234@cluster0.wnors.mongodb.net/tinderdb?retryWrites=true&w=majority'

// midlleware 
app.use(express.json())
app.use(Cors())

//db config
mongoose.connect(conection_url,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true,
})


//api end-points
app.get('/',(req, res)=>{
    res.status(200).send('HELLO THERE AGAIN WE MET')
})

app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard ,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards',(req,res)=>{
    const dbCard = req.body;

    Cards.find(dbCard ,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

//listener
app.listen(port,()=> console.log(`listening on localhost :${port}`))