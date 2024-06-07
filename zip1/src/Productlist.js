import React, { useEffect, useState } from "react";

const Productlist=()=>{
    const [products,setproducts]=useState([]);

    useEffect(()=>{
        getProducts();
    },[])
    
    const getProducts=async()=>{
        let result=await fetch('http://localhost:9022/products');
        result=await result.json();
        setproducts(result);
    }
    console.warn("products",products);

    const deleteProduct=async(id)=>{
        let result=await fetch(`http://localhost:9022/product/${id}`,{
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
            <h3>Product List</h3>
            <ul>
                <li>S.NO</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {
                products.map((item,index)=>
                <ul key={item._id}>
                    <li>{index+1}</li>
                    <img src={item.thumb} height="80" width="80"/>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li><button onClick={()=>deleteProduct(item._id)}>Delete</button></li>
                </ul>)
            }
        </div>
    )
}
//<img src={"http://localhost:9022/"+item.thumb}/>
export default Productlist;