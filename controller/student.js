const express = require('express');
const student = require('../models/studentModel');
const router = express.Router();

router.get('/create',(req,res)=>{
    res.render('createStu',{title:"Create student"});
});

router.post('/create',(req,res)=>{
    res.send(req.body);
    const s1 = new student(
        {
            name:req.body.name,
            town:req.body.town
        }
    )

    const a = s1.save();


});

module.exports = router;