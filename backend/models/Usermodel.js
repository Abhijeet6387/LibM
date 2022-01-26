const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  contact: { type: Number, required: true },
  isPatron: { type: Boolean, default: "true" },
});

module.exports = mongoose.model("Users", userSchema);
