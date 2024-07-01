const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

// Mostrar todos las inscripciones
router.get("/orador", async (_, res) => {
    try {
        const oradores = await db.Oradores.findAll({});
        if (oradores === null || oradores.length === 0) {
            res.status(404).send({ mensaje: "No se encontraron oradores" });
        } else {
            res.json(oradores);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensaje: "Error interno al buscar oradores" });
    }
});

//Filtrar oradores por ID
router.get("/orador/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const orador = await db.Oradores.findOne({
            where: {
                Id:id
            }
        });
        if (!orador) {
            res.status(404).send({mensaje: "orador no encontrado"});
        } else {
            res.json(orador);
        } 

    } catch (error) {
        res.status(500).send({mensaje: "Error al buscar orador"})
    }
});

module.exports = router;