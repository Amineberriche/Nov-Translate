import React, { useEffect, useState } from 'react'
import { Avatar, Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from "react-i18next";
//import { withTranslation } from 'react-i18next';
//import { withStyles } from "@material-ui/core/styles";
import { Check, Panorama } from '@material-ui/icons';
import userService from '../../../services/user.service';
import useStyles from './Style';


const EditUser = () => {
   
  const { t } = useTranslation();
  const classes = useStyles();

  const [user,setUser] = useState([]);
  const {username} = useParams();

  

 const getProfil = () => {
  

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
  getProfil();
}, []);
 
 
      return (
        <div className={classes.profilcontainer}>
          <Container maxWidth="lg">
          <Grid container spacing={1} className={classes.grid}>
            <Grid item xs={12} sm={8} md={10}>
            <h1>{t('edit-profil-title')}</h1>
            </Grid>
            <Grid xs={12} sm={4} md={2}>
            <Link to="/" style={{textDecoration:"none"}}>
              <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Check/>}
              >
                {t('edit-profil-button')}
              </Button>
            </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={3} justifyContent="center">
            <Avatar alt="user image" src="/static/img/user.png" className={classes.userimg} />
            <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            />
            <label htmlFor="contained-button-file">  
            <div>
            <Button
              variant="contained"
              color="primary"
              component="span"
              className={classes.buttonimg}
              endIcon={<Panorama/>}
              >
                {t('profil-button')}
            </Button>
            </div>
            </label>
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
                placeholder={user.name}
              />
                <Typography variant="h6" component="h2" gutterBottom>
                  {t('username')} :
                </Typography>
                <TextField
                gutterBottom
                fullWidth
                variant="outlined"
                placeholder={user.username}
                
              />
              <Typography variant="h6" component="h2" gutterBottom>
                  {t('address')} :
                </Typography>
                <TextField
                gutterBottom
                fullWidth
                variant="outlined"
                placeholder="Hay EL Mostakbal rue radir num 9"
                
              />
              <Typography variant="h6" component="h2" gutterBottom>
                  {t('login-password')}
                </Typography>
                <TextField
                gutterBottom
                fullWidth
                variant="outlined"
                placeholder="********"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    ---
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  {t('created_at')} :
                </Typography>
                <TextField
                fullWidth
                gutterBottom
                variant="outlined"
                placeholder={(user?.joinedAt?.substring(0, 10))+' '+(user?.joinedAt?.substring(11, 16))}
                
              />
                <Typography variant="h6" component="h2" gutterBottom>
                    {t('Email_Address')} :
                </Typography>
                <TextField
                gutterBottom
                fullWidth
                variant="outlined"
                placeholder={user.email}
              />
              <Typography variant="h6" component="h2" gutterBottom>
                  {t('websit-url')} :
                </Typography>
                <TextField
                gutterBottom
                fullWidth
                variant="outlined"
                placeholder="www.website.com"
              />
              <Typography variant="h6" component="h2" gutterBottom>
                {t('confirm-password')}  
                </Typography>
                <TextField
                gutterBottom
                fullWidth
                placeholder="********"
                variant="outlined"
              />
            </Grid>
          </Grid>
          </Container>
        </div>
      );

};

export default EditUser; 