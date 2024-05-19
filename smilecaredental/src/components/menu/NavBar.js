import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuButton from "../buttons/MenuButton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Media
                </Typography>
                <MenuButton color="inherit" href="/">
                    Home
                </MenuButton>
                <MenuButton color="inherit" href="/users" >Users</MenuButton>
                <MenuButton color="inherit" href="/posts">Posts</MenuButton>
                <MenuButton color="inherit" href="/photos">Photos</MenuButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;