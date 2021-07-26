const router = require("express").Router();
const path = require("path");

router.get('/exercise', (req, res) => {
    // dirname is current directory
    const dirPath = path.join(__dirname, '..', 'public', 'exercise.html');
    res.status(200).sendFile(dirPath);
});

router.get('/stats', (req, res) => {
    // dirname is current directory
    const dirPath = path.join(__dirname, '..', 'public', 'stats.html');
    res.status(200).sendFile(dirPath);
});

module.exports = router;