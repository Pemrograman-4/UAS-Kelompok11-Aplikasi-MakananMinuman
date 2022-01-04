const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ClientSchema = new Schema({
    namaMenu: { 
        type: String 
    },
    jenis: { 
        type: String 
    },
    deskripsi: { 
        type: String 
    },
    status_stok: { 
        type: String
    },
    harga: { 
        type: String 
    },
    date: { type: Date, default: Date.now }

})
module.exports = mongoose.model('cafe', ClientSchema)