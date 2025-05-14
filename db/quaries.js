const pool = require("./pool");

async function getAllMessages() {
  const messages = await pool.query("SELECT * FROM messages;");
  const users = await pool.query("SELECT * FROM users;");

  return {
    users: users.rows,
    messages: messages.rows
  };
}

async function createUser(username, email, password_hash) {
  return await pool.query(`
    INSERT INTO users (username, email, password_hash)
    VALUES ($1, $2, $3)`,
    [username, email, password_hash]
  );
}

async function createMessage(user_id, content) {
  return await pool.query(`
    INSERT INTO messages (user_id, content, data)
    VALUES ($1, $2, $3)`,
    [user_id, content, new Date().toISOString()]
  );
}

module.exports = {
  getAllMessages,
  createUser,
  createMessage
}