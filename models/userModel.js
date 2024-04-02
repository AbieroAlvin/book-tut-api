const users = require("../users");

module.exports = {
  getAllusers: () => users,
  getUsersById: (id) => users.find((user) => user.id === id),
  addUser: (user) => {
    user.id = user.length + 1;
    users.push(user);
    return user;
  },
  updateUser: (id, updatedUser) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      return users[index];
    }

    return null;
  },
  deleteUser: (id) => {
    users = users.filter((user) => user.id !== id);
  },
};
