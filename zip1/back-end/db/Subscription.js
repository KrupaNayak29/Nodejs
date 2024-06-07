const mongoose=require('mongoose');

const subscriptionSchema=new mongoose.Schema({
    subname:String,
    price:String,
    type:String
});

module.exports=mongoose.model("subscription",subscriptionSchema);