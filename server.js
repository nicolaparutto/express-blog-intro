//Importiamo express:
const express = require('express');
//Inizializziamo express invocandolo come una funzione:
const app = express();
const port = 3000;


//Definizione della prima rotta:
app.get('/', (req, res) => {
   const posts = [
      {
         titolo: "Torta Paesana",
         contenuto: "Torta",
         immagine: "",
         tags: ["torta", "dolci", "cioccolato"]
      },{
         titolo: "Pasta Barbabietola",
         contenuto: "Pasta",
         immagine: "",
         tags: ["pasta", "primo", "pranzo"]
      },{
         titolo: "Pane Fritto",
         contenuto: "Pane",
         immagine: "",
         tags: ["pane", "dolce", "fritto"]
      },{
         titolo: "Cracker Barbabietola",
         contenuto: "Cracker",
         immagine: "",
         tags: ["cracker", "snack", "salato"]
      },{
         titolo: "Ciambellone",
         contenuto: "Ciambella",
         immagine: "",
         tags: ["torta", "dolci", "zucchero"]
      },
   ]
   res.send('Server del mio blog')
});