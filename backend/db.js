const mongoose = require('mongoose')
//const mongoURI='mongodb+srv://som4510:xOOAPTydBC20lB2a@cluster0.kbolw3z.mongodb.net/Foodvault?retryWrites=true&w=majority'
const mongoURI=process.env.DATABASE
// const mongoDB =() =>{
//     mongoose.connect(mongoURI,()=>{
//      console.log("connected");
//     });
// }

// module.exports = mongoDB;
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected!');
        let fetched_data = mongoose.connection.db.collection("foodsamples");
        let data=await fetched_data.find({}).toArray()
        global.foodsamples=data; 
        //console.log( global.foodsamples);
        let foodcategory= mongoose.connection.db.collection("foodcategory");
        let catdata= await foodcategory.find({}).toArray()
        global.foodcategory=catdata;
       // console.log(global.foodcategory)
        // fetched_data.find({}).toArray(async function(err,data){
        //   let foodcategory= await mongoose.connection.db.collection("foodcategory");
        //   foodcategory.find({}).toArray(function(err,catdata){
        //     if(err) console.log(err);
        //     else{
             // global.foodsamples=data;
              //console.log(global.foodsamples)
              //global.foodcategory=catdata;
            //}
          //})
       // })
      } catch (error) {
        console.log('err: ', error);
      }

    
    //     mongoose.connect(mongoURI,
    //  { useNewUrlParser: true ,
    //   useUnifiedTopology : true,
    //  },
    

     };
module.exports =connectDB;
// const mongoDB = async () => {
//     try {
//       await mongoose.connect(mongoURI);
//       console.log('Connected!');
//       let fetched_data = mongoose.connection.db.collection("foodsamples");
//       let data=await fetched_data.find({}).toArray() 
//       console.log(data);
//     } catch (error) {
//       console.log('err: ', error);
//     }
//   };


