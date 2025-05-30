const pool = require("./pool");

async function getAllMessages() {
  const messages = await pool.query("SELECT * FROM messages;");
  const users = await pool.query("SELECT * FROM users;");

  return {
    users: users.rows,
    messages: messages.rows
  };
}

async function validUsername(username) {
  const { rows } = await pool.query("SELECT username FROM users WHERE username = $1;", [username]);
  if (rows.length === 0) {
    return true;
  } else {
    return false;
  }
}

async function validEmail(email) {
  const { rows } = await pool.query("SELECT email FROM users WHERE email = $1;", [email]);
  if (rows.length === 0) {
    return true;
  } else {
    return false;
  }
}

async function createUser(username, email, hashedPassword) {
  return await pool.query(`
    INSERT INTO users (username, email, password_hash)
    VALUES ($1, $2, $3)`,
    [username, email, hashedPassword]
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
  validUsername,
  validEmail,
  createUser,
  createMessage
}