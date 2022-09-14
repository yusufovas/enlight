const { Pool } = require("pg");
const {
  connection: { connectionString },
} = require("../config");

const pool = new Pool({connectionString});

const fetchData = async (SQL, ...params) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params.length ? params : null);
    return rows;
  } finally {
    client.release();
  }
};

const fetchRow = async (SQL, ...params) => {
  const client = await pool.connect();
  try {
    const {
      rows: [row],
    } = await client.query(SQL, params.length ? params : null);
    return row;
  } finally {
    client.release();
  }
};

module.exports = {
  fetchData,
  fetchRow,
};
