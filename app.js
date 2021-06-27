let express = require('express');
let app = express();
let port = 3030;
let path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.hmtl'));
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/babage.hmtl'));
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/berners.hmtl'));
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/clarke.hmtl'));
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hamilton.hmtl'));
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hopper.hmtl'));
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/lovelace.hmtl'));
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/turing.hmtl'));
})



app.use(express.static('public'));