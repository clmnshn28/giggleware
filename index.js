    import express from "express";
    import axios from "axios";

    const app = express();
    const port = 3000;

    app.use(express.static("public"));


    app.get("/", async (req, res)=>{

        try {
            const response = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit,sexist&type=twopart&amount=2");
            console.log(response.data)
            res.render("index.ejs", { joke: response.data.jokes });

        } catch (error) {
            res.status(404).send(error.message);
        }
    })

    app.listen(port , ()=>{
        console.log(`The server is running on port: ${port}`);
    })