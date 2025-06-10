const pool = require("./pool");
require("dotenv").config();

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

async function validSecretKey(key) {
  if (key == process.env.SECRET_PASSWORD) {
    return true;
  } else {
    return false;
  }
}

async function updateSecretKeyUser(id) {
  return await pool.query(`
    UPDATE users
    SET secret_room_key = $1
    WHERE id = $2`,
    [true, id]
  );
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
    INSERT INTO messages (user_id, content, date)
    VALUES ($1, $2, $3)`,
    [user_id, content, new Date().toISOString()]
  );
}

async function deleteMessage(message_id) {
  return await pool.query(`
    DELETE FROM messages
    WHERE id = $1`,
    [message_id]
  )
}

module.exports = {
  getAllMessages,
  validUsername,
  validEmail,
  validSecretKey,
  updateSecretKeyUser,
  createUser,
  createMessage,
  deleteMessage
}