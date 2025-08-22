import mongooes from "mongoose"

const userSchema = new mongooes.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
})

export default mongooes.model("User", userSchema);