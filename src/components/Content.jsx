import { useState, useEffect,useContext } from 'react'
import {AppContext} from "../App"
import axios from 'axios'
import "./Content.css"

const API_URL=import.meta.env.VITE_API_URL

function Content() {
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState([])
    const {user,setUser,cart,setCart} = useContext(AppContext)

    const inc = () => {
        setCount(count + 1)
    }

    const dec = () => {
        setCount(count - 1)
    }

    const fetchProducts = async () => {
        const url = `${API_URL}/store`
        const res = await axios.get(url)
        setProducts(res.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const addToCart=(product)=>{
        const found=cart.find((item)=>item._id===product._id);
        if (!found){
            product.quantity=1;
            setCart([...cart,product])
        }
    }


    return (
        <>

            {/* 
            <h1>
                <button onClick={dec}>-</button> {count}
                <button onClick={inc}>+</button>
            </h1>
            */}
        <div className='row'>
            {products.map((product) => (
                <div className='box'>
                    <img src={`${API_URL}/${product.imageUrl}`} 
                    width="300px" alt="" />
                    <h3>{product.name}</h3>
                    <p>{product.desc}</p>
                    <h4>{product.price}</h4>
                    <p><button onClick={() => addToCart(product)}>Add to cart</button></p>
                    <h4>⭐{product.rating}</h4>
                    
                </div>
            ))}

            </div>
        </>
    )
}

export default Content