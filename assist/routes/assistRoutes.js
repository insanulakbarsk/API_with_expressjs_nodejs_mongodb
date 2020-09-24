const express = require('express');
const router = express.Router();

const assistController = require('../controller/assistController');

router.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
	next();
})

router.get("/test", assistController.test);
router.post("/create", assistController.create);
router.get("/", assistController.show);
router.get("/:id", assistController.details);
router.put("/:id/update", assistController.update);
router.delete("/:id/delete", assistController.delete);

// router.listen(4000);
module.exports = router;

