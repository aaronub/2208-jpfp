const router = require('express').Router();
const {Campus} = require('../db')
const {Student} = require('../db')


//GET /api/campuses
router.get('/', async(req,res, next)=>{
    try {
        const campuses = await Campus.findAll();
        res.send(campuses);
        
    } catch (error) {
        next(error)
    }
})

//GET /api/campuses/:id, including that campus students
router.get('/:id', async(req, res, next)=>{
    try {
        const campus = await Campus.findByPk(req.params.id,
            {include:Student})
        //  const campus = await Campus.getStudents({
        //     where:{
        //         id:req.params.id
        //     }
        // })
        res.send(campus)
    } catch (error) {
        next(error)
    }
})

module.exports = router