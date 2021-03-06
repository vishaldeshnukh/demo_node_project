const express = require("express");
global.app = express();

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get("/api/test", (req, res) => {
    res.send(`api test route ${process.env.NAME}`);
});

app.listen(4001, () => {
    console.log(`API running on ====>  ${process.env.PORT}`)
});
