import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Drawer, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: "flex",
    },
    drawer: {
        width: props => props.width,
    },
    paper: {
        width: props => props.width,
        paddingTop: props => props.height,        //appbar height
        backgroundColor: "rgb(251, 251, 251)",
    },
    button: {
        '&:hover': {
            transition: "background-color 0.2s ease-out",
            backgroundColor: '#6b188031',
            color: 'black',
        },
        '&:focus': {
            transition: "background-color 0.2s ease-out",
            backgroundColor: '#6b188031',
            color: 'black',
        }
    },
});

const Sidebar = (props) => {
    const classes = useStyles(props);
    const menuItems = [
        {
            text: "🧑 Profile",
            path: "/profile"
        },
        {
            text: "☁ Data management",
            path: "/data"
        },
        {
            text: "💸 Billing & Usage",
            path: "/billing"
        }
    ]

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant={"permanent"}
                anchor={"left"}
                // override default drawer paper styling class
                classes={{paper: classes.paper}}
            >
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            key={item.text}
                            button
                            component={Link}
                            to={item.path}
                            className={classes.button}
                        >
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default Sidebar;