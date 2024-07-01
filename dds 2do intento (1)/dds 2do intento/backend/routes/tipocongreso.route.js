const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

//Mostrar todos los tipos de congreso

router.get("/tipocongreso", async(_,res) => {
    try {
        const tiposcongreso = await db.TipoCongresos.findAll({});
        if (tiposcongreso === null){
            res.status(404).send({mensaje: "Tipos congreso no encontrado"});
        } else {
            res.json(tiposcongreso);
        }

    } catch (error) {
        res.status(500).send({mensaje: "Error interno obteniendo tipos congreso"});
    }
    });

module.exports = router;