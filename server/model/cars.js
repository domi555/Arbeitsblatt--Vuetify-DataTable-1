const db = require('../db');

const getCars = async () => {
  const { rows } = await db.query(
    'SELECT * FROM actors',
  );
  return {
    code: 200,
    data: rows,
  };
};

module.exports = {
  getCars,
};
