import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";

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
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  divider: {
    color: "#651fff",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemText>
            <NavLink to="/">
              <Link
                component="button"
                variant="body2"
                style={{ textDecoration: "none", color: "#21243d" }}
              >
                <HomeIcon style={{ verticalAlign: "middle" }} /> Home
              </Link>
            </NavLink>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <NavLink to="/topstories">
              <Link
                component="button"
                variant="body2"
                style={{ textDecoration: "none", color: "#21243d" }}
              >
                <WhatshotIcon style={{ verticalAlign: "middle" }} /> Go to top
                stories
              </Link>
            </NavLink>
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#21243d" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            style={{ color: "#21243d" }}
          >
            {list("left")}
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" style={{ color: "#ffffff", textDecoration: "none" }}>
              NewsSource
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
