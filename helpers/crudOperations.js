const createOne =(model)=>async(params)=>model.create(params)
const getById = (model)=>async(id)=>model.findById(id)
const getAll = (model)=>async(params,select={})=>model.find(params,select)
const getOne = (model)=>async(params,select)=>model.findOne(params,select)
const updateById=(model)=>async(id,params)=>model.findByIdAndUpdate({_id:id},params,{new:true})
const deleteById = (model)=>async(id)=>model.findByIdAndDelete({_id:id})
const deleteOne =(model)=>async(params)=>model.findOneAndRemove(params)

const crudOperations=(model)=>({
    createOne:createOne(model),
    getById:getById(model),
    updateById:updateById(model),
    getAll:getAll(model),
    deleteById:deleteById(model),
    deleteOne:deleteOne(model),
    getOne: getOne(model)
})

module.exports= crudOperations