var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLoaclMongoose = require("passport-local-mongoose");

var userSchema = new Schema({
  admin: {
    type: Boolean,
    default: false,
  },
});
userSchema.plugin(passportLoaclMongoose);

module.exports = mongoose.model("User", userSchema);
