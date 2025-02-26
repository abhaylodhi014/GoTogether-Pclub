import mongoose , {Schema} from "mongoose" ;

const userSchema = new Schema({
    username :{
        type : String ,
        required : true ,
        unique : true , 
        

    },
    email:{
        type: String ,
        required : true ,
        unique : true , 
    },
    password:{
        type : String ,
        required : [true , 'password is required']
    },
  
    profilephoto: {
        type : String ,
    }

} , {timestamps : true});
const User = mongoose.model("User" ,userSchema)
export default User ;