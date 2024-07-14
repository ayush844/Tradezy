import express from 'express';

import 'dotenv/config'

import cors from 'cors';

import { fileURLToPath } from 'url'
import path from 'path';
import { readdirSync } from 'fs';

const app = express();

const port = process.env.PORT || 8000;


app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const routePaths = path.resolve(__dirname, "./routes");

const routeFiles = readdirSync(routePaths);

routeFiles.map(async(file)=>{
    const routeModule = await import(`./routes/${file}`);
    app.use('/', routeModule.default);
})

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, ()=>{
    console.log(`server running at port number ${port}`);
})

