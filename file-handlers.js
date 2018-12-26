const fs = require('fs');

const {
    DEFAULT_ACCEPTED_FILE_TYPES,
    READ_DIR_SYNC_OPTIONS,
    FILE_TYPE_MATCHER_REGEX
} = require(__dirname + '/constants');

const { directoryExists, exit } = require(__dirname + '/utils');

const returnExtension = (fileName = '') => FILE_TYPE_MATCHER_REGEX.exec(fileName)[1];

const extensionIsValid = file => DEFAULT_ACCEPTED_FILE_TYPES.includes(returnExtension(file.name));

const validFileList = (files = []) => files
    .filter(extensionIsValid)
    .map(file => file.name);

const createAudioFileList = (directoryPath = '') => {
    if (directoryExists(directoryPath)) {
        const allFiles = fs.readdirSync(directoryPath, READ_DIR_SYNC_OPTIONS);

        return validFileList(allFiles);
    }

    exit('directory does not exist');
};

module.exports = {
    createAudioFileList
};