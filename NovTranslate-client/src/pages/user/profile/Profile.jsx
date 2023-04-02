import React, { useEffect, useState } from "react";
import userService from "../../../services/user.service";
import { Avatar, Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { Edit } from '@material-ui/icons';

import useStyles from "./Style";


  
const Profile = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const [user,setUser] = useState([]);
  const {username} = useParams();

  

   const init2 = () => {
       userService.getProfil(username)
           .then(response => {
               console.log('Printing user data', response.data);
               setUser(response.data)
           })
           .catch(error => {
               console.log('Something went wrong', error);
           })
   }
  
   useEffect(() => {
      init2();
   }, []);

   const viewProfil = () => {
    userService.getUser()
           .then(response => {
               console.log('Printing user data', response.data);
               window.location.href = `/edit/${response.data.username}`;
               setUser(response.data)
           })
           .catch(error => {
               console.log('Something went wrong', error);
           })
  }

    return (
      <div className={classes.profilcontainer}>
        <Container maxWidth="lg">
        <Grid container spacing={1} className={classes.grid}>
          <Grid item xs={12} sm={8} md={10}>
          <h1>{t('profil-title')}</h1>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            
            <Button
            onClick={() => viewProfil()}
            variant="contained"
            color="primary"
            endIcon={<Edit/>}
            className={classes.button}
            >
            {t('profil-button')} 
            </Button>
            
          </Grid>
          <Grid item xs={12} sm={12} md={3} justifyContent="center">
          <Avatar alt="user image" src="/static/img/user.png" className={classes.userimg} />
          <div className={classes.text}>
            <Typography variant="h6">
              {user.name}
            </Typography>
          </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {t('profil-title2')}
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                  {t('Full-name')} :
              </Typography>
              <TextField
              gutterBottom
              fullWidth
              variant="outlined"
              value={user.name}
              InputProps={{
                readOnly: true,
              }}
            />
              <Typography variant="h6" component="h2" gutterBottom>
                  {t('username')} :
              </Typography>
              <TextField
              gutterBottom
              fullWidth
              variant="outlined"
              value={user.username}
              InputProps={{
                readOnly: true,
              }}
            />
            <Typography variant="h6" component="h2" gutterBottom>
                {t('address')} :
              </Typography>
              <TextField
              gutterBottom
              fullWidth
              variant="outlined"
              value="Hay EL Mostakbal rue radir num 9"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                  --
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                {t('created_at')} :
              </Typography>
              <TextField
              fullWidth
              gutterBottom
              variant="outlined"
              value={(user?.joinedAt?.substring(0, 10))+' '+(user?.joinedAt?.substring(11, 16))}
              InputProps={{
                readOnly: true,
              }}
            />
              <Typography variant="h6" component="h2" gutterBottom>
                {t('Email_Address')} :
              </Typography>
              <TextField
              gutterBottom
              fullWidth
              variant="outlined"
              value={user.name}
              InputProps={{
                readOnly: true,
              }}
            />
            <Typography variant="h6" component="h2" gutterBottom>
                {t('websit-url')} :
              </Typography>
              <TextField
              gutterBottom
              fullWidth
              variant="outlined"
              defaultValue="www.website.com"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
        </Container>
      </div>
      )

};

export default Profile;