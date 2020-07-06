const { spookyTypes } = require('./types');

//code actions here
function incrementStep() {
  return {
    type: spookyTypes.incrementStep,
    add: 1
  }
}

function createNewSpookySound(sound) {
  return {
    type: spookyTypes.newSound,
    sound
  }
}

module.exports = {
  incrementStep,
  createNewSpookySound,
};
