import React, {useState, useEffect} from 'react';
import {Products, Navbar, Cart, Checkout} from './components';
import {commerce} from './lib/commerce';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const App = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCart] = useState({});
    const fetchProducts = async()=>{
         const {data}=await commerce.products.list();
        setProducts(data);
    }
    const fetchCart = async()=>{
    setCart( await commerce.cart.retrieve());
    }
    const handleAddToCart= async(productId,quantity) => {
    const item= await commerce.cart.add(productId,quantity);
    setCart(item.cart);
    }

    const handleUpdateQty = async(productId,quantity) =>{
        const response = await commerce.cart.update(productId, {quantity});
        setCart(response.cart);
    }
    const handleRemoveFromCart = async(productId) =>{
        const {cart} = await commerce.cart.remove(productId);
        setCart(cart);
    }
    const handleEmptyCart = async()=>{
        const {cart} = await commerce.cart.empty();
        setCart(cart);
    }
useEffect( () => {
 fetchProducts();
 fetchCart();

}, []);
console.log(products);
console.log(cart);
    return (
        <Router>
             <div>
             <Navbar totalItems={cart.total_items}/>
             <Switch>
                <Route exact path="/">
                    <Products products={products} onAddToCart={handleAddToCart}/>
                </Route>

                <Route exact path="/cart">
                    <Cart cart={cart} onUpdateToCart={handleUpdateQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}/>
                </Route>
                <Route exact path="/checkout">
                    <Checkout/>
                </Route>

             </Switch>
            </div>
        </Router>
    )
}

export default App
