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
      elements: posts.length,
      posts: posts
   });
});

//Asset statici:
app.use(express.static('public'));

app.listen(port, () => {
   console.log(`Sono in ascolto sulla porta ${port}`)
})


//Array della risposta:
const posts = [
   {
      titolo: "Torta Paesana",
      contenuto: "Torta",
      immagine: "http://localhost:3000/images/torta_paesana.jpeg",
      tags: ["torta", "dolci", "cioccolato"]
   },{
      titolo: "Pasta Barbabietola",
      contenuto: "Pasta",
      immagine: "http://localhost:3000/images/pasta_barbabietola.jpeg",
      tags: ["pasta", "primo", "pranzo"]
   },{
      titolo: "Pane Fritto",
      contenuto: "Pane",
      immagine: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
      tags: ["pane", "dolce", "fritto"]
   },{
      titolo: "Cracker Barbabietola",
      contenuto: "Cracker",
      immagine: "http://localhost:3000/images/cracker_barbabietola.jpeg",
      tags: ["cracker", "snack", "salato"]
   },{
      titolo: "Ciambellone",
      contenuto: "Ciambella",
      immagine: "http://localhost:3000/iamges/ciambellone.jpeg",
      tags: ["torta", "dolci", "zucchero"]
   },
];

