const express = require('express');
const User = require('../models/Users')
const router = express.Router();
const { body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../Middleware/fetchuser');

const jwt_secret = process.env.JWT_SECRET;

// ROUTE 1: create a new user using post: "/api/auth/createuser" . no login required
router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    
] , async (req,res)=> {

        // if errors occur then return bad errors here itself
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
    
    try {
            //create user with specific data    
        let success = false;
        let user = await User.findOne({email: req.body.email});
        if(user) {
            return res.status(400).json({success,error: "a user with this email already exists"});
        }
        // create a new user
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });
        // .then(user => res.json(user)).catch(err => {console.log(err)
        // res.json({error: 'please enter valid email', message: err.message})})
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data,jwt_secret);
        success = true;
        res.json({success,authtoken});

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Internal server error occured");
    }    

})

// ROUTE 2: authenticate a new user using post: "/api/auth/login" . No login required
router.post('/login', [
    body('email').isEmail(),
    body('password').exists(),
    
] , async (req,res)=> {

    // if errors occur then return bad errors here itself
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    
    const {email,password} = req.body;
    try {
        //check user exists or not    
        let success = false;
        let user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({success, error: "please enter a valid credential"});
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        if(!passwordCompare) {
            return res.status(400).json({success, error: "please enter a valid credential"});
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data,jwt_secret);
        success = true;
        res.send({success,authtoken});

    }  
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some Internal server error occured");
    } 


})   

// ROUTE 3: Get user id by the authtoken generated of the logged in user. Login required
router.post('/getuser', fetchuser, async (req,res)=> {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Internal server error occured");
    }


})

module.exports = router;      

