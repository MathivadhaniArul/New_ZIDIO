import bcrypt from "bcrypt";
import User from "../models/user.models.js";
import jwt from "jsonwebtoken";


// user register
export const userRegister = async (req, res) => {
   try {
      const { username, email, password } = req.body;
      const existinguser = await User.findOne({ email });

      if (existinguser) {
         return res.status(400).json({ message: "User already exist" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
         username,
         email,
         password: hashedPassword,
      });

      const token = jwt.sign({ userId: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

      return res.status(201).json({ message: "User registered successfully", token, user: { username: newUser.username, email: newUser.email, role: newUser.role } });

   }
   catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

//  login
