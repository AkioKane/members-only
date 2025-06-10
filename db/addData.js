const { Client } = require("pg");
require("dotenv").config();

const data = [
  {
    user: ["akio666", "akio666@example.com", "password_hash_here", true],
    message: [1, "Test Text", new Date().toISOString()]
  },
  {
    user: ["akio", "akio@example.com", "password_hash_here", true],
    message: [2, "Akio Text", new Date().toISOString()]
  },
  {
    user: ["akioPoBlatu", "akioBlatnoi@example.com", "password_hash_here", true],
    message: [3, "Abu Boba", new Date().toISOString()]
  }
];

const SQL = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  secret_room_key BOOLEAN DEFAULT FALSE,
  admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INTEGER NOT NULL,
  content TEXT NOT NULL,
  date TIMESTAMP,

  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (username, email, password_hash, secret_room_key) 
VALUES
  ('${data[0].user[0]}', '${data[0].user[1]}', '${data[0].user[2]}', '${data[0].user[3]}'),
  ('${data[1].user[0]}', '${data[1].user[1]}', '${data[1].user[2]}', '${data[1].user[3]}'),
  ('${data[2].user[0]}', '${data[2].user[1]}', '${data[2].user[2]}', '${data[2].user[3]}');

INSERT INTO messages (user_id, content, date)
VALUES
  ('${data[0].message[0]}', '${data[0].message[1]}', '${data[0].message[2]}'),
  ('${data[1].message[0]}', '${data[1].message[1]}', '${data[1].message[2]}'),
  ('${data[2].message[0]}', '${data[2].message[1]}', '${data[2].message[2]}');
`;

async function main() {
  console.log("loading...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();