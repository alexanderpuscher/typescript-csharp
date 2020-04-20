import express from 'express';

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});