const express = require("express");
const router = express.Router();
const db = require('../models');


router.get('/api/workouts', (req, res) => {
  db.Workout.find({}, (err, workouts) => {
    if (err) throw err;
    console.log(workouts);
    res.json(workouts);
  })
})

router.post('/api/workouts', (req, res) => {
  let exercisePayload;
  if (req.body.type === "resistance") {
    exercisePayload = {
      duration: req.body.duration,
      name: req.body.name,
      reps: req.body.reps,
      sets: req.body.sets,
      type: req.body.type,
      weight: req.body.weight
    }
  } else if (req.body.type === "cardio") {
    exercisePayload = {
      distance: req.body.distance,
      duration: req.body.duration,
      name: req.body.name,
      type: req.body.type
    }
  }

  console.log(exercisePayload);

  db.Workout.create({
    day: new Date(),
    exercises: [exercisePayload]
  }, (err, response) => {
    if (err) throw err;
    res.status(200).send(response);
  })
})

router.put('/api/workouts/:id', (req, res) => {
  let exercisePayload;
  if (req.body.type === "resistance") {
    exercisePayload = {
      duration: req.body.duration,
      name: req.body.name,
      reps: req.body.reps,
      sets: req.body.sets,
      type: req.body.type,
      weight: req.body.weight
    }
  } else if (req.body.type === "cardio") {
    exercisePayload = {
      distance: req.body.distance,
      duration: req.body.duration,
      name: req.body.name,
      type: req.body.type
    }
  }

  db.Workout.findOneAndUpdate(
    {
    _id: req.params.id
    }, 
    {
      $set: {
        exercises: [exercisePayload]
      }
    }, (err, response) => {
      if (err) throw err;
      res.status(200).send(response);
    })
})

module.exports = router;

