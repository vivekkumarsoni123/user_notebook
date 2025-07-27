const jwt = require('jsonwebtoken');
const jwt_secret = process.env.JWT_SECRET;
<<<<<<< HEAD

=======
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
const fetchuser = (req, res, next)=> {
    // get the token from the header and add id to the user
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send({error: "please authenticate using a valid token"});
    }

    try {
        const data = jwt.verify(token, jwt_secret);
        req.user = data.user;
        next();
    } catch (error) {
        console.error(error.message)
        res.status(401).send({error: "please authenticate using a valid token"});    }
}

<<<<<<< HEAD
module.exports = fetchuser;  
=======
module.exports = fetchuser;  
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
