const User = require('../models/userModel');
const loginUserController = async (req, res) => {
    res.json({message: req.body.email})
}
const signUpUserController = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.signup(email, password);
        res.status(200).json({email,user})
    }catch(err){
        res.status(400).json({message: err.message})
    }
}
module.exports = {loginUserController, signUpUserController}