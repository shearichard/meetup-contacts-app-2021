import { FC } from 'react';
// eslint-disable-next-line
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, List, ListItem, ListItemText  } from "@material-ui/core";
//
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

//`useStylesAlternate` is based on this article :
//https://ansonlowzf.com/how-to-build-a-material-ui-navbar/
const useStylesAlternate = makeStyles((theme: Theme) =>
  createStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },
  }),
);

const navLinks = [
  { title: `contacts`, path: `/contacts` },
  { title: `home`, path: `/` },
]

export const NavigationBar: FC = () => {

    const classes = useStyles();
    const classesalternate = useStylesAlternate();

    return(
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                <MenuIcon />
                </IconButton>
                {/* Add code */}
                <List 
                    component="nav" 
                    aria-labelledby="main navigation"
                    className={classesalternate.navDisplayFlex}
                >
                    {navLinks.map(({ title, path }) => (
                        <a href={path} key={title} className={classesalternate.linkText} >
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </a>
                    ))}
                </List>
                {/* Add code end */}
                <Typography variant="h6" color="inherit" component="div">
                    Contact App
                </Typography>
            </Toolbar>
          </AppBar>
        </div>
    )
};

