const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('test',{title:"test page!", arr:[1,2,3,4]});
})

module.exports = router;