const express = require('express')
const router = express.Router()
const Exercise = require('../models/exerciseModel')

router.get('/', (req, res) => {
    Exercise.find()
        .then(Exercises => { res.json(Exercises) })
        .catch(err => { res.status(404).json('Error:' + err) })
})

router.post('/add', (req, res) => {
    const newExercise = new Exercise({
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date),
    })
    newExercise.save()
        .then(() => { res.json("Exercise added..") })
        .catch(err => { res.status(404).json('Error:' + err) })
})

router.get('/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then((exercise) => { res.json(exercise) })
        .catch(err => { res.status(404).json('Error:' + err) })
})

router.delete('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => { res.json("Deleted...") })
        .catch(err => { res.status(404).json('Error:' + err) })
})

router.put('/update/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username
            exercise.description = req.body.description
            exercise.duration = Number(req.body.duration)
            exercise.date = Date.parse(req.body.date)
            exercise.save()
                .then(() => { res.json("Sucessfully updated..") })
                .catch(err => { res.status(404).json('Error:' + err) })
        })
        .catch(err => { res.status(404).json('Error:' + err) })
})
module.exports = router;