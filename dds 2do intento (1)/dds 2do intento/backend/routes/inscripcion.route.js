const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

// Mostrar todos las inscripciones
router.get("/inscripcion", async (_, res) => {
    try {
        const inscripciones = await db.Inscripciones.findAll({});
        if (inscripciones === null || inscripciones.length === 0) {
            res.status(404).send({ mensaje: "No se encontraron inscripciones" });
        } else {
            res.json(inscripciones);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensaje: "Error interno al buscar inscripciones" });
    }
});

module.exports = router;