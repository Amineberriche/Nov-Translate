import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import userService from "../../services/user.service";
import { AppBar, CardMedia, Divider, InputBase, Menu, MenuItem, Select, Toolbar, Typography  } from "@material-ui/core";
import { Cancel, ExitToApp, HowToReg, Security, AccountBox, Brightness7Rounded, HomeRounded,  Person } from "@material-ui/icons";
//import { alpha } from '@material-ui/core/styles';
import Search from "@material-ui/icons/Search";
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import { deepPurple } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
//import ImageIcon from '@material-ui/icons/Image';

import useStyles from "./Style";

import { useTranslation } from "react-i18next";

import {
  IconFlagFR,
  IconFlagUS,
  IconFlagES,
  IconFlagDE,
  
} from 'material-ui-flags';



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const Header = () => {
  const { t , i18n} = useTranslation();
  

  const [user,setUser] = useState([]);

  useEffect(() => {
      init2();
   }, []);

   const init2 = () => {
       userService.getUser()
           .then(response => {
               console.log('Printing user data', response.data);
               setUser(response.data)
           })
           .catch(error => {
               console.log('Something went wrong', error);
           })
   }

   const viewProfil = () => {
    userService.getUser()
           .then(response => {
               console.log('Printing user data', response.data);
               window.location.href = `/profile/${response.data.username}`;
               setUser(response.data)
           })
           .catch(error => {
               console.log('Something went wrong', error);
           })
  }

   const [open,setOpen] = useState(false);
    const [openSelect, setOpenSelect] = useState(false);
    
    const changeLang = (event) => {
        i18n.changeLanguage(event.target.value)
    }
    
    const handleClose = () => {
        setOpenSelect(false);
      };
    
    const handleOpen = () => {
      setOpenSelect(true);
    };
    
  const [anchorElmenu, setAnchorElmenu] = React.useState(null);

  const handleClickmenu = (event) => {
    setAnchorElmenu(event.currentTarget);
  };

  const handleClosemenu = () => {
    setAnchorElmenu(null);
  };
    
    const [currentUser,setCurrentUser] = useState(undefined);
    //const [showAdminBoard,setShowAdminBoard] = useState(false);

      //const [logOuta, setLogOut] = useState({
      //showAdminBoard:false,
      // currentUser: undefined
      //});

      useEffect(() => {
        const user = AuthService.getCurrentUser();
    
        if(user) {
          setCurrentUser(user)
          //setShowAdminBoard(true)
        }
      },[]);

      const logOut = () => {
       AuthService.logout();
       window.location.href = "/login"
      };
     
  const classes = useStyles({ open });
  return (
    <>
    <AppBar position="fixed" className={classes.navbar}>
          <Toolbar className={classes.toolbar}>
            <Link to="/" style={{textDecoration:"none"}}>
              <Typography variant="h6" className={classes.logoLg}>
                 <span className={classes.span}>Nov-</span>Translate
              </Typography>
              <Typography variant="h6" className={classes.logoSm}>
                 <span className={classes.span}>N</span>Translate
              </Typography>
             </Link>
             <div className={classes.navtext}>
                <Typography variant="h7" className={classes.navtext}>
                  {t('Poducts')}
                </Typography>  
                <Typography variant="h7" className={classes.navtext}>
                  {t('Solutions')}
                </Typography> 
                <Typography variant="h7" className={classes.navtext}>
                  {t('Services')}
                </Typography>  
                <Typography variant="h7" className={classes.navtext}>
                  {t('Contact')}
                </Typography>    
             </div>
              <div className={classes.search}>
                    <Search className={classes.searchIcon}/>
                    <InputBase placeholder={t("Search")} className={classes.input}  />
                    <Cancel className={classes.cancel} onClick={()=> setOpen(false)}/>
              </div>
              <div className={classes.icons}>
                <Search 
                className={classes.searchButton} 
                onClick={() => setOpen(true)}
                /> 
    
                    <Select
                    className={classes.select}
                    style={{color:"#3f3f3f"}}
                    open={openSelect}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    onChange={changeLang}
                    defaultValue={"Lang"}
                    >
                        <MenuItem value={"Lang"}>
                          <Typography variant="h7"className={classes.menuItem}>
                          <CardMedia
                             component="img"
                             image="/static/img/langue.png"
                             alt="translate icon"
                            /><span className={classes.menuItemLang}> {t("Langue")}</span>
                          </Typography> 
                        </MenuItem>
                        <MenuItem value={"en"}><Typography variant="h7"className={classes.menuItem}>
                          <CardMedia
                             component="img"
                             image="/static/img/us.png"
                             alt="us flag"
                            /><span className={classes.menuItemLang}>English</span></Typography>
                        </MenuItem>
                        <MenuItem value={"fr"}><Typography variant="h7"className={classes.menuItem}>
                          <CardMedia
                             component="img"
                             image="/static/img/fr.png"
                             alt="france flag"
                            /><span className={classes.menuItemLang}>Français</span></Typography>
                        </MenuItem>
                        <MenuItem value={"es"}><Typography variant="h7"className={classes.menuItem}>
                        <CardMedia
                             component="img"
                             image="/static/img/es.png"
                             alt="spain flag"
                            /><span className={classes.menuItemLang}>Español</span></Typography>
                        </MenuItem>
                        <MenuItem value={"de"}><Typography variant="h7"className={classes.menuItem}>
                        <CardMedia
                             component="img"
                             image="/static/img/de.png"
                             alt="germany flag"
                            /><span className={classes.menuItemLang}>Deutsch</span></Typography>
                        </MenuItem>
                        {/*<MenuItem value={"de"}><Typography variant="h7"className={classes.menuItem}><IconFlagDE/><span className={classes.menuItemLang}>De</span></Typography></MenuItem>*/}
                    </Select>
                <Link to="/" style={{textDecoration: "none"}}>
                <Badge 
                 className={classes.badge}
                >
                    <HomeRounded style={{ fontSize: 30 }}/>
                </Badge>
                </Link>
                <Badge
                badgeContent="Light"
                color="secondary"
                className={classes.badge}
                >
                    <Brightness7Rounded style={{ fontSize: 30 }}  />
                </Badge>
                
                  {currentUser ? ( 
                  <div>
                  <Badge 
                  className={classes.avatarbadge}
                 >
                   <Avatar
                   className={classes.purple}
                   onClick={handleClickmenu}
                   >{user.username?.substring(0, 1)?.toUpperCase()}
                   </Avatar>
                 </Badge>
                   <StyledMenu
                   id="customized-menu"
                   anchorEl={anchorElmenu}
                   keepMounted
                   open={Boolean(anchorElmenu)}
                   onClose={handleClosemenu}
                 >
                  <List className={classes.list}>
                  <ListItem>
                  <ListItemAvatar>
                  <Avatar
                  className={classes.purple}>
                    {user.username?.substring(0, 1)?.toUpperCase()}
                  </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.name} secondary={user.username}/>
                  </ListItem>
                  </List>
                  <Divider />
                  <StyledMenuItem onClick={() => viewProfil()}>
                    <ListItemIcon>
                      <AccountBox fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={t('profil-title')} />
                  </StyledMenuItem>
                  <Link to="/login" style={{textDecoration:"none",color:"black"}}>
                  <StyledMenuItem onClick={logOut}>
                    <ListItemIcon>
                      <ExitToApp fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={t('Logout')} />
                  </StyledMenuItem>
                  </Link>
                  </StyledMenu>
                  </div>
                    ) : (
                  <div>
                  <Badge 
                 className={classes.avatarbadge}
                  >
                  <Avatar
                  onClick={handleClickmenu}
                  ><Person/>
                  </Avatar>
                </Badge>
                  <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorElmenu}
                  keepMounted
                  open={Boolean(anchorElmenu)}
                  onClose={handleClosemenu}
                  >
                  <Link to="/register" style={{textDecoration:"none",color:"black"}}> 
                  <StyledMenuItem onClick={handleClosemenu}>
                    <ListItemIcon>
                      <HowToReg fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={t('register-title')} />
                  </StyledMenuItem>
                  </Link>
                  <Link to="/login" style={{textDecoration:"none",color:"black"}}>
                  <StyledMenuItem onClick={handleClosemenu}>
                    <ListItemIcon>
                      <Security fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={t('login-title')} />
                  </StyledMenuItem>
                  </Link>
                  </StyledMenu>
                  </div>
                  )}
              </div>
          </Toolbar>
      </AppBar>
    </>        
  )
}

export default Header