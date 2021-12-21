// const express = require("express")
// const mongoose = require("mongoose")
// const axios = require('axios');
// require("dotenv").config()
// const userRoutes = require("./routes/user")

// const app = express()
// const port = process.eventNames.PORT || 9000;

// //middleware
// app.use(express.json())
// app.use('/api', userRoutes);

// //Routes
// app.get("/", (req, res) => {
//     res.send("Servidor para mongo db")
// })

// app.get("/crear", (req, res) => {

//     const data = {
//         //  Aqui va la informacion del usuario, todos los datos
//     }

//     axios.post('http://localhost:9000/api/users', data)
//       .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//     console.log("SE HA CREADO EL CLIENTE")
//     res.send("CLIENTE CREADO")
// })


// // mongo db connection
// mongoose
//     .connect(process.env.MONGODB_URI)
//     .then(() => console.log("Conectado a mongo atlas"))
//     .catch((error) => console.log(error))


// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })