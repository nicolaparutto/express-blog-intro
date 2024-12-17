//Importiamo express:
const express = require('express');
//Inizializziamo express invocandolo come una funzione:
const app = express();
const port = 3000;


//Definizione della prima rotta:
app.get('/', (req, res) => {
   res.send('Server del mio blog')
});