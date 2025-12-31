import mongoose, {Document, model, Model, Schema} from "mongoose";


export interface IUser extends Document {
    name:String,
    email:String,
    password:String,
    createdAt:Date,
    updatedAt:Date
}

const userSchema : Schema <IUser> = new Schema ({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
},
   {timestamps:true}
)

export const User : Model <IUser>= model <IUser>("User", userSchema)