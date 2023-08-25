const OrderModel = require("./../models/order_model")

const OrderController = {
    CreateOrder: async function(req,res){
        try{
            const {user,items} = req.body;
            const neworder = new OrderModel(
                {
                user:user,
                items:items,
                }
                )
                await neworder.save();

               return res.json({success:true,message:"Order Created",data:neworder})

        }

        catch(err){
           return  res.json({success:false,message:err})
        }
    },

    fetchorderforuser: async function(req,res){
        try{
            const userid = req.params.userid;
            const findorder = await OrderModel.findOne(
                {"user.id":userid}
            )

            if(!findorder){
                return res.json({success:false,message:"No Orders Found"})
            }

            return res.json({success:true,message:"Found order",data:findorder})

        }

        catch(err){
           return  res.json({success:false,message:err})
        }
    },

    updateorderstatus: async function(req,res){
        try{
            const {orderid , status} = req.body;
            const updateorder = await OrderModel.findOneAndUpdate(
                {_id:orderid},
                {status:status},
                {new:true}
            )

            return res.json({succes:true,message:"status updated",status:status})
        }
        catch(err){
            return res.json({succes:false,message:err})
        }
    }

    

    
}

module.exports = OrderController