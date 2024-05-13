const table  = require('../models/firstmodel')

module.exports.getExpanse=(req,res)=>{
  table.findAll().then((result)=>{
    //console.log(result);
    res.status(200).json({Expanse:result})
  })
}

module.exports.postExpanse=async(req,res)=>{
   const amount=req.body.amount
   const description=req.body.description
   console.log();
   const item = req.body.item

   const allExpanse= await table.create({
    amount,
    description,
    item
   })
   //console.log(allExpanse);
   res.status(200).json({ expenses: allExpanse });

}

module.exports.deleteExpanse = (req,res)=>{
     const eId = req.params.id;
     console.log(eId);
     table.destroy({where :{id:eId}}).then((result)=>{
         console.log(result+'ITS WORKING');
         res.status(200).json({ message: 'Successfull' })
     })
}

module.exports.editEpanse= async (req,res)=>{
  const uId = req.params.id;
  const updatedExpense = req.body.amount;
  const updatedDescription = req.body.description;
  const updatedCategory = req.body.item;
  const expenses = await expenseTable.findOne({ where: { id: uId } });
  expenseTable.expense = updatedExpense;
  expenseTable.description = updatedDescription;
  expenseTable.category = updatedCategory;

  await expenses.save()
}