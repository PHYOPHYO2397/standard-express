import mongoose from "mongoose";

const DB_Name = "express-DB";

export const connectDB = async () => {
  try {
    const DBConnectResponse = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_Name}`
    );
    console.log(
      `Database Connected successfully ${DBConnectResponse.connection.host}`
    );
  } catch (error) {
    console.log("Database connection error" + error);
    process.exit(1);
  }
};
