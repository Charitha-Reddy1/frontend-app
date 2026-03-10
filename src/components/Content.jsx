import {useState,useEffect} from 'react'
import axios from 'axios'

function Content(){
    const [count,setCount]=useState(0)
    const [products,setProducts]=useState([])

    const inc=()=>{
        setCount(count+1);
    }

    const dec=()=>{
        setCount(count-1);
    }

    const fetchProducts=async()=>{
        const url='http://localhost:5000/products'
        const res=await axios.get(url)
        setProducts(res.data)
    }

    useEffect (fetchProducts(),[])

    return (<div>
        <h3>Products Page</h3>
        <h1>
        <button onClick={dec}>-</button> {count} 
        <button onClick={inc}>+</button>
        </h1>
        <br/>
        {products.map(product=>{
            <li>product.name</li>
        })}
        </div>
    );
}

export default Content