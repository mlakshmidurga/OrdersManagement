const express = require('express')
const router = express.Router()
const User = require('../models/user')

const mongoose= require('mongoose')

const db = 'mongodb://localhost:27017/users'

mongoose.connect(db, err =>{
    if(err){
        console.log('Errror' + err)
    }
    else{
        console.log('connected to mongodb')
    }
})
router.get('/', (req,res)=>{
    res.send('from API router')
})



router.post('/register', (req,res)=> {
    let userData = req.body
    let user = new User(userData)
    user.save((err, reisteredUser)=>{
        if(err){
            console.log(err)
        }
        else{
            res.status(200).send(reisteredUser)
        }
    })
})


router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (error, user)=>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('Inavalid Email')
            } else{
                if(user.password !== userData.password){
                    res.status(401).send('invalid password')
                }
                else{
                    res.status(200).send(user)
                }
            }
        }
    })
})
module.exports = router