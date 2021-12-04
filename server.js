const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

app.use(express.static("public"));

app.set("view engine", "handlebars");
app.engine(
	"handlebars",
	handlebars({
		layoutsDir: __dirname + "/views/layouts",
		defaultLayout: "index",
	})
);

app.get("/", (req, res) => res.send("hello"));
app.all("*", (req, res) =>
	res.status(404).send(`Page you are looking for is not here.`)
);
app.listen("3200", () => console.log(`listening to 3200`));
