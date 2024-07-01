const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

// Mostrar todos las evaluaciones
router.get("/evaluacion", async (_, res) => {
    try {
        const evaluaciones = await db.Evaluaciones.findAll({});
        if (evaluaciones === null || evaluaciones.length === 0) {
            res.status(404).send({ mensaje: "No se encontraron evaluaciones" });
        } else {
            res.json(evaluaciones);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensaje: "Error interno al buscar evaluaciones" });
    }
});


//Filtrar Evaluaciones por ID
router.get("/evaluacion/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const evaluacion = await db.Evaluaciones.findOne({
            where: {
                Id:id
            }
        });
        if (!evaluacion) {
            res.status(404).send({mensaje: "Evaluacion no encontrada"});
        } else {
            res.json(evaluacion);
        } 

    } catch (error) {
        res.status(500).send({mensaje: "Error al buscar evaluacion"})
    }
});

module.exports = router;