import foodModel from "../Models/foodModel.js";
import fs from 'fs'


//add food item

const addFood=async(req,res)=>{
    let image_filename=`${req.file.filename}`;
    const { name, description,price,category  } = req.body;
    const food=new foodModel({name,description,price,category,image:image_filename,})
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error ocuured"})
        
    }

}
//all food list
const listFood=async(req,res)=>{
    try{
        const foods=await foodModel.find({});
        res.json({success:true,data:foods})

    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
const removeFood=async(req,res)=>{
    try {
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`Uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

export{addFood,listFood,removeFood}