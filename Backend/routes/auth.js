const router = require("express").Router();
const passport = require("passport");

// router.get('/redirect' , (req , res) => {
//     res.json({cool : "cool"})
// });

router.get('/' , passport.authenticate('discord'));
router.get('/redirect' , passport.authenticate('discord') , (req , res) => {
    res.send(200)
} )
module.exports = router;