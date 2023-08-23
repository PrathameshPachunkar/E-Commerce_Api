const {Schema,model} = require("mongoose")

const catergoty_Schema = new Schema({
    title:{ type: String,required:[true,"title is required"]},
    description:{type: String, default:""},
    updatedon:{type:Date},
    createdon:{type:Date},
})

const category_model = model("Category",catergoty_Schema)

catergoty_Schema.pre("save",function(next){
    catergoty_Schema.getupdate();
    this.createdon = new Date();
    this.updatedon = new Date();
    

    next();

})

catergoty_Schema.pre(["update","updateOne","findOneAndUpdate"],function(next){
   const update = getupdate();
   delete update._id;
  
 //  delete update.email;

   update.updatedon = new Date();
   
   next();
})

module.exports = category_model;