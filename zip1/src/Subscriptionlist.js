import React, { useEffect, useState } from "react";

const Subscriptionlist=()=>{
    const [subscription,setsubscription]=useState([]);

    useEffect(()=>{
        getsubscription();
    },[])
    
    const getsubscription=async()=>{
        let result=await fetch('http://localhost:9022/subscription');
        result=await result.json();
        setsubscription(result);
    }
    console.warn("subscription",subscription);

    const deleteSubscription=async(id)=>{
        let result=await fetch(`http://localhost:9022/subscription/${id}`,{
        method:"Delete"
    })
    result=await result.json()
    if(result)
    {
        alert("record is delete")
    }
};
    return(
        <div className="product-list">
            <h3>Subscription List</h3>
            <ul>
                <li>S.NO</li>
                <li>SubName</li>
                <li>Price</li>
                <li>Type</li>
                <li>Operation</li>
            </ul>
            {
                subscription.map((item,index)=>
                <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.subname}</li>
                    <li>${item.price}</li>
                    <li>{item.type}</li>
                    <li><button onClick={()=>deleteSubscription(item._id)}>Delete</button></li>
                </ul>)
            }
        </div>
    )
}
export default Subscriptionlist;