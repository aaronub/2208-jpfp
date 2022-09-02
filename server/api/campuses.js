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
        res.send(campus)
    } catch (error) {
        next(error)
    }
})

//POST /api/campuses
router.post('/', async (req, res, next) => {
    try {
        const campus = await Campus.create(req.body);
        res.status(201).send(campus)
        
    } catch (error) {
        next(error)
    }
})

//DELETE /api/campuses/:id
router.delete('/:id', async (req, res, next)=>{
    try {
        const campus = await Campus.findByPk(req.params.id)
        await campus.destroy()
        res.send(campus)
    } catch (error) {
        next(error)
    }
})

// PUT /api/campuses/:id
router.put('/:id', async (req, res, next)=>{
    try {
        const campus = await Campus.findByPk(req.params.id, {include:Student});
        campus.update(req.body);
        res.send(campus)
    } catch (error) {
        next(error)
    }
})


module.exports = router