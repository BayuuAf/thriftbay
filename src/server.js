require("dotenv").config();
const express =require('express');
const viewEngine = require('./config/viewEngine');
const initwebrouters = require('./routes/web');


let app = express();
app.use(express.json());

//init

viewEngine(app);
initwebrouters(app);

let port = process.env.PORT || 3030;

app.listen(port,()=>{
    console.log(`app is running on server ${port}`);
})