const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const fs = require('fs')
const bodyParser = require('body-parser')

const write = (path, data) => {
  fs.writeFile(
    path,
    data,
    (err) => {
      if (err) return console.error(err)
      console.log('Wrote data to ', path)
    },
  )
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/api/read", (req, res) => {
  res.json(JSON.parse(fs.readFileSync('./data.json', 'utf8')));
});

app.post("/api/write", (req, res) => {
  write('./response.json', JSON.stringify(req.body));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
