
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

function checkName(req, res, next) {
    if (req.query.name !== "Ivan") {
        res.json('Неверное имя');
    } else {
        next();
    }
}

function checkLastname(req, res, next) {
    if (req.query.lastname !== "Ivanov") {
        res.json('Неверная фамилия');
    } else {
        next();
    }
}

function checkAge(req, res, next) {
    if (req.query.age !== "30") {
        res.json('Неверный возраст');
    } else {
        next();
    }
}

app.get('/sayMyInfo', checkName, checkLastname, checkAge, (req, res) => {
    console.log(`My name ${req.query.name} ${req.query.lastname}, I'm ${req.query.age}.`);
    res.end(`My name ${req.query.name} ${req.query.lastname}, I'm ${req.query.age}.`);
});


function sayMyInfo(req, res, next) {
    console.log(`My name ${req.body.name} ${req.body.lastname}, I'm ${req.body.age}.`);
    next();
}

app.post('/sayMyInfo', sayMyInfo, function (req, res) {
    res.end('ok');
});

function sayMyInfo2(req, res, next) {
    console.log(`My name ${req.body.name} ${req.body.lastname}, I'm ${req.body.age}.`);
    next();
}

app.post('/sayMyInfo', sayMyInfo2, function (req, res) {
    res.json('ok');
});

app.listen(8080);