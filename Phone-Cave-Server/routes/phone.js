var express = require('express');
var router = express.Router();
const Phone = require('../models/Phone.model');

router.get('/', async (req, res) => {
    try {
        const foundPhones = await Phone.find()
        res.status(200).json(foundPhones)
    } catch (error) {
        console.error("Could not find phones", error)
        res.status(500).json({errorMsg: "Could not find phones", error})
    }
});

router.get("/details/:phoneId", async (req, res) => {
    const { phoneId } = req.params
    try {
        const foundPhone = await Phone.findById(phoneId)
        res.status(200).json(foundPhone)
    } catch (error) {
        console.error(`Could not find phone ${phoneId}`, error);
        res.status(500).json({errorMsg: `Could not find phone ${phoneId}`, error})
    }
})

module.exports = router;
