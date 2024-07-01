const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

// Mostrar todos las salas
router.get("/sala", async (_, res) => {
    try {
        const salas = await db.Salas.findAll({});
        if (salas === null || salas.length === 0) {
            res.status(404).send({ mensaje: "No se encontraron salas" });
        } else {
            res.json(salas);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensaje: "Error interno al buscar salas" });
    }
});

//Filtrar Sala por ID
router.get("/sala/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const sala = await db.Salas.findOne({
            where: {
                Id:id
            }
        });
        if (!sala) {
            res.status(404).send({mensaje: "Sala no encontrada"});
        } else {
            res.json(sala);
        } 

    } catch (error) {
        res.status(500).send({mensaje: "Error al buscar sala"})
    }
});


module.exports = router;