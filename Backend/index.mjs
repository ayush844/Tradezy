import express from 'express';

import 'dotenv/config'

import cors from 'cors';

import { fileURLToPath } from 'url'
import path from 'path';

const app = express();

const port = process.env.PORT || 8000;


app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, ()=>{
    console.log(`server running at port number ${port}`);
})

