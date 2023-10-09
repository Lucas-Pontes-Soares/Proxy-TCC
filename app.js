const express = require('express')
const app = express()
var cors = require("cors");
const dotenv = require('dotenv');
var bodyParser = require("body-parser")
const userRouter = require("./source/routes/userRouter")
dotenv.config();

const port = 4000

const corsOptions ={
   origin:'https://gplink-aj6y.onrender.com', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

console.log(corsOptions)
app.use(cors(corsOptions))


app.use(express.json());
app.use(bodyParser.json());
app.use(userRouter);

app.get('/', function (req, res) {
  res.send('Hello!');
});

app.listen(port, () => {
  console.log(`App node rodando em: http://localhost:${port}`);
});