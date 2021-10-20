const db = require('../db');

const getMovies = async () => {
  const { rows } = await db.query('SELECT * FROM movies');
  return {
    code: 200,
    data: rows,
  };
};

module.exports = {
  getMovies,
};
