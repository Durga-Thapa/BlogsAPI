import type {Request,Response, NextFunction } from "express";
import { User } from "../Model/userModel.js";


export const createUser= async(req:Request, res:Response, next:NextFunction) : Promise <void>=>{
 try {
    const { name, email, password}= req.body;

    const user=await User.create({
        name,
        email,
        password
    })
 } catch (error) {
     
 }
}