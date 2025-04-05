import mongoose from "mongoose";

export const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("DB Connected");
  } catch (error) {
    console.log("Database connection error: ", error);
  }
};

// export const connectDB = async () => {
//   await mongoose
//     .connect(
//       "mongodb+srv://nhatnguyen13213:nhat260121%40@cluster0.bh5gbea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//     )
//     .then(() => console.log("DB Connected"));
// };
