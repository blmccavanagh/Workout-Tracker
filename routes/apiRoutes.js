const router = require("express").Router();
const { Workout } = require('../models');

// CRUD
// Create, Read, Update, Delete

// POST, GET, PUT/PATCH, DELETE

// GET downloading and reading HTML resources
// api/json list (such as api/users returns a list of users as an array)
// api/json response specific eg /api/users/5 returns user #5

router.get('/workouts', async (req, res) => {
    try {
        const workoutData = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration",
                    }
                }
            }
        ]);
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json({errors: err});
    }
});

// api/workouts/range - GET request
// likely to be reading a list of resources

module.exports = router;