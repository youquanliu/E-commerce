import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.green.underline.bold
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    //exit with faliure
    process.exit(1);
  }
};

export default connectDB;
