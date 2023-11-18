const fs = require('fs');
const path = require('path');
const express = require('express');
const Storage = require('./storage');
const cors = require('cors');
const port = process.env.PORT || 4000;

const Store = new Storage();



const app = express();

const corsOptions = {
    origin: '*',
};
  
app.use(cors(corsOptions));

app.get('/data', (req, res, next) => {
    const data = Storage.fetchAll();
    console.log(data.length);
    if(data){
        const responseData = {
            message: 'Data Fetched!',
            data: data
        }
        res.status(200).json(responseData);
    }
    else{
        res.status(404).json({message: 'Data not found!'})
    }
    
})

app.get('/data/:key', (req, res, next) => {
    const key = req.params.key;

    const data = Storage.fetch(key);
    console.log(data.length);
    if(data.length===0){
        const responseData = {
            message: 'No data found'
        }
        res.status(404).json(responseData);
    }
    else{
        const responseData = {
            message: 'Data fetched!',
            data: data
        }
        res.status(200).json(responseData);
    }
})

app.get('/types', (req, res, next) => {
    const data = Storage.fetchTypes();
    if(data.length===0){
        const responseData = {
            message: 'No data found'
        }
        res.status(404).json(responseData);
    }
    else{
        const responseData = {
            message: 'Data fetched',
            data: data
        }
        res.status(200).json(responseData);
    }
    

})


app.listen(port, () => {
    console.log('Sever is running on port 4000');
})
