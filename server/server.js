







const express = require('express')
const cors = require('cors')

const PORT = 9000;
const app = express()



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors)

app.get('/new_category', (req,res) => {


    res.status(200).json({message : "Servidor en ejecucion 2"})
})


const app2 = express()
app2.use(express.json());
app.use(express.urlencoded({extended: true}));
app2.use(cors)


app2.get('/get_category', (req,res) => {
    res.status(200).json({message : "Servidor en ejecucion 2"})
})

// app2.listen(9001, () => {
//     console.log("Server is running 2...", "http://localhost:"+9001)
// });





app.use(app2)

app.listen(PORT, () => {
    console.log("Server is running...", "http://localhost:"+PORT)
});