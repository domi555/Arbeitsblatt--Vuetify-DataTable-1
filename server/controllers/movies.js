const asyncHandler = require('express-async-handler');
const model = require('../model/movies');

const getMovies = asyncHandler(async (req, res) => {
  const result = await model.getMovies();
  return res.status(result.code).json(result.data);
});

module.exports = {
  getMovies,
};
