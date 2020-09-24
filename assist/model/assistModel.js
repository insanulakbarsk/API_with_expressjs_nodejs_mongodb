const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let AssistSchema = Schema({
	name : {type:String},
	masuk : {type:String},
	izin : {type:String},
	cuti : {type:String}
})

module.exports = mongoose.model ("Assist", AssistSchema)