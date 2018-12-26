const CONSOLE_COLORS = {
    CYAN: '\x1b[36m',
    GREEN: '\x1b[32m',
    MAGENTA: '\x1b[35m',
    RED: '\x1b[31m'
};

const DEFAULT_ACCEPTED_FILE_TYPES = ['mp3', 'wav'];

const LOGGER_TYPES = {
    CAUTION: 'caution',
    DEFAULT: 'default',
    ERROR: 'error',
    SUCCESS: 'success'
};

const READ_DIR_SYNC_OPTIONS = {
    encoding: 'utf8',
    withFileTypes: true
};

const FILE_TYPE_MATCHER_REGEX = /(?:\.([^.]+))?$/;

const MESSAGE_COLORS = {
    [LOGGER_TYPES.CAUTION]: CONSOLE_COLORS.MAGENTA,
    [LOGGER_TYPES.DEFAULT]: CONSOLE_COLORS.CYAN,
    [LOGGER_TYPES.ERROR]: CONSOLE_COLORS.RED,
    [LOGGER_TYPES.SUCCESS]: CONSOLE_COLORS.GREEN
};

module.exports = {
    CONSOLE_COLORS,
    DEFAULT_ACCEPTED_FILE_TYPES,
    LOGGER_TYPES,
    READ_DIR_SYNC_OPTIONS,
    FILE_TYPE_MATCHER_REGEX,
    MESSAGE_COLORS
};