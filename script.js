const express = require('express');
const app = express();
const port = 3000;

// Sample data for Mukasa
const mukasaInfo = {
    name: 'Mukasa',
    age: 19,
    birthplace: 'London',
};

const mukasaWorkoutRoutine = {
    day1: {
        exercises: ['Converging chest press', 'DB lateral raises', 'Tricep rope extensions'],
        sets: [3, 2, 3],
    },
    day2: {
        exercises: ['Lat pulldowns', 'Preacher curls', 'Unilateral cable rows'],
        sets: [3, 3, 3],
    },
    // Add more workout days if needed
};

// Endpoint to get Mukasa's basic information
app.get('/api/mukasa', (req, res) => {
    res.json(mukasaInfo);
});

// Endpoint to get Mukasa's workout routine
app.get('/api/mukasa/workout', (req, res) => {
    res.json(mukasaWorkoutRoutine);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
