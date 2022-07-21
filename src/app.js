const express = require('express');

const custommer = require('./Customers/CustommerController');
const actor = require('./Actor/ActorController');

const app = express();
const port = 4000;

app.use("/custommer", custommer);
app.use("/actor", actor);

app.get("/", (req, res) => {
    res.end("Hello Guys!");
});

app.listen(port, () => {
    console.log(`Este App está funcionando na porta ${port}`)
})