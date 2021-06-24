const express = require("express");
const User = require("../models/User");
const router = express.Router();


router.post('/', (req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    });
    user.save().then(data => res.json({success:true,data:data}))
    .catch(err => {
        res.json({sucess:false,data: err});
    });
})

router.post('/login', (req,res) => {
    User.findOne({email: req.body.email} , (err,isMatch) => {
        if(!isMatch)
        return res.json({loginSuccess: false, message:"Email not found"});
        else if( isMatch.password !== req.body.password)
            return res.json({loginSuccess: false, message:"Wrong password"})
            else{
            authdata = {
                user_id: isMatch._id,
                name: isMatch.name
            }
            res.json({loginSuccess: true,authdata})
        }
        })
    })



router.get('/',(req,res) => {
    User.find().then(data => res.json(data))
})

module.exports = router;