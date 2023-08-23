const ProductModel = require("./../models/products_model")

const ProductController = {
    createproduct: async function(req,res){
        try{
            const ProductData = req.body;
            const newproduct = ProductModel(ProductData)
           await  newproduct.save()
            return res.json({sucess:true,messgae:"Product Created",data:newproduct})
        }
        catch(err){
            return res.json({succes:false,message:err})
        }
    },

    fetchallproducts: async function(req,res){
        try{
            const productdata = await ProductModel.find();
        return res.json({success:true,data:productdata})
        }
        catch(err){
            res.json({success:true,message:err})
        }
    },

    fetchproductbyid: async function(req,res){
        try{
            const id = req.params.id;
            const productfound = await ProductModel.findById(id);
            if(!productfound){
                return res.json({success:false,message:"Product Not Found"})
            }
            return res.json({success:true,message:"product found",data:productfound})
        }
        catch(err){
            return res.json({success:false,message:err})
        }
    },

    fetchproductsbycategory: async function(req,res){
        try{
            const categoryid = req.params.id;
            const FountProcductCategory = await ProductModel.find({category:categoryid})
            if(!FountProcductCategory){
                return res.json({success:false,messgae:"Category Not Found"})
            }
            return res.json({success:true,data:FountProcductCategory})
        }
        catch(err){
            return res.json({
                success:false,
                message:err
            })
        }
    }
}

module.exports = ProductController