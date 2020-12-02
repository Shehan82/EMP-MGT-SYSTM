const express = require('express');
const student = require('../models/studentModel');
const router = express.Router();

router.get('/create',(req,res)=>{
    res.render('test',{title:"test page!", arr:[1,2,3,4]});
})

module.exports = router;