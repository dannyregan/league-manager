import express from "express";

// This is the API from "express" used to create a server object.
const server = express()

// Add middlewares.
server.use(express.static("dist"));

// Use ejs as the projects templating library.
server.set("view engine", "ejs");

// Add middlewares to respond on the root path. Pass in the path to be served and a function to handle that path. The function takes req and res. Req can be used to read info about incoming requests (what IP did it come from, what are the headers that came with it, what is it asking for?). Res used to send info back to the client making the request.
// Render content using ejs
server.use("/", (req, res) => {
    res.render("index");
});


// The .listen() method of express() is passed the port on which the server will be listening, IP for the server, and a function that will be executed when the server is done mounting itself on that port.
server.listen("8080", "0.0.0.0", () => {
    console.info(
    "Express server is listening at http://0.0.0.0:8080");
});