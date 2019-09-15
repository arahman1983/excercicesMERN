const express = require('express');
let Excercise = require('../models/excercise.model')

const router = express.Router();
router.route('/').get((req,res)=>{
    Excercise.find()
        .then(excercisis=>res.json(excercisis))
        .catch(err=>res.status(400).json('Error: '+ err))
})


router.route('/:id').get((req,res)=>{
    Excercise.findById(req.params.id)
    .then(exceraise=>res.json(exceraise))
    .catch(err=>res.status(400).json('Error: '+ err))
})

router.route('/:id').delete((req,res)=>{
    Excercise.findByIdAndRemove(req.params.id)
    .then(()=>res.json(`exceraise with id : ${req.params.id} was deleted`))
    .catch(err=>res.status(400).json('Error: '+ err))
})

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExcercise = new Excercise({username,description,duration,date})
    newExcercise.save()
        .then(()=>res.json('Excersices Added'))
        .catch(err=>res.status(400).json('Error: '+ err))
})


router.route('/update/:id').put((req,res)=>{
    Excercise.findByIdAndUpdate(req.params.id)
    .then(excersise =>{
        excersise.username = req.body.username;
        excersise.description = req.body.description;
        excersise.duration = Number(req.body.duration);
        excersise.date = Date.parse(req.body.date);
        excersise.save()
        .then(()=>res.json('Excersices Edited'))
        .catch(err=>res.status(400).json('Error: '+ err))
    })

})



module.exports = router