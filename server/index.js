const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('html'));
app.get('/', (req,res) => {
    let respuesta = {
        "mensaje": "Hola pepe"
    }
    res.send(JSON.stringify(respuesta));
});

app.listen(port, () => {
    console.log("Estas escuchando suu")
})