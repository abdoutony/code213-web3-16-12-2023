const { mongoose } = require("mongoose");

// validate object id
exports.isObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};
