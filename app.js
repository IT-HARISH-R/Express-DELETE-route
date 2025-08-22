import express from "express";


const app = express();

app.use("/", ((req, res) => {
    res.json("hello")
}))

export default app;