//Importiamo express:
const express = require('express');
//Inizializziamo express invocandolo come una funzione:
const app = express();
const port = 3000;


//Definizione della prima rotta:
app.get('/', (req, res) => {
   res.send('Server del mio blog');
});

//Definizione della rotta bacheca:
app.get('/bacheca', (req,res) => {
   res.json({
      count: posts.length,
      posts: posts
   });
});



//Array della risposta:
const posts = [
   {
      titolo: "Torta Paesana",
      contenuto: "Torta",
      immagine: "http://localhost:3000/",
      tags: ["torta", "dolci", "cioccolato"]
   },{
      titolo: "Pasta Barbabietola",
      contenuto: "Pasta",
      immagine: "http://localhost:3000/",
      tags: ["pasta", "primo", "pranzo"]
   },{
      titolo: "Pane Fritto",
      contenuto: "Pane",
      immagine: "http://localhost:3000/",
      tags: ["pane", "dolce", "fritto"]
   },{
      titolo: "Cracker Barbabietola",
      contenuto: "Cracker",
      immagine: "http://localhost:3000/",
      tags: ["cracker", "snack", "salato"]
   },{
      titolo: "Ciambellone",
      contenuto: "Ciambella",
      immagine: "http://localhost:3000/",
      tags: ["torta", "dolci", "zucchero"]
   },
];