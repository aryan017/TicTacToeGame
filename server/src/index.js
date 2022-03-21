import express from "express"
import cors from "cors"
import bcrypt from "bcrypt"
import {v4 as uuidv4} from "uuid"
import {StreamChat} from "stream-chat"
const app=express()

app.use(cors())
app.use(express.json())

const api_key="hc629nv5h2uh";
const api_secret="ehfaz5xc6whbbx6ksk5vmr92m27b6zv4gfnx73s7329eq2em9s89rsxs5pjuhrsq";
const serverClient=StreamChat.getInstance(api_key,api_secret)

app.post("/signup", async (req,res) => {
    try{
    const {firstName,lastName,UserName,Password}= req.body
    const userId=uuidv4();
    const hashedPassword=await bcrypt.hash(Password,10) //because it returns promise that's why async and await
    const token=serverClient.createToken(userId)
    res.json({token,userId,firstName,lastName,UserName,hashedPassword}) // response for frontEnd
    }catch(error){
    res.json(error);
    }
})

app.listen(3001, () => {
    console.log("Working")
});

