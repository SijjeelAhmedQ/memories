import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);
app.get('/', (req, res)=>{
    res.send('Hello to Memories API')
})

// const CONNECTION_URL = "mongodb+srv://SijjeelAhmed:O7nkS9qMGTUpmlzk@cluster0.crg6dc8.mongodb.net/?retryWrites=true&w=majority"
const PORT = 3000;
mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(PORT, ()=> console.log(`Server running on PORT: ${PORT}`)))
.catch((error)=> console.log(error.message));
app.listen(PORT, ()=> console.log(`Server running on PORT: ${PORT}`))
// mongoose.set('useFindAndModify', false)
// mongoose.set('strictQuery', true);