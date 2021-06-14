const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = require("./app");
dotenv.config({ path: "./config.env" });

app.use(cors());

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app running on the port ${port}`);
});
