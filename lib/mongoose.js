import mongoose from "mongoose";

const MONGODB_URI = process.env.MongoURL;
// const MONGODB_DB = "your-database-name"; // Change this to your database name

console.log(MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MongoURL environment variable inside .env.local"
  );
}

let cached = global.mongoose;
console.log("Cached mongoose:", cached);

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });

    console.log("Creating new mongoose connection promise");
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;
