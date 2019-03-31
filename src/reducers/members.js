import { ADD_MEMBER, REMOVE_MEMBER, DELETE_NODE } from '../actions';

const members = (state = [], action) => {
  switch (action.type) {
    case ADD_MEMBER:
      if (!isMemberValid(state, action.from, action.to)) {
        return state;
      }

      return [...state, { from: action.from, to: action.to }];

    case REMOVE_MEMBER:
      if (
        !action.from ||
        action.from.length < 1 ||
        !action.to ||
        action.to.length < 1
      ) {
        alert('Empty member or group');
        return state;
      }
      var a = state.filter(
        member => (!(member.from === action.from && member.to === action.to))
      );
      console.log(a)
      return a
    case DELETE_NODE:
      return state.filter(member => (member.from !== action.key && member.to !== action.key));
    default:
      return state;
  }
};

const getAllDescendants = (members, id) => {
  let children = [];
  members.forEach(member => {
    if (member.to === id) {
      children.push(member.from);
    }
  });

  children = children.concat(
    children
      .map(child => getAllDescendants(members, child))
      .reduce((acc, current) => [...acc, ...current], [])
  );
  return children;
};

const isMemberValid = (members, from, to) => {
  if (getAllDescendants(members, from).indexOf(to) >= 0) {
    alert(`Illegal member: ${to} is a descendant of ${from}`);
    return false;
  } else if (
    members.findIndex(
      member => member.from === from && member.to === to
    ) >= 0
  ) {
    alert(`Illegal member: ${to} is already a member of ${from}`);
    return false;
  } else {
    return true;
  }
};

export default members;
