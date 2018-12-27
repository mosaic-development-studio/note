const playSound = require('play-sound')({});

const { createAudioFileList } = require(__dirname + '/file-handlers');
const { logger } = require(__dirname + '/utils');

// this needs to be dynamic
const directory = './test/tracks/';

const audioFileList = createAudioFileList(directory);

// this needs to be custom
playSound.play(directory + audioFileList[0], err => logger('Error: ' + err));
