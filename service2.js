import express from "express";
let app = express();

app.get('/service2', (req, res, next) => {
    res.send(["Ginger","Food"])
});

app.listen(3001, () => {
    console.log('Server2 running on 3000');
});