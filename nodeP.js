const express = require('express');
const axios = require('axios');
const { parse } = require('path');


const app = express();
//let response;

app.get('/user', async (req,res) => {
    try{
    const userId = req.query.id;
    // const userId = path.split(0,-1);
    console.log(userId)
    const backendApi = 'https://jsonplaceholder.typicode.com/todos/'
    const api = backendApi.concat(userId);
    console.log(api)
    const response = await axios.get(api)
    //console.log(response.data)
    var webResponse = Buffer.from(JSON.stringify(response.data)); 
    res.end(webResponse);
    // .then(res.end((express.response)))
    }catch(err){
        console.log(err)
    }
});
app.listen(8080 , () => {
    console.log('app listing....')
});

