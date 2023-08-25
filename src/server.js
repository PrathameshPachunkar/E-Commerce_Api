const express = require('express')
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan");
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const app = express();
const UserRoutes = require("./Routes/user_routes")
const CategoryRoutes = require("./Routes/category_routes")
const ProductRoutes = require("./Routes/product_routes")
const CartRoutes = require("./Routes/cart_routes")
const OrderRoutes = require("./Routes/order_routes")




mongoose.connect("mongodb://localhost:27017")

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use(helmet())
app.use(morgan('dev'))
app.use(cors());
app.use("/api/user",UserRoutes)
app.use('/api/category',CategoryRoutes)
app.use('/api/products',ProductRoutes)
app.use('/api/cart',CartRoutes)
app.use('/api/order',OrderRoutes)



const port = 5000;

app.listen(port, (()=>{console.log(`server started at port ${port}`)}));