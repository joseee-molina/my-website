import React from "react";
import {Link} from "react-router-dom";
import {AppBar, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: "white",
        zIndex: theme.zIndex.drawer + 1,
        marginBottom: 0,
        marginTop: 0,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "#6b1880",
    },
    img: {
        /*
        width & height calculated based on appbar height and original 152x93 logo size,
        24px margin is subtracted from the given height
         */
        width: props => ((props.height-24)/93)*152,
        height: props => props.height-24,
    }
}));

const Appbar = (props) => {
    const classes = useStyles(props);

    return (
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    aria-label="menu"
                    component={Link}
                    to="/profile"
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/ms-logo.png`}
                        alt={"logo"}
                        className={classes.img}
                    />
                </IconButton>
                <Typography variant="h4" className={classes.title}>
                    magicsheets
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Appbar;