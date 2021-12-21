const express = require("express");
const user = require("../models/user");
const userSchema = require("../models/user")

const router = express.Router();

//Create user
router.post('/users', (req, res) => {
    const user = userSchema(req.body)
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//Traer todos los registros de la base de datos
router.get('/users', (req, res) => {
    console.log("Obteniendo informacion usuarios")
    userSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//Get user
router.get('/users/:id', (req, res) => {
    console.log("Obteniendo un usuario por id")
    const { id } = req.params
    userSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//Update user
router.put('/users/:id', (req, res) => {
    console.log("Actualizando un usuario por id")
    const { id } = req.params
    const { name, age, email } = req.body

    userSchema.updateOne({_id: id}, {$set : {name, age, email} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//Delete user
router.delete('/users/:id', (req, res) => {
    console.log("Borrando un usuario por id")
    const { id } = req.params
    userSchema.deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})


module.exports = router;