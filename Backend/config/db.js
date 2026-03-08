import mongoose from "mongoose"; 

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://fahadmoidheen_db_user:karthika123@cluster0.emvhdju.mongodb.net/food-del").then(()=>{
        console.log("db connected")
    })
}

export default connectDB