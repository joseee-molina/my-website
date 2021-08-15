import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";
import Appbar from "./components/Appbar";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import {makeStyles} from "@material-ui/core";

const sidebarWidth = 240;
const appBarHeight = 80;

const useStyles = makeStyles((theme) => ({
    /*
    The main flex container for the app's layout. Its min-height
    is set to `100vh` so it always fills the full height of the screen.
     */
    root: {
        minHeight: "100vh",
        zIndex: 1,
        position: "relative",
        overflow: "hidden",
    },
    content: {
        paddingTop: appBarHeight - 16,             // 16px subtracted for prettiness
        paddingLeft: sidebarWidth,
    }
}));

function App() {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <Router>
                    <Appbar height={appBarHeight}/>
                    <Sidebar width={sidebarWidth} height={appBarHeight}/>
                    <div className={classes.content}>
                        <Route path="/profile" exact={true} component={Profile}/>
                    </div>
                </Router>
            </div>
    );
}

export default App;