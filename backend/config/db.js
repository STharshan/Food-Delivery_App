import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://Tharsan:Tharsan%236@cluster0.ip93oel.mongodb.net/food-del")
        .then(()=>console.log("DB connected"));

}