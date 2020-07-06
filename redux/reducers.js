const { spookyTypes } = require('./types');

const initialState = {
  // code initial state here
  steps: 0,
  spookySounds: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // code case statements here
    case 'INCREMENT_STEP': {
      const steps = state.steps + action.add;
      state = {
        ...state,
        steps
      }
    }
    case 'NEW_SOUND': {
      const spookySounds = [...state.spookySounds, action.sound]
      state = {
        ...state,
        spookySounds
      }
    }
    default:
      return state;
  }
};

module.exports = rootReducer;
