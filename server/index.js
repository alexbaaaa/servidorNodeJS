const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    let respuesta = {
        "mensaje": "Hola pepe"
    }
    res.send(JSON.stringify(respuesta));
});

app.listen(port, () => {
    console.log("Estas escuchando suu")
})