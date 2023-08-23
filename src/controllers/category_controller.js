const CategoryRoutes = require("../Routes/category_routes");
const CategoryModel = require("./../models/category_model")


const CategoryController = {
    CreateCategory: async function(req,res){
        try{
            const CategoryData = req.body;
            const newCategory = CategoryModel(CategoryData)
            await  newCategory.save()
            return res.json({success:true,CreatedCategory:newCategory,message:"Category Created"})
        }
        catch(err){
            return res.json({message:err})
        }
    },

    fetchAllCategories: async function(req,res){
        try{
            
            const categories = await CategoryModel.find();
            return res.json({success:true,categories:categories})
        }

        catch(err){
            return res.json({succses:false,messgae:err})
        }
    },

    fetchCategoryById: async function(req,res){
        try{
            const id = req.params.id;
            const FoundCategory = await CategoryModel.findById(id);
            if(!FoundCategory){
                return res.json({success:false,message:"Category Not Found!" })
            }
            return res.json({success:true,category:FoundCategory})
        }

        catch(err){
            return res.json({succses:false,message:err})
        }
    },
}

module.exports = CategoryController;