import mongooes from "mongoose";
import { MONGODB_URL, PORT } from "./utils/config.js";
import app from "./app.js";

mongooes.connect(MONGODB_URL)
    .then(() => {
        app.listen(PORT, () => {

            console.log("server runimg ");
        })
    })
    .catch((err) => {
        console.log(err)
    })