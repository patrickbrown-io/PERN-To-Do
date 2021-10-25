const express = require('express')
const app = express();
const cors = require('cors')

//middleware
app.use(cors())
app.use(express.json())// gives access to req.body, get json data

app.listen(5000, ()=> {
    console.log('The server has started on port 5000');
})