const models = require('../models')

const holaMundo = (req, res) => {
    res.json({ "hola": "mundo"})
}



const { Router } = require('express')
const router = Router()


router.get('/', holaMundo)

const insertarCliente = async (req, res) =>{
    const Clientes = models.Clientes

    
    const nombre = req.body.nombre
    const direccion = req.body.direccion
    const telefono = req.body.telefono

    const cliente = await Clientes.create({
        "nombre": nombre,
        "direccion": direccion,
        "telefono": telefono
    })

    res.json(cliente)

}

const obtenerClientes = async (req, res) =>{
    const Clientes = models.Clientes
    const clientes = await Clientes.findAll()
    
    res.json(clientes)
}

module.exports = { holaMundo, insertarCliente, obtenerClientes }
