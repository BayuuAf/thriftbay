import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"))

    app.set('view engine ','ejs')
    app.set('view engine ','.src/public')
    app.engine('html ',require('ejs').renderFile);

};

module.exports = configViewEngine;  