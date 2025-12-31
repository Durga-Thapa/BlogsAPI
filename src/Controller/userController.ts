import type {Request,Response, NextFunction } from "express";
import { User } from "../Model/userModel.js";


// create User 
export const createUser= async(req:Request, res:Response, next:NextFunction) : Promise <void>=>{
 try {
    const { name, email, password}= req.body as {
        name:string,
        email:String,
        password:String
    }

    const user=await User.create({
        name,
        email,
        password
    })

    res.status(201).json({
        success:true,
        data:user
    })
 } catch (error) {
    if(error instanceof Error){
        res.status(500).json({message:error.message})

    }
    else{
        res.status(500).json({message:"Something went wrong"})
    }
    
 }
}

// update User

export const updateUser=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {name, email, password}=req.body as {
            name:String,
            email:String,
            password:String
        }

        const user=await User.findById(req.params.id, req.body, {new:true})
        if(!User){
            return res.status(404).json({message:"User not found"})
        }

    } catch (error) {
        if (error instanceof Error){
            res.status(500).json({message:error.message})
        }
    }
}

// User Delete 

export const deleteUser = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const user=await User.findByIdAndDelete(req.params.id)
        res.json(User)
    } catch (error) {
        if(error instanceof Error){
            res.status(500).json({message:error.message})
        }
    }
}

//get all user 
export const getUsers=async(req:Request, res:Response, next:NextFunction)=>{
   try {
     const user= await User.find()
    res.json({success:true})
   } catch (error) {
    if(error instanceof Error){
        res.status(500).json({mesage:error.message})
    }
   }
}