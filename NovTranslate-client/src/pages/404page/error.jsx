import React from 'react'
import { CardMedia, CssBaseline, Grid, Typography } from '@material-ui/core'
import { useTranslation } from "react-i18next";
import useStyles from './Style';


const Error = () =>{
    const { t } = useTranslation();
    const classes = useStyles();
  return (
    <>
    <CssBaseline/>
    <main className={classes.background}>
    <Grid container>
        <Grid item xs={12} sm={4}>
        <Typography variant="h1"  align="left"  gutterBottom className={classes.text} >
            {t('errorTitle')}
        </Typography>
        <Typography variant="h4" align="left"  paragraph  className={classes.text2} >
            {t('errorContent1')}
        </Typography>
        <Typography variant="h5" align="left"  paragraph  className={classes.text2} >
            {t('errorContent2')}
        </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
        <CardMedia
             component="img"
             className={classes.imghome}
             image="/static/img/error.png"
             alt="home img"
        />
        </Grid>
    </Grid> 
    </main>
    </>
  )
}

export default Error