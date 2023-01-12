const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize')
const Producto1 = require('../models').producto1
const Producto2 = require('../models').producto2
const Producto3 = require('../models').producto3



router.get('/productos1', function(req, res, next) {
    Producto1.findAll({  
         attributes: { exclude: ["updatedAt"] },  
     }) 
     .then(resultado => {  
        res.json(resultado)
    })
     .catch(error => res.status(400).send(error)) 
 });

 router.get('/productos2', function(req, res, next) {
    Producto2.findAll({  
         attributes: { exclude: ["updatedAt"] },  
     }) 
     .then(resultado => {  
        res.json(resultado)
    })
     .catch(error => res.status(400).send(error)) 
 });

 router.get('/productos3', function(req, res, next) {
    Producto3.findAll({  
         attributes: { exclude: ["updatedAt"] },  
     }) 
     .then(resultado => {  
        res.json(resultado)
    })
     .catch(error => res.status(400).send(error)) 
 });

 router.get('/productos1/:id', function(req, res, next) {
    let id_req = req.params.id
    Producto1.findOne({
        where:{id:id_req}
    })
     .then(resultado => {  
        res.json(resultado)
    })
     .catch(error => res.status(400).send(error)) 
 });

    
module.exports = router;