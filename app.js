const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("/test", (req, res) => {
	res.send("Hello World!!");
});

app.listen(8080, () => {
	console.log("Server is running on port 8080");
});
