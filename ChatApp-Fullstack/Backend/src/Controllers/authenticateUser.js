import bcrypt from 'bcryptjs'
const saltRounds = 10;
import Users from '../Models/Users.js'

export  const signup = async(req,res)=>{
     try {
         const { fullname, email, password } = req.body;
         if (!fullname || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Check if user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }
   const newUser = new Users({ fullname, email, password: hashedPassword  });
    await newUser.save();

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Server error during signup" });
  }
};
export  const login =async(req,res)=>{
     try {
        const { email, password } = req.body;
         if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    // Check if user already exists
    const existingUser = await Users.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ error: "User not  exists" });
    }
  const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", userId: existingUser._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}