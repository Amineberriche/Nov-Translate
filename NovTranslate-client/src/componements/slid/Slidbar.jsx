import React from "react";
import { Container, Typography } from "@material-ui/core";
import { ContactMail, ExitToApp, FeaturedPlayList, Home, PlaylistAdd, SettingsApplications } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import useStyles from "./Style";



const Slidbar = () => {
    const { t } = useTranslation();
    const classes = useStyles();


      const logOut = () => {
       AuthService.logout();
       window.location.href = "/"
      };

  return (
    <div className={classes.background}>
    <Container className={classes.container}>
      <Link to="/" style={{textDecoration: "none"}}>
      <div className={classes.item}>
        <Home className={classes.icon}/>
        <Typography className={classes.text}>{t('Homepage')}</Typography>
      </div>
      </Link>
      <div className={classes.item}>
        <FeaturedPlayList className={classes.icon}/>
        <Typography className={classes.text}>{t('Poducts')}</Typography>
      </div>
      <div className={classes.item}>
        <PlaylistAdd className={classes.icon}/>
        <Typography className={classes.text}>{t('Solutions')}</Typography>
      </div>
      <div className={classes.item}>
        <SettingsApplications className={classes.icon}/>
        <Typography className={classes.text}>{t('Services')}</Typography>
      </div>
      <div className={classes.item}>
        <ContactMail className={classes.icon}/>
        <Typography className={classes.text}>{t('Contact')}</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon}/>
        <Typography className={classes.text} onClick={logOut}>{t('Logout')}</Typography>
      </div>
  </Container>
  </div>
  )
}

export default Slidbar