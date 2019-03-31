import { CREATE_NODE, DELETE_NODE } from '../actions';
import { GROUP, USER } from '../constants';

const nodes = (state = {}, action) => {
  switch (action.type) {
    case CREATE_NODE:
      if (isNameExsiting(state, action.name)) {
        alert('This name is in use, try another');
        return state;
      }

      if (!isNodeLegal(action)) {
        return state;
      }

      var a = {
        ...state,
        [action.id]: { name: action.name, type: action.nodeType }
      };
      console.log(a);
      return a;

    case DELETE_NODE:
      if (!isNameExsiting(state, action.name)) {
        alert('No such user/group, check it');
        return state;
      }
      state = { ...state };
      Object.entries(state).forEach(entry => {
        if (entry[1].name === action.name) {
          delete state[entry[0]];
        }
      });
      return state;

    default:
      return state;
  }
};

const isNodeLegal = action => {
  if (action.nodeType === GROUP || action.nodeType === USER) {
    return true;
  } else {
    alert('Invalid type');
    return false;
  }
};

const isNameExsiting = (nodes, name) => {
  if (
    Object.entries(nodes).findIndex(entry => {
      return entry[1].name.toLowerCase() === name.toLowerCase();
    }) >= 0
  ) {
    return true;
  }
  return false;
};

export default nodes;
