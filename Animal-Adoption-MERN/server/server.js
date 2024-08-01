const express = require("express");
const app = express();
const port = 8000;
const DB = "mongodb://localhost:27017/mascotas";
const cors = require('cors')

app.use(express.json(), cors(), express.urlencoded({extended:true}));

require('./config/mongoose.config') (DB);

const PetRoutes = require("./routes/animals.routes");
PetRoutes(app);



app.listen(port, () => console.log(`Server started  and is listening`))