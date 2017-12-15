const express = require('express');
const router = express.Router();
router.get('/', function(req, res, next) {
    //all items to display will go here
});
router.get('/{id}', function(req, res, next) {
    //item details will go here
});
router.post('/{id}/add', function(req, res, next) {
    //adding of product will go here
});
router.post('/{id}/remove', function(req, res, next) {
    //removing of product will go here
});
module.exports = router;