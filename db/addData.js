const { Client } = require("pg");
require("dotenv").config();

const data = [
  {
    user: ["akio666", "akio666@example.com", "password_hash_here"],
    message: [1, "Test Text"]
  }
];

const SQL = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INTEGER NOT NULL,
  content TEXT NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (username, email, password_hash) 
VALUES
  ('${data[0].user[0]}', '${data[0].user[1]}', '${data[0].user[2]}');

INSERT INTO messages (user_id, content)
VALUES
  ('${data[0].message[0]}', '${data[0].message[1]}');
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