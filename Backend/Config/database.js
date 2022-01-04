const mongoose = require('mongoose')
const mongoURL ='mongodb+srv://flutter:flutter@depdep.jlan2.mongodb.net/laptops?retryWrites=true&w=majority';
mongoose.connect(mongoURL,
    err => {
        if(err) throw err;
        console.log('Berhasil CONNECT ke MongoDB')
    });