const CartModel = require("./../models/cart_model")

const CartController = {
    findcartforuser: async function(req,res){
        try{
            const user = req.params.user;
            const FindCart = CartModel.findOne(
                {user:user}
            )

            if(!FoundCart){
                return res.json({
                    success:true,
                    data:[]
                })
            }
            return res.json({
                success:true,
                data:FindCart.items
            })
        }

        catch(err){
            res.json({success:false,message:err})
        }
    },
    addToCart: async function(req,res){
        try{
            const {user,product,quantity} = req.body;
            const FoundCart = await CartModel.findOne({user:user})
            if(!FoundCart){
                const newcart = new CartModel({user:user})
                newcart.items.push({
                    product:product,
                    quantity:quantity
                });

                 newcart.save();
                return res.json({success:true,message:"Product added to cart",data:newcart.items})
            }

           const UpdatedCart = await CartModel.findOneAndUpdate(
                {user:user},
                {$push:{items:{product:product,quantity:quantity}}},
                {new:true}
            )
            return res.json({success:true,message:"Product added to cart",data:UpdatedCart.items})
        }
        catch(err){
            return res.json({success:false,message:err})
        }
    },

    removefromcart: async function(req,res){
        try{
            const {user,product,quantity} = req.body;
            const UpdatedCart = await CartModel.findOneAndUpdate(
                {user:user},
                {$pull:{items:{product:product}}}
                {new:true}
            )

            return res.json({success:true,message:"Product Removed From The Cart", Cart:UpdatedCart})
        }
        catch(err){
            return res.json({success:false,message:err})
        }
    }
}

module.exports = CartController