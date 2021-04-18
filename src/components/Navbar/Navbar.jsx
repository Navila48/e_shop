
import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import{Link, useLocation} from 'react-router-dom';
import logo from '../../assets/e_shop.png';
import useStyles from './styles';
const Navbar = ({totalItems}) => {
    const classes= useStyles();
    const location= useLocation();
    return (
        <>
          <AppBar position='fixed' className={classes.appBar} color='inherit'>
              <Toolbar >
                    
                    <Typography component={Link} to="/" className={classes.title} color='inherit' variant='h6'>
                      <img src={logo} height='25px' alt='e_shop' className={classes.image}/>
                      E_Shop
                    </Typography>
              
              <div className={classes.grow} />
             {location.pathname === "/" && ( 
              <div className={classes.button}>
                  <IconButton component={Link} to= "/cart" aria-label="Show item cart" color='inherit' >
                      <Badge badgeContent={totalItems} color='secondary'>
                          <ShoppingCart/>
                      </Badge>
                  </IconButton>
              </div>)}
              </Toolbar>
          </AppBar>  
        </>
    )
}

export default Navbar;
