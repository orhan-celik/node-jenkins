const express = require('express')

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

const data = {
    "name": "Orhan",
    "lastname": "ÇELİK",
    "skils" : ["JavaScript", "HTML", "CSS","PHP","Laravel","Git","Github","React","Tailwind","MySQL","PostgreSQL"]
}

app.get('/data', (req, res) => {
  res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(data, null, 3));
});

app.get('/', (req, res) => {
  res.send('Orhan ÇELİK');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
