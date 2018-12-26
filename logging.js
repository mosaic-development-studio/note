const { LOGGER_TYPES, MESSAGE_COLORS } = require(__dirname + '/constants');

const logger = (message = '', type = LOGGER_TYPES.DEFAULT) =>
    console.log(MESSAGE_COLORS[type], '\n' + message); // eslint-disable-line no-console

module.exports = {
    logger
};