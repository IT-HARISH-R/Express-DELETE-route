import bcrypt from "bcrypt"
import User from "../model/User.js";

const authController = {
    signup: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            console.log(name, email, password)
            if (!name) return res.json({ message: 'Username is requirement ' })
            if (!email) return res.json({ message: 'Email is requirement ' })
            if (!password) return res.json({ message: 'Password is requirement ' })
            const exists = await User.findOne({ email })
            if (exists) return res.json({ message: 'Email already exists' })
            const hasPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                name,
                email,
                password: hasPassword
            })
            res.json({ message: "Register successfully" })
        }
        catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    deleteById: async (req, res) => {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        res.json({ message: 'Delete successfully' })
    },
    allUser: async (req, res) => {
        try {
            const user = await User.find();
            res.json(user)
        }
        catch (err) {
            console.log(err);
            res.json(err)
        }
    }
}

export default authController;