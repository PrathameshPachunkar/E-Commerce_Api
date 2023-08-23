const {Schema , model } = require("mongoose")
const uuid = require("uuid")
const bcrypt = require("bcrypt")
const user_model = new Schema({
    id:{type:String , unique:true },
    fullname:{type:String , default:""},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phonenumber:{type:String, default:""},
    address:{type:String,default:""},
    city:{type:String,default:""},
    state:{type:String,default:""},
    profileprogress:{type:Number,default:0},
    createdon:{type:Date},
    updatedon:{type:Date},
})

user_model.pre("save",function(next){
    this.id = uuid.v1();
    this.createdon = new Date();
    this.updatedon = new Date();
    const  salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password,salt);
    this.password = hash;

    next();

})

user_model.pre(["update","updateOne","findOneAndUpdate"],function(next){
   const update = getupdate();
   delete update._id;
   delete update.id;
 //  delete update.email;

   update.updatedon = new Date();
   
   next();
})

UserModel = model( 'User',user_model);

module.exports = UserModel;
