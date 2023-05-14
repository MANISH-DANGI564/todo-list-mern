



import mongoose from 'mongoose';
import dotenv from 'dotenv';
 
 dotenv.config();

 const USERNAME=process.env.DB_USERNAME;
 const PASSWORD=process.env.DB_PASSWORD;

const Connection = () =>  {

            const MONGODB_URI=`mongodb://${USERNAME}:${PASSWORD}@ac-njakiye-shard-00-00.cecl5f0.mongodb.net:27017,ac-njakiye-shard-00-01.cecl5f0.mongodb.net:27017,ac-njakiye-shard-00-02.cecl5f0.mongodb.net:27017/?ssl=true&replicaSet=atlas-cawris-shard-0&authSource=admin&retryWrites=true&w=majority`;
            // telling mongoose that previous url may not be valid now so use latest url parser
            mongoose.connect(MONGODB_URI , { useNewUrlParser : true  })


            // To check whether it is connected or disconnected or any error
            mongoose.connection.on('connected',() => {
                 console.log('Database connected Successfully');
            })

            mongoose.connection.on('disconnected',() => {
                console.log('Database disconnected Successfully');
           })

            // error is a object in which one field is message
            mongoose.connection.on('error', (error) => {
               console.log('Error while connecting to database', error.message);
            })
 }

 export default Connection;