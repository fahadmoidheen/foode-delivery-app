import foodModel from "../models/food_model.js";
import fs from "fs";

//add food item

const addFood = async (req,res)=>{
    let image_filename = req.file.filename;

    const food = foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_filename,
        category:req.body.category
    })

    try{
        await food.save();
        res.json({success:true,message:"food added"})

    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

export {addFood}