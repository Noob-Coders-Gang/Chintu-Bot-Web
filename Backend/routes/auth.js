const router = require("express").Router();

router.get('/' , (req , res) => {
    res.json({cool : "cool"})
});

module.exports = router;