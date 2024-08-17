import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import UserRoutes from "./routes/User.js";
import FoodRoutes from "./routes/Food.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended:true}));

//routes
app.use("/api/user/", UserRoutes);
app.use("/api/food/", FoodRoutes);

//error handel
app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    })
})


app.get("/", async(req,res)=>{
    res.status(200).json({
        message:"hello foodie",
    });
});

const connectDB = ()=>{
    mongoose.set("strictQuery", true)
    mongoose
        .connect(process.env.URI)
        .then(()=> console.log("connected to the mongoDB"))
        .catch((err)=>{
            console.error("failed to connected with mongo");
            console.error(err);
        })
}



const startServer = async()=>{
    try{
        connectDB()
        app.listen(process.env.PORT, ()=>console.log("servver is started on port 8000"))
    }catch(error){
        console.log(error);
    }
}

startServer();