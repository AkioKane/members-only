const pool = require("./pool");

async function getAllMessages() {
  const messages = await pool.query("SELECT * FROM messages;");
  const users = await pool.query("SELECT * FROM users;");

  return {
    users: users.rows,
    messages: messages.rows
  };
}

module.exports = {
  getAllMessages
}