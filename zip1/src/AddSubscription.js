import React from "react";

const AddSubscription=()=>{
    const[subname,setSubName]=React.useState('');
    const[price,setPrice]=React.useState('');
    const[type,setType]=React.useState('');
    const[error,setError]=React.useState(false);

    const addSubscription=async()=>{
       
        console.warn(!subname);
        if(!subname ||!price ||!type)
        {
            setError(true);
            return false;
        }
        const userId=await JSON.parse(localStorage.getItem('users'));
        let result=await fetch("http://localhost:9022/add-subscription",{
            method:'post',
            body:JSON.stringify({subname,price,type,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json();
        console.warn(result);
    }
    return(
        <div className="product">
              <h1>Add Subscription</h1>
              <input type="text" placeholder="Enter Subscription name" className="inputbox"
              value={subname} onChange={(e)=>{setSubName(e.target.value)}}
              />
              {error && !subname&&<span className="invalid-input">Enter valid name</span>}
              <input type="text" placeholder="Enter Subscription price" className="inputbox"
             value={price} onChange={(e)=>{setPrice(e.target.value)}}
              />
              {error && !price&&<span className="invalid-input">Enter valid price</span>}
              <input type="text" placeholder="Enter Subscription Type" className="inputbox"
              value={type} onChange={(e)=>{setType(e.target.value)}}
              />
              {error && !type&&<span className="invalid-input">Enter valid type</span>}
              
              <button onClick={addSubscription} className="Appbutton">Add Subscription</button>
        </div>
    )
}

export default AddSubscription;