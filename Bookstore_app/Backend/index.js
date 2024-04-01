import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT,mongoURL } from "./config.js";
import {Book} from './models/bookModel.js';
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';




const app = express();
//middleware for parsing request
app.use(express.json());
//adding cors method 1
// app.use(cors());
// // method 2
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// })
// );

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send("WELOCOME TO OUR WEBSITE")
});

app.use('/books',booksRoute);

mongoose.connect(mongoURL)
.then(() => {
    console.log('connected to database')
    app.listen(PORT, () => {
        console.log(`app is listening to port:${PORT}`);
     });
})

.catch((error) => {
    console.log(error);
});
