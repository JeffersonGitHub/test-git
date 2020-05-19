const express = require('express');
const app = express();

app.get('/',(req, resp) => {
    resp.status(200).send( { message:"Olá Mundo!" } );
});

app.get('/teste',(req, resp) => {
    resp.status(200).send( { message:"Este é um teste!" } );
});

app.listen(3001, () => {
    console.log("Api rodando na porta 3001");
});
