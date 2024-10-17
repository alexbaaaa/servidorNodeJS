const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("Te has conectado");
});

app.listen(port, () => {
    console.log("Estas escuchando suu")
})