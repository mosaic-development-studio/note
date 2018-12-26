const fs = require('fs');

const {
    CONSOLE_COLORS: {
        RED,
        YELLOW
    }
} = require(__dirname + '/constants');

const { logger } = require(__dirname + '/logging');

const directoryExists = (directoryPath = '') => {
    try {
        return fs.existsSync(directoryPath);
    }

    catch(e) {
        logger(e, RED);
    }
};

const exit = (color = YELLOW, log) => {
    logger(log, color);
    process.exit(-1);
};

module.exports = {
    directoryExists,
    exit
};