const express = require('express');
const path = require('path')
const fareUtils = require('./fareutils')

const app = express();

app.use('/', express.static(path.join(__dirname, 'public_static')) )

app.use(express.json)
app.use(express.urlencoded({extended: true}))

app.post('/calcfare',  (req,res)=> {
    let km = parseFloat(req.body.km)
    let min = parseInt(req.body.min)

    let fare = fareUtils.calcFare(km, min)

    res.send({fare: fare})
})


//Creating an end-point [TO SHOW SOME INFORMATION TO THE USERS]
app.get('/rate', (req,res) =>{
    res.send(fareUtils.rate)
})

exports = module.exports = app

//app.listen(3939, () => console.log('Server started on http://localhost:3939'));
