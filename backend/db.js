const mongoose = require("mongoose");

const url =
  "mongodb+srv://Mrunal:Mrunal%400715@cluster0.o6anxiq.mongodb.net/only-qna?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};