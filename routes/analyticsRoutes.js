const express = require('express');
const authmiddelware = require('../middlewares/authmiddelware');
const { bloodGroupDetailsController } = require('../controllers/analyticsController');

const router = express.Router();

//routes
//GET BLOOD DATA RECORDS
router.get('/bloodGroups-data', authmiddelware, bloodGroupDetailsController);



module.exports = router;
