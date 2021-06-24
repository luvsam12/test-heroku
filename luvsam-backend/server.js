const express = require("express")
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")
require('dotenv/config')
let port = process.env.PORT || 3000;
const path = require('path');


//middlewares
app.use(cors());
app.use(express.json());


//listining to port
app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`)
})

// app.get('/', (req, res) => {
//   res.send('invaild endpoint');
// });
//mongoDB connection
mongoose.connect( "mongodb+srv://luvsam:luvsam@cluster0.muyhd.mongodb.net/Quiz-app?retryWrites=true&w=majority",
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, })
    .then(() => 
    {
        console.log("Connected to MongoDB!")
    }).catch(() => console.log("DB not connected"))

//routes
app.use('/user', require("./routes/user"));
app.use('/questions', require('./routes/questions'))




// app.use(express.static(path.join(__dirname, 'dist/Luvsam')));


// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/Luvsam/index.html'));
// });