const UserModel = require("./../models/user_model")
const bcrypt = require("bcrypt")
const UserController = {
    createaccount: async function(req,res){
        try{
            const UserData = req.body;
            const newUser = new UserModel(UserData);
           await newUser.save();
            return res.json({success:true,Data:newUser,message:"New User Created"})
            
        }
        catch(error){
            return res.json({success:false,message:error})
        }
    },

    signIn: async function(req,res){
        try{

            const {email,password} = req.body
            const foundUser = await UserModel.findOne({email:email})
            if(!foundUser){
                return res.json({success:false,message:"User not found"})
            }

            const passwordMatch = bcrypt.compareSync(password,foundUser.password)

            if(!passwordMatch){
                return res.json({success:false,message:"password not correct!"})
            }

            return res.json({success:true,data:foundUser});

        }
        catch(err){return res.json({success:false,message:err})}
    }


}

module.exports = UserController;