import express from 'express';
import cors from 'cors';
import ConnectionDB from './database/db.js';
import routes from './routes/route.js';
import path from 'path';

const __dirname = path.resolve();

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/', routes);

app.use(express.static(path.join(__dirname,"./client/build")));
app.get('*', function (_,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"), function(err){
        res.status(500).send(err);
    })
})

const PORT = process.env.PORT || 8000;
ConnectionDB();
app.listen(PORT,() => console.log("Server is Listen on port on ",PORT));
