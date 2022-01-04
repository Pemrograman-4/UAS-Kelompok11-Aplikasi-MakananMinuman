"use strict";
const router = require("express").Router();
const Controller = require("../Controller/cafe_controller");

//create di dalam controller
router.post("/add", (req, res) => {
  Controller.add(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

//get dari view
router.get("/get", (req, res) => {
  Controller.get(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/delete/:id", Controller.delete);
router.put("/update/:id", Controller.update);

module.exports = router;
