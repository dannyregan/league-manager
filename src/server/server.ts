import express from "express";
import os from "node:os";

import config from "./config";
import apiRouter from "./api-router"
import serverRender from "./render";


// This is the API from "express" used to create a server object.
const server = express()

// Add middlewares.
server.use(express.static("dist"));

// Use ejs as the projects templating library.
server.set("view engine", "ejs");

// Mounting all of our routes on /api.
server.use("/api", apiRouter)

// Add middlewares to respond on the root path. Pass in the path to be served and a function to handle that path. The function takes req and res. Req can be used to read info about incoming requests (what IP did it come from, what are the headers that came with it, what is it asking for?). Res used to send info back to the client making the request.
// Render content using ejs
server.get("/", async (req, res) => {
    const { initialMarkup, initialData } = await serverRender();
    res.render("index", {
        initialMarkup,
        initialData,
    });
});


// The .listen() method of express() is passed the port on which the server will be listening, IP for the server, and a function that will be executed when the server is done mounting itself on that port.
server.listen(config.PORT, config.HOST, () => {
    console.info(
        `Express server is listening at ${config.SERVER_URL}`,
        `Free Mem: ${os.freemem() / 1024 / 1024}`,
    );
});