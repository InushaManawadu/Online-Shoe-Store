import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import ShopIcon from '@material-ui/icons/Shop';

// import logo from '../../assets/logo.png';
import useStyles from './styles';

const NavBar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h5" className={classes.title} color="inherit">
                        {/* <img src={logo} alt="logo" height="70px" width="100px" className={classes.image}/> */}
                        <ShopIcon fontSize='large'/>
                        Shoe Store
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}> 
                        <IconButton aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
