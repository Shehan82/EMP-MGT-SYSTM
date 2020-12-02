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
        res.redirect('/');
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

    // res.send(req.query.id);
    
    const found = await student.findByIdAndDelete(req.query.id,(err, data)=>{
        if(!err)
        {
            res.redirect('/');
            // res.send("deleted" + data);
            // res.send(data);
        }
        else
        {
            res.send("helloo i does not found");

        }
    });
  
});



module.exports = router;