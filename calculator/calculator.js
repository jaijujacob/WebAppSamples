const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

function add(x, y) {
    return x + y;
}
function substract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function devide(x, y) {
    return x / y;
}
function modulus(x, y) {
    return x % y;
}
function calculate(x, y, operator) {
    return operator(x, y);
}


function calculateBMI(x, y) {
    return null;
}
app.get("/", function (req, resp) {
    console.log(__dirname);
    resp.sendFile(__dirname + "/index.html");

})

app.post("/", function (req, resp) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var op = req.body.operator;

    var result;
    switch (op) {
        case "add":
            result = calculate(num1, num2, add);
            break;
        case "substract":
            result = calculate(num1, num2, substract);
            break;
        case "multiply":
            result = calculate(num1, num2, multiply);
            break;
        case "devide":
            result = calculate(num1, num2, devide);
            break;
        case "modulus":
            result = calculate(num1, num2, modulus);
            break;
        default:
            console.log("Unidentified operator");

            break;
    }

    resp.send("result is:" + result);

})

app.get("/bmiCalculator", function (req, resp) {
    console.log(__dirname);
    resp.sendFile(__dirname + "/bmiIndex.html");

})

app.post("/bmiCalculator", function (req, resp) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight/ (height * height)
    resp.send("BMI : " + result)
})

app.listen(3000, function () {
    console.log("Server started on port 3000");

});