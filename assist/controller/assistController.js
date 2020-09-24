const Assist = require('../model/assistModel');

exports.test = function(req,res) {
	res.send("Ini udah benar komunikasi antara model controller dan route")
}

exports.create = function (req, res) {
	let assist = new Assist ({
		name : req.body.name,
		masuk : req.body.masuk,
		izin : req.body.izin,
		cuti : req.body.cuti
	});
	assist.save(function(err) {
		if(err) {
			return next(err)
		}
		res.send("Sukses dibikin");
	})
};

exports.show = function (req, res) {
	Assist.find({}, function(err, assist) {
	 if(err) return next (err);
	 res.send(assist)
	});
};

exports.details = function(req,res) {
	Assist.findById(req.params.id, function(err, assist) {
		if (err) return next(err);
		res.send(assist);
	});
};

exports.update = function(req,res) {
	Assist.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, assist) {
		if (err) return next(err);
		res.send("Update Berhasil");
	});
};

exports.delete = function(req,res) {
	Assist.findByIdAndRemove(req.params.id, function(err) {
		if(err) return next(err);
		res.send("Data Berhasil Didelete");
	});
};


