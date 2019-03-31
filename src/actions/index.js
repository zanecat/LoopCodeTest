export const CREATE_NODE = 'CREATE_NODE'
export const DELETE_NODE = 'DELETE_NODE'
export const ADD_MEMBER = 'ADD_MEMBER'
export const REMOVE_MEMBER = 'REMOVE_MEMBER'

let nextUserId = 8;
let nextGroupId = 6;
export const createNode = (name, type) => ({
  type: CREATE_NODE,
  id: generateId(type),
  name,
  nodeType: type
})

const generateId = (type) => {
  if(type === 'user'){
    return `u${nextUserId++}`
  } else if(type === 'group'){
    return `g${nextGroupId++}`
  }
}

export const deleteNode = (name, id) => ({
  type: DELETE_NODE,
  name,
  id
})

export const addMember = (from, to) => ({
  type: ADD_MEMBER,
  from,
  to
})

export const removeMember = (from, to) => ({
  type: REMOVE_MEMBER,
  from,
  to
})
