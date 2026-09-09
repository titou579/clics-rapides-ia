// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques du dossier courant (où sont index.html, styles.css, script.js)
app.use(express.static(path.join(__dirname)));

// Route racine qui sert index.html (optionnel, car express.static le fait déjà)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
// package.json (mis à jour)
{
  "name": "clics-rapides",
  "version": "1.0.0",
  "description": "Jeu simple de clics rapides en 10 secondes",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2"
  }
}
