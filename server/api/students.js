const router = require('express').Router();
const {Student} = require('../db')
const {Campus} = require('../db')


//GET /api/students
router.get('/', async(req,res,rext)=>{
    try {
        const students = await Student.findAll();
        res.send(students);
        
    } catch (error) {
        next(error)
    }
})

//GET /api/students/:d, including that student's campus
router.get('/:id', async (req, res, next)=>{
    try {
        const student = await Student.findByPk((req.params.id),{
            include: Campus
        })
        res.send(student)
    } catch (error) {
        next(error)
    }
})

//POST /api/students 
router.post('/', async(req, res, next)=>{
    try {
        const student = await Student.create(req.body);
        res.status(201).send(student)
    } catch (error) {
        next(error)
    }
})

//DELETE /api/students
router.delete('/:id', async (req, res, next)=>{
    try {
        const student = await Student.findByPk(req.params.id);
        student.destroy()
        res.send(student)
    } catch (error) {
        next(error)
    }
})


module.exports = router