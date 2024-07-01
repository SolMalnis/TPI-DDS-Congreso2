const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

// Mostrar todos las inscripciones
router.get("/participante", async (_, res) => {
    try {
        const participantes = await db.Participantes.findAll({});
        if (participantes === null || participantes.length === 0) {
            res.status(404).send({ mensaje: "No se encontraron participantes" });
        } else {
            res.json(participantes);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensaje: "Error interno al buscar participantes" });
    }
});

module.exports = router;