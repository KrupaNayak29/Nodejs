const express = require("express");
const cors = require("cors");
const User = require("./db/User");
const Product=require("./db/Product");
const Subscription=require("./db/Subscription");

require('./db/config');

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));
app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result=result.toObject();
    delete result.password
    resp.send(result)
})
app.post("/Login", async (req, resp) => {
    console.log(req.body);
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user);
        }
        else {
            resp.send({ result: 'no user found' })
        }
    }
    else { resp.send({ result: 'no user found' }) }
})

app.post("/add-product",async(req,resp)=>{
     let product =new Product(req.body);
     let result=await product.save();
     resp.send(result);
});

app.get("/products",async(req,resp)=>{
    let products=await Product.find();
    if(products.length>0){
        resp.send(products)
    }
    else{
        resp.send({result:"No Products Found"})
    }
})

app.delete("/product/:id",async(req,resp)=>{
    const result=await Product.deleteOne({_id:req.params.id})
    resp.send(result);
});

app.post("/add-subscription",async(req,resp)=>{
    let subscription =new Subscription(req.body);
    let result=await subscription.save();
    resp.send(result);
});
app.get("/subscription",async(req,resp)=>{
    let subscription=await Subscription.find();
    if(subscription.length>0){
        resp.send(subscription)
    }
    else{
        resp.send({result:"No Subscription Found"})
    }
})

app.delete("/subscription/:id",async(req,resp)=>{
    const result=await Subscription.deleteOne({_id:req.params.id})
    resp.send(result);
});
app.listen(9022);
