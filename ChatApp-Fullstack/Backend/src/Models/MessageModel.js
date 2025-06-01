import mongoose, { Types } from "mongoose"
const {Schema} = mongoose

const MessageSchema = new Schema({
  email:{
    type :String ,
    required:true,
  },
  password:{
    type :String ,
    required:true,
  },
  message:{
     type :String ,
  },
  image:{
     type :String ,
  }
});
 const Message = mongoose.model('Messages', MessageSchema);
 export default Message;