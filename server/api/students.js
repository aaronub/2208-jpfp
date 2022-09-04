const router = require('express').Router();
const {Student} = require('../db')
const {Campus} = require('../db')
const {Op} = require('sequelize')


//GET /api/students, /api/students?page=1 - 10
router.get('/', async(req,res,next)=>{
    try {
        if (req.query.page) {
            for (let i = 1; i <= 10; i++) {
                if (req.query.page === String(i)) {
                    const students = await Student.findAll({
                        where:{
                            id:{
                                [Op.between]:[i*10-9,i*10],
                            }
                        }
                    })
                    res.send(students)
                }               
            }
        } else {       
            const students = await Student.findAll();
            res.send(students);
        }
        
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

//PUT /api/student/:id
router.put('/:id', async(req, res, next)=>{
    try {
        const student = await Student.findByPk(req.params.id)
        student.update(req.body)
        res.send(student);      
    } catch (error) {
        next(error)
    }
})

module.exports = router