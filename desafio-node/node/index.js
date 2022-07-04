const express = require('express')

const service = require('./database/service')

const app = express()
const port = 3000

app.get('/', async (req, res) => {
  
  await service.insertPeople();

  const peopleList = await service.selectPeople();

  var liPeople = "";
  peopleList.forEach(element => { liPeople += `<li>${element.name}</li>`; });

  const html = `<h1>Full Cycle Rocks!</h1>
  <ul>${liPeople}</ul>
  `;

  res.send(html)
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
  service.createTable();
})