// The following methods interact with data base to add a user, 
// remove a user and get user and users in room

const users = [];

// add a user to data base using name and room (maybe user_id too?)
const addUser = ({ name, room }) => {
  const existingUser = users.find(user => user.room === room && user.name === name);

  if (existingUser) return { error: 'Username exists, come up with a new one' };

  const user = { name, room };
  users.push(users);
  return { user };
}

// remove a user by name (or id, if any)
const removeUser = (name) => {
  // locate the user in data base
  const index = users.findIndex(user => user.name = name);
  // if located, delete user
  if (index !== -1) return users.splice(index, 1)[0];
}


// get the user by name (or id, if any)
const getUser = name => users.find(user => user.name === name);

// get all users in the current chatroom
const getUsers = room => users.filter(user => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsers };