const express = require('express');
const router = express.Router();
router.get('/confirmation', function(req, res, next) {
    //confirmation page will go here
});
router.get('/checkout', function(req, res, next) {
    //checkout page will go here
});
router.post('/pay', function(req, res, next) {
    //payment api consumption of UnionBank will go here
});
module.exports = router;