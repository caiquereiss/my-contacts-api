const { Client } = require('pg');

const client = new Client({

});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);

  return rows;
};
