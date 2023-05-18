const mongoose = require("mongoose");
const mognURL =
  "mongodb+srv://himangshumahato82:12345@cluster0.jbx4njg.mongodb.net/?retryWrites=true&w=majority";
const ConnectDB = () => {
  mongoose
    .connect(mognURL, { useNewUrlParser: true })
    .then((res) => console.log(res.connection.db.databaseName))
    .catch((error) => console.log(error));
};
module.exports = ConnectDB;
