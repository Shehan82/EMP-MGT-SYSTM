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
        res.render('viewStu',{title:"Create student"});
    }
    else
    {
        
    }


});

router.get('/',async(req,res)=>{
    const students = await student.find().lean().exec();
    res.render('viewStu',{data:students});
    
    // res.json(students);
});

router.get('/delete',async(req,res)=>{
    
    const found = await student.findById("5fc786d01cfdea35ac40761d",(err,data)=>{
        if(!err)
        {
            res.send(req.query.id);
        }
        else
        {
            res.send("helloo i does not found");

        }
    });
    // if(found)
    // {
        
    // }
    // else
    // {
    //     res.send("helloo i found");
    // }
});



module.exports = router;