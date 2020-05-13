const express = require("express");

const app = express();
app.get("/", function (req, resp) {
    console.log("Response from server", req);
    resp.send("<h1>Hello from server </h>");

})
app.get("/contact", function (req, resp) {
    console.log("Response from server", req);
    resp.send("<h3> eE-mail : jaijujacob@gmail.com </h3>");

})

app.get("/about", function (req, resp) {
    console.log("Response from server", req);
    resp.send("<h3> This is a sample web server response page. More will be added soon </h3>");

})
app.listen(3000, function () {
    console.log("Server started on port 3000");

});