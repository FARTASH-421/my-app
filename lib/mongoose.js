import mongoose from "mongoose";

const connectionToDatabase = async (Url) => {
  try {
    await mongoose.connect(process.env.MongoURL + Url);
    console.log("connetion...");
  } catch (err) {
    console.log(err);
  }
};

export default connectionToDatabase;
