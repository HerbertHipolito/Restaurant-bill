const foods = require('../model/food');

const getAllFoodsControler = async (req,res) =>{

    try{
        const allFoods = await foods.find();
        if(!allFoods || allFoods.length === 0) throw new Error('Food not found');
        res.status(200).send({data: allFoods,error:false});        
    }catch(error){
        res.status(500).send({error: error.message});
    }

}

const getOneFoodController = async (req,res) => {

    try {
        
        const food = await foods.findOne({name: req.params.name})
        if(!food)  throw new Error('Food not found');

        res.status(200).send({data: food,error:false});

    }catch(error){
        res.status(500).send({error: error.message});
    }
}

module.exports = {getAllFoodsControler,getOneFoodController}