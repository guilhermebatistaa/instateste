import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, () => {
	console.log("Servidor ON...");
});

app.get("/posts", (req, res) => {
	res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
	const index = BuscarPostPorID(req.params.id);
	res.status(200).json(posts[index]);
});

function BuscarPostPorID(id){
	return posts.findIndex((post) => {
		return post.id === Number(id);
	});
}

const posts = [
	{
		id: 1,
		descricao: "Uma foto teste",
		imagem: "https//placecats.com/mille/300/150"
	},
	{
		id: 2,
		descricao: "Uma segunda foto teste",
		imagem: "https//placecats.com/mille/300/150"
	},
	{
		id: 3,
		descricao: "Uma terceira foto teste",
		imagem: "https//placecats.com/mille/300/150"
	}
]