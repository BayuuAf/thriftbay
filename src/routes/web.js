const express = require('express');
const router = express.Router();

import homepageController from "../controller/homeController";

let initwebrouters = (app) =>{
router.get("/",homepageController.getHomepage)


return app.use("/",router);
}

module.exports = initwebrouters;