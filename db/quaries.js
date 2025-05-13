const pool = require("./pool");

async function getAllMessages() {
  const messages = await pool.query("SELECT * FROM messages;");
  const users = await pool.query("SELECT * FROM users;");

  return {
    users: users.rows,
    messages: messages.rows
  };
}

async function createUser() {

}

async function createMessage() {

}

module.exports = {
  getAllMessages,
  createUser,
  createMessage
}