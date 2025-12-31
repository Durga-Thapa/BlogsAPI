import mongoose, {Document, model, Model, Schema} from "mongoose";
import type { Mode } from "node:fs";

export interface ILike extends Document{
    id:Number,
    userId: Number, // foreign key user
    blogId:Number, // fk blog
    createdAt:true
}

const likeSchema : Schema <ILike>= new Schema({
    id:{type:Number, required:true, unique:true},
    userId:{type:Number, required:true, unique:true},
    blogId:{type:Number, required:true, unique:true}
},
   {timestamps:true}
)

export const Like : Model <ILike> = model<ILike>("Like", likeSchema)