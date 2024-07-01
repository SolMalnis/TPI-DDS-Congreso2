const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

// Mostrar todos las inscripciones
router.get("/patrocinador", async (_, res) => {
    try {
        const patrocinadores = await db.Patrocinadores.findAll({});
        if (patrocinadores === null || patrocinadores.length === 0) {
            res.status(404).send({ mensaje: "No se encontraron patrocinadores" });
        } else {
            res.json(patrocinadores);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensaje: "Error interno al buscar patrocinadores" });
    }
});

module.exports = router;