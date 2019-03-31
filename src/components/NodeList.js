import React from 'react';
import ShowNodes from '../containers/ShowNodes';
import { GROUP } from '../constants';

const NodeList = ({ nodes, members, parentKey, currentKey }) => {
  //check the first level groups, if currentKey not offered, than it's the init of recursion
  //else if it's defined, than use that key to render template
  const keys = currentKey
    ? [currentKey]
    : getKeysByParent(nodes, members, parentKey);

  if (!keys || keys.length < 1) {
    return null;
  }

  return keys.map(key => {
    if(typeof nodes[key] !== 'undefined'){
      return (
        <React.Fragment>
          <div className={"node-name " + (nodes[key].type === GROUP ? "group-name" : "user-name" )}>{nodes[key].name}</div>
          <ul>{renderChildren(nodes, members, key)}</ul>
        </React.Fragment>
      );
    }
    return null;
    
  });
};

const renderChildren = (nodes, members, currentKey) => {
  return getKeysByParent(nodes, members, currentKey).map(key => {
    return (
      <React.Fragment>
        <li>
          <div key={key}>
            <ShowNodes parentKey={currentKey} currentKey={key} />
          </div>
        </li>
      </React.Fragment>
    );
  });
};

const getKeysByParent = (nodes, members, parent) => {
  if (typeof parent === 'undefined') {
    return Object.keys(nodes).filter(
      key =>
        members.map(member => member.from).indexOf(key) < 0 &&
        nodes[key].type === GROUP
    );
  } else {
    return members
      .filter(member => member.to === parent)
      .map(member => member.from);
  }
};

export default NodeList;
