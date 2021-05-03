const router = require("express").Router();
// const passport = require("passport");


function isAuthorized (req , res , next)  {
    if(req.user ){
        console.log("User is loged in");
        next()
    }
    else {
        res.redirect('/');
    }
}

router.get('/' , (req , res) => {
    res.json(req.user);
})
module.exports = router;