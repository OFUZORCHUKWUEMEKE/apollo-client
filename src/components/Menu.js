import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';

export default function ButtonAppBar() {
    const { user, logout } = useContext(AuthContext)


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to='/' style={{ textDecoration: "none", color: "white", flexGrow: 1 }}><Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
                        GraphQl Apollo
                    </Typography></Link>
                    <Link style={{ textDecoration: "none", color: "white" }} to="/login"> <Button color="inherit">Login</Button></Link>
                    <Link style={{ textDecoration: "none", color: "white" }} to="/register"><Button color="inherit">Register</Button></Link>  

                </Toolbar>
                </AppBar>
         
        </Box>
    );
}