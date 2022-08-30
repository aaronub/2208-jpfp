const router = require('express').Router();
const {Student} = require('../db')


//GET /api/students
router.get('/', async(req,res,rext)=>{
    try {
        const students = await Student.findAll();
        res.send(students);
        
    } catch (error) {
        next(error)
    }
})


module.exports = router