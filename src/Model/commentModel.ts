import mongoose, {Document, Model, model, Schema} from "mongoose";


export interface IComment extends Document {
    id:Number,
    content:String,
    userId:Number,
    blogId:Number,
    createdAt:true
}

const commentSchema : Schema <IComment>= new Schema({
id:{type:Number, required:true, unique:true},
content:String,
userId:{type:Number, required:true, unique:true},
blogId:{type:String, required:true, unique:true}
}, {timestamps:true}
)

export const Comment: Model<IComment> = model<IComment>("Comment", commentSchema)