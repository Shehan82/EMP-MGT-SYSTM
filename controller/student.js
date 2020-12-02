const express = require('express');
const student = require('../models/studentModel');
const router = express.Router();

router.get('/create',(req,res)=>{
    res.render('createStu',{title:"Create student", status:"hidden"});
});

router.post('/create',(req,res)=>{
    const s1 = new student(
        {
            name:req.body.name,
            town:req.body.town
        }
    )

    const a = s1.save();

    if(a)
    {
        res.render('createStu',{title:"Create student", status:""});
    }


});

module.exports = router;