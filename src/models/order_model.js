const {Schema,model} = require("mongoose")

const OrderSchema = new Schema({
    product:{type:Map,required:true},
    quantity:{type:Number,default:1},
})

const Order_Schema = new Schema({
    user:{type:Map,required:true},
    items:{type:[OrderSchema],default:[]},
    status:{type:String,default:"Order-Placed"},
    updatedon:{type:Date},
    createdon:{type:Date},
})

const Order_model = model("Order",Order_Schema)

Order_Schema.pre("save",function(next){
    Order_Schema
.getupdate();
    this.createdon = new Date();
    this.updatedon = new Date();
    

    next();

})

Order_Schema.pre(["update","updateOne","findOneAndUpdate"],function(next){
   const update = getupdate();
   delete update._id;
  
 //  delete update.email;

   update.updatedon = new Date();
   
   next();
})

module.exports = Order_model;