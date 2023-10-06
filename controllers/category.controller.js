const categoryService = require("../services/category.services")

exports.findAll = async(req , res) => {
    console.log("Find all categories")
    try{
        const result = await categoryService.findAll()
        res.status(200).json({ status: true, data: result})
        console.log("Success in finding all categories")
    }catch (error) {
        res.status(400).json({status: false, data: error})
        console.log("Problem in finding categories")
    }
    
}

exports.create = async(req, res) => {

    console.log("Insert new category name")
    const name = req.body.name
try{

    const result = await categoryService.create(name)
    res.status(200).json({status: true, data: result})
    console.log("Category was inserted")
}catch (err) {
    res.status(400).json({status: false, data: err})
    console.log("Problem in saving category")
}  
}

exports.findOne = async (req, res) => {
    console.log("Find one category")
    const id = req.body.id
    try{
        const result = await categoryService.findOne(id)
        res.status(200).json({status: true, data: result})
        console.log("Category was found")
    }catch(err) {
        res.status(400).json({status: false, data: err})
        console.log("Problem in finding id")
    }
}

exports.update = async (req, res) => {
    const id = req.params.id

    console.log("Update category with id: " + id)

    try{
        const result = await categoryService.update(req.body)
        res.status(200).json({status: true, data: result})
        console.log("Category was updated")
    }catch{
        res.status(400).json({status: false, data: err})
        console.log("Problem in uppdating category")
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id
    console.log("Delete category with id: " + id)

    try{
        const result = await categoryService.deleteCategory(id)
        res.status(200).json({status: true, data: result})
        console.log("Category was deleted")
    }catch{
        res.status(400).json({status: false, data: err})
        console.log("Problem in deleting category")
    }
}