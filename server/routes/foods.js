const router = require('express').Router()
const {getAllFoodsControler,getOneFoodController} = require('../controllers/foodControllers');

router.get('/',getAllFoodsControler);
router.get('/:id',getOneFoodController);

module.exports = router;