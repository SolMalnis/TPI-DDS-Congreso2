const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

// Mostrar todos los tipos de congreso
router.get("/congreso", async (_, res) => {
    try {
        const congreso = await db.Congreso.findAll({});
        if (congreso === null || congreso.length === 0) {
            res.status(404).send({ mensaje: "No se encontraron tipos de congreso" });
        } else {
            res.json(congreso);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensaje: "Error interno al buscar tipos de congreso" });
    }
});

module.exports = router;