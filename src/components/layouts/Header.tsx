import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

// darkmode/lightmode switch
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useTheme } from '@material-ui/core/styles';
import { useChangeTheme } from '../darkmode';

import Container from '@material-ui/core/Container';

import darkbanner from '../../assets/banner3.png';
import lightbanner from '../../assets/banner4.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(1),
        },
        title: {
            flexGrow: 1,
            paddingTop: '8px',

        },
    }),
);

export default function Header() {
    const classes = useStyles();
    const defaultTheme = useTheme();
    const theme = useTheme();
    const changeTheme = useChangeTheme();

    return (
        <AppBar variant="outlined" color="default" position="fixed">
            <Container maxWidth="md">
                <Toolbar>

                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        title="Toggle light/dark mode"
                        onClick={() => changeTheme()}
                    >
                        {theme.palette.type === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {theme.palette.type === 'dark' ? <img src={darkbanner} width="115px"></img> : <img src={lightbanner} width="115px"></img>}


                    </Typography>
                    <Button color="inherit">Portfolio</Button>
                    <Button color="inherit">Contact</Button>

                </Toolbar>
            </Container>
        </AppBar>
    )
}
