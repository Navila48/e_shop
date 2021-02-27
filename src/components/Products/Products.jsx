import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product'

const products=[
{id:1,name:'Shoe',description:'Ladies shoe' ,price:'$10',image:'https://unsplash.com/photos/4ZuX_5U6xTsQ'},
{id:1,name:'Bag',description:'Ladies Bag' ,price:'$100', image:'https://images.app.goo.gl/tyXpEfpoXHpRQ'},
]
const Products=()=>{
    return ( 
    <main>
        <Grid container justify='center' spacing={4}>
            {
               products.map((product)=>( 
                   <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                       <Product product={product}/>
                   </Grid>
               ))
            }
        </Grid>
    </main>
    )
}
export default Products;