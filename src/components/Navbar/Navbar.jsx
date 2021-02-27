
import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons'

import logo from '../../assets/e_shop.png';
import useStyles from './styles';
const Navbar = () => {
    const classes= useStyles();
    return (
        <>
          <AppBar position='fixed' className={classes.appBar} color='inherit'>
              <Toolbar >
                    
                    <Typography className={classes.title} color='inherit' variant='h6'>
                      <img src={logo} height='25px' alt='e_shop' className={classes.image}/>
                      E_Shop
                    </Typography>
              
              <div className={classes.grow} />
              <div className={classes.button}>
                  <IconButton aria-label="Show item cart" color='inherit' >
                      <Badge badgeContent={2} color='secondary'>
                          <ShoppingCart/>
                      </Badge>
                  </IconButton>
              </div>
              </Toolbar>
          </AppBar>  
        </>
    )
}

export default Navbar;
