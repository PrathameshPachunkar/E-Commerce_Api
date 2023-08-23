const UserRouter = require("express").Router();
const UserController = require("./../controllers/Usercontroller")

UserRouter.post('/createaccount',UserController.createaccount)
UserRouter.post('/signIn',UserController.signIn)

module.exports = UserRouter;