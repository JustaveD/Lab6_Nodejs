const express = require("express");

const User = require("../models/user");

const router = express.Router();

router.get("/view/:id",(req,res,next)=>{
    let id = req.params.id;

    User.getById(id,(data)=>{
        res.send(data);
    })
})

router.post("/add",(req,res,next)=>{
    console.log(req.body);
    let fullName = req.body.fullName;
    let password = req.body.password;

    User.addUser(fullName,password,(data)=>{
        res.send(data);
    })
})

router.put("/edit/:id",(req,res,next)=>{
    let id = req.params.id;
    let fullName = req.body.fullName;
    let password = req.body.password;
    let role = req.body.role;

    User.updateUser(id,fullName,password,role,(data)=>{
        res.send(data);
    })
})

router.get("/product",(req,res,next)=>{
    User.getAllBook((data)=>{
        res.send(data)
    })
})
router.get("/list",(req,res,next)=>{
    User.getAllUser((data)=>{
        res.send(data)
    })
})
router.delete("/delete/:id",(req,res,next)=>{
    let id = req.params.id;
    User.deleteById(id,(data)=>{
        res.send(data);
    })
})


module.exports = router;