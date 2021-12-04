const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
	res.render("index", {
		data: JSON.stringify({ title: "home" }),
		page: "Home",
	});
});

app.get("/about", (req, res) =>
	res.render("about", {
		data: JSON.stringify({ title: "about" }),
		page: "About us",
	})
);
app.get("/contact", (req, res) =>
	res.render("contact", {
		data: JSON.stringify({ title: "contact" }),
		page: "Contact",
	})
);
app.all("*", (req, res) =>
	res.status(404).send(`Page you are looking for is not here.`)
);
app.listen("3200", () => console.log(`listening to 3200`));
