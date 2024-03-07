const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const bcrypt = require('bcrypt');

// REGISTER
router.post("/register", async (req, res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        
console.log(newUser);
        // Wait for the user to be saved to the database before responding
        const user = await newUser.save();

        // Send a successful response with the saved user data
        res.status(200).json(user);
    } catch (err) {
        // Handle errors and send an error response
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req,res)=> {
    try{
        const user =await User.findOne({username: req.body.username})
        if (!user)  {
        return res.status(400).json("Wrong credentials!")    
                    }

        const validated = await bcrypt.compare(req.body.password, user.password)
        if (!validated) {
        return res.status(400).json("Wrong Credentials!")
                        }

        const { password, ...others } = user._doc;
        return res.status(200).json(others);
    
    }catch(err){
        return res.status(500).json(err);
    }
})

module.exports = router;
