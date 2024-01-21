import mongoose from "mongoose";

let isConnected=false;
export const connectToDB=async ()=>{
   mongoose.set('strictQuery',true);

   if(!process.env.MONGODB_URI) return console.log('mongoDB uri is not defined');
   if(isConnected) return console.log("existing data base");
   try{
       mongoose.connect(process.env.MONGODB_URI);
       isConnected=true;
       console.log("mongoDB connected");
   }
   catch(error){
    console.log(error);
   }
}