import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.BD_PASSWORD;

const ConnectionDB = () => {
    const DB_URL = `mongodb://${username}:${password}@ac-h2457qw-shard-00-00.tjq1tx7.mongodb.net:27017,ac-h2457qw-shard-00-01.tjq1tx7.mongodb.net:27017,ac-h2457qw-shard-00-02.tjq1tx7.mongodb.net:27017/?ssl=true&replicaSet=atlas-p5v2y4-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       mongoose.connect(DB_URL,{useNewUrlParser:true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the Database', error.message);
    }
}

export default ConnectionDB;