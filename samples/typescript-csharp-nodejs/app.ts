import express from 'express';
import { Guid } from 'typescript-csharp';

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send(Guid.newGuid());
});
app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});