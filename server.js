const mongoose = require('mongoose');
const express = require('express');
const userDetails = require('./usermodel')
const postData = require('./postModel')
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

const url = ('mongodb+srv://tanushri8981:JdCqha5xXvEkWYrw@cluster0.d1wo2ao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
mongoose.connect(url)
.then(()=>console.log(`DB connected successfully`))
.catch(err=>console.log(err))


app.get('/getting' , (req, res)=>{
    res.json(`hello world`)
})

app.post('/signup', async (req, res)=>{
    const {username, email, password} = req.body;
    const userExist = await userDetails.findOne({email})


    if(userExist){
        return res.status(200).json({status: false, message:"user already exist", data: null})
    }
    const users = await userDetails.create({username, email, password})
    console.log(`Username ${username}, Email ${email}, Password ${password}`)
    res.status(201).json({status: true, message:"user added successfully", data:req.body})
    users.save()
})

app.post('/login' , async(req, res)=>{
    const {email, password} = req.body;
    const userExist = await userDetails.findOne({email:email})

    if(!userExist){
        return res.status(404).json({message:"User is not registered, please signup"})
    }

})

app.post('/postdata', async(req, res)=>{
    const {title, post, userId} = req.body;

    const user = await userDetails.findById(userId)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    const posts = await postData.create({title, post, userId})
    console.log(`Posted Data ${post}, Posted title ${title}`)
    res.status(201).json({message:"post added successfully", data:{title, post, userId} })
    posts.save()
})


app.get('/getdata', async(req, res)=>{
    const getdatas = await postData.find().populate('userId', 'username')
    res.json(getdatas)
})



app.listen(3000, (req, res)=>{
    console.log(`Server is running on port 3000`)
})