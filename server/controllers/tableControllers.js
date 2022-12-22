const table = require('../model/table');
const foods = require('../model/food');

const getAllTablesControllers = async (req,res) => {

    try{

        const Alltables =  await table.find({});
        if(!Alltables || Alltables.length === 0 ) throw new Error('tables not found')   
        return res.status(200).send({data:Alltables,error:false});

    }catch(error){
        return res.status(404).send({error:error.message})
    }

}

const getOneTableController = async (req,res) => {

    try{
        if(req?.params?.id) 
            var Table =  await table.findById(req.params.id)
        else if(req?.body?.tableNumber)
            var Table =  await table.findOne({number:req.body.tableNumber})
        
        if(!Table) throw new Error('table not found')
           
        const myOrders = Table.orders;
        const gettingOrdedFoods = await foods.find({_id:{$in:myOrders}})

        if(!gettingOrdedFoods) throw new Error('Something went wrong when trying to find the foods');

        Table.orders = gettingOrdedFoods
        
        return res.status(200).send({data:Table,error:false});

    }catch(error){
        return res.status(404).send({error:error.message})
    }

}

module.exports = {getAllTablesControllers,getOneTableController}