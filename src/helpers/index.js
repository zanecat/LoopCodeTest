import { store } from "..";

export const getKeyByNode = (name, type) => {
  console.log(store)
  const nodes = store.getState().nodes
  return Object.keys(nodes)[Object.keys(nodes).findIndex(key => (nodes[key].name === name && nodes[key].type === type))]
}
