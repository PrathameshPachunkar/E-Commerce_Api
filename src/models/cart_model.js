const {Schema,model} = require("mongoose")

const CartProductsSchema = new Schema({
    product:{type:Schema.Types.ObjectId,ref:'Product'},
    quantity:{type:Number,default:1}
})

const CartSchema = new Schema({
    user:{type:Schema.Types.ObjectId,ref:'User'},
    items:{type:[CartProductsSchema],default:[]},
    updatedon:{type:Date},
    createdon:{type:Date},
})

const cart_model = model("Cart",CartSchema)

CartSchema.pre("save",function(next){
    CartSchema.getupdate();
    this.createdon = new Date();
    this.updatedon = new Date();
    

    next();

})

CartSchema.pre(["update","updateOne","findOneAndUpdate"],function(next){
   const update = getupdate();
   delete update._id;
  
 //  delete update.email;

   update.updatedon = new Date();
   
   next();
})

module.exports = cart_model;