import express from "express";

let app = express();

app.get('/service1', (req, res, next) => {
    res.send(["Tony","Lisa","Michael"])
});

app.listen(3000, () => {
    console.log('Server1 running on 3000');
});