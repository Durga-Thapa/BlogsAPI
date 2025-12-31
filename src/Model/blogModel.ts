import mongoose, {Document, model, Model, Schema} from "mongoose";

export interface IBlog extends Document{
    id:Number,
    title:String,
    content:String,
    authorId:Number,  // foreign key user
    createdAt:Date,
    updatedAt:Date
}

const blogSchema : Schema <IBlog> = new Schema ({

    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    content:String,
    authorId:{
        type:Number,
        required:true,
        unique:true
    }
}, 
  {timestamps:true}
)

export const Blog: Model<IBlog>= model<IBlog>("Blog", blogSchema)