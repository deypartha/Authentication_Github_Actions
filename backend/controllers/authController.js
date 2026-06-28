import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async(req, res)=>{
    try{
        const {name, email, password} = req.body
        const exist = await user.findOne({email})
        if(exist){
            return res.status(400).json({message: "User already exists..."})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const User = await user.create({
            name,
            email,
            password: hashedPassword,
        })
        res.status(201).json({message: "User created successfully..."})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

export const login = async(req, res)=>{
    try{
        const { email, password } = req.body;
        const User = await user.findOne(email)
        if(!User){
            return res.status(400).json({message: "user not found"})
        }
        const matchedPassword = await bcrypt.compare(password, user.password)
        if(!matchedPassword){
            return res.status(400).json({
                message: "Wrong password"
            })
            const token = jwt.sign(
                {
                    id: user.id
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "1d",
                }
            )
            res.json({token, user})
        }
    }
    catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}