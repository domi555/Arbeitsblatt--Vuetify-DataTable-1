const asyncHandler = require('express-async-handler');
const { getCars } = require('../model/cars');

const getController = asyncHandler(async (req, res) => {
  const result = await getCars();
  return res.status(result.code).json(result.data);
});

module.exports = {
  getController,
};
