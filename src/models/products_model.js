const {Schema,model} = require("mongoose")

const ProductSchema = new Schema({
    category: {type:Schema.Types.ObjectId,ref:'Category',required:true},
    title:{ type: String,required:[true,"title is required"]},
    price:{type:Number,required:true},
    images:{type:Array, default:[]},
    description:{type: String, default:""},
    updatedon:{type:Date},
    createdon:{type:Date},
})

const Product_model = model("Product", ProductSchema)

ProductSchema.pre("save",function(next){
    Product_Schema.getupdate();
    this.createdon = new Date();
    this.updatedon = new Date();
    

    next();

})

ProductSchema.pre(["update","updateOne","findOneAndUpdate"],function(next){
   const update = getupdate();
   delete update._id;
  
 //  delete update.email;

   update.updatedon = new Date();
   
   next();
})

module.exports = Product_model;