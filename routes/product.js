const express = require('express');
const router = express.Router();
router.get('/', function(req, res, next) {
    //all items to display will go here
});
router.get('/{id}', function(req, res, next) {
    //item details will go here
});
module.exports = router;