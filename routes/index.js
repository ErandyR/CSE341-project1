const router = require('express').Router();

router.use("/swagger", require("./swagger"));

router.get("/", (req, res) => {
    // #swagger tags = ['Hello World']
    res.send("Hello CSE341!");
});

router.use("/contacts", require("./contacts"));

module.exports = router;