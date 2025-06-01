import mongoose, { Types } from "mongoose"
const {Schema} = mongoose

const UsersSchema = new Schema({
  email:{
    type :String ,
    required:true,
  },
  fullname:{
    type :String ,
    required:true,
  },
  password:{
    type :String ,
    required:true,
  }
});
 const Users = mongoose.model('Users', UsersSchema);
 export default Users;