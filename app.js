const express = require('express');

const custommer = require('./CustommerController');

const app = express();
const port = 4000;

app.use("/custommer", custommer);

app.get("/", (req, res) => {
    res.end("Hello Guys!");
});

app.listen(port, () => {
    console.log(`Este App está funcionando na porta ${port}`)
})