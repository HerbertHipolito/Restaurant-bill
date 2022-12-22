const router =  require('express').Router();
const {getAllTablesControllers,getOneTableController} = require('../controllers/tableControllers');

router.get('/',getAllTablesControllers);
router.get('/table/:id',getOneTableController);

module.exports = router;