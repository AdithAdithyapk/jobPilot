const express = require('express');

const { logger } = require('../middleware/logging');

const router = express.Router();

router.get('/', (req, res) => {
    logger.silly('Health check');
    res.send(`Server is up and running at ${new Date()}`);
});

router.use('/api/ai', require('./ai.router'));

module.exports = router;
