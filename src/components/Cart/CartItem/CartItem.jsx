
import React from 'react';
import {Typography,Card, CardActions, CardMedia, CardContent,Button} from '@material-ui/core';
import useStyle from './styles';
const CartItem = ({item,onUpdateToCart, onRemoveFromCart}) => {
    const classes= new useStyle();
    return (
        <Card>
            <CardMedia image = {item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}> 
                <Typography variant='h4'>{item.name}</Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                 <div className={classes.buttons}>
                     <Button size='small'  type='button' onClick={()=>onUpdateToCart(item.id, item.quantity - 1)}>-</Button>
                    <Typography >{item.quantity}</Typography>
                     <Button size='small' type='button' onClick={()=>onUpdateToCart(item.id, item.quantity + 1)}>+</Button>
                 </div>
                 <Button variant='contained' color='secondary' type='button' onClick={()=>onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem

