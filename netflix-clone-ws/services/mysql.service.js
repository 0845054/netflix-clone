import { createConnection } from "mysql2";

const mysqlConfig = {
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
  database: "netflix_clone",
};

const runQuery = (q) => {
  return new Promise((resolve, reject) => {
    const con = createConnection(mysqlConfig);
    con.connect();
    con.query(q, (err, rows, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
    con.end();
  });
};

export const getAllUsers = async () => {
  return await runQuery("SELECT * FROM users");
};

export const getUser = async (username) => {
  const [user] = await runQuery(
    `SELECT * FROM users WHERE LOWER(username)=LOWER('${username}') LIMIT 1`
  );

  return user;
};
