const express = require("express");
const routes = express.Router();

const AnnotationController = require("./AnnotationController");
const PriorityController = require("./PriorityController");
const ContentController = require("./ContentController");

//Rota Annotation
routes.post("/annotations", AnnotationController.create);
routes.get("/annotations", AnnotationController.read);
routes.delete("/annotations/:id", AnnotationController.delete);

//Rota Priority
routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update);

//Rota Content
routes.post("/contents/:id", ContentController.update);


module.exports = routes;