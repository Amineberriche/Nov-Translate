import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Button,  Grid,  Container, CssBaseline, CardMedia, Card, CardActionArea, CardContent, CardActions, Toolbar} from '@material-ui/core';
import { useTranslation } from "react-i18next";

import { Copyright, Facebook, Instagram, LinkedIn } from '@material-ui/icons';

import useStyles from './Style';



const Home = () => {
    const { t } = useTranslation();
    
    const classes = useStyles();
    return (
        <>
        <CssBaseline/>
        <main className={classes.background}>
            <div className={classes.container1}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4} className={classes.typography}>
                            <Grid item xs={12} sm={7}>
                                <Typography variant="h3"  align="left"  gutterBottom>
                                    {t('first-title')}
                                </Typography>
                                <Typography variant="h5" align="left"  paragraph style={{marginTop:"40px"}} >
                                    {t('first-content1')} {t('first-content2')}
                                </Typography>
                                <div className={classes.buttons}>
                                    <Grid container spacing={2} justify="left">
                                        <Grid item>
                                            <Link to="/" style={{textDecoration: "none"}}>
                                                <Button className={classes.buttons1}>
                                                    {t('first-button1')}
                                                </Button>
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                               <Link to="/login" style={{textDecoration:"none"}}>
                                                    <Button className={classes.buttons2}>
                                                        {t('first-button2')} 
                                                    </Button>
                                                </Link>
                                        </Grid>
                                    </Grid> 
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                            
                            <CardMedia
                             component="img"
                             className={classes.imghome}
                             height="100%"
                             image="/static/img/world1.png"
                             alt="home img"
                            />
                            
                            </Grid>
                        </Grid>
                        
                    </Container>
                </div>  
                <div className={classes.container2}>
                    <Container maxWidth="Lg">
                        <Typography variant="h3"  align="center"  gutterBottom>
                            {t('Solutions')}
                        </Typography>
                        <Typography variant="h5" align="center" style={{marginBottom:"5%"}} paragraph>
                            {t('Solutions-title')}
                        </Typography>
                        <Grid container spacing={6}>
                            <Grid item xs={12} sm={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    image="/static/img/project.png"
                                    title="project 2"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" align="center" component="h2">
                                        Project 1
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions  style={{justifyContent:"center"}}>
                                    <Button size="small" color="primary">
                                        {t("Post_button1")}
                                    </Button>
                                    <Button size="small" color="primary">
                                        {t("Post_button2")}
                                    </Button>
                                </CardActions>
                            </Card>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    image="/static/img/project.png"
                                    title="project 2"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" align="center" component="h2">
                                        Project 2
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{justifyContent:"center"}}>
                                    <Button size="small" color="primary">
                                        {t("Post_button1")}
                                    </Button>
                                    <Button size="small" color="primary">
                                        {t("Post_button2")}
                                    </Button>
                                </CardActions>
                            </Card>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    image="/static/img/project.png"
                                    title="project 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" align="center" component="h2">
                                        Project 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{justifyContent:"center"}}>
                                    <Button size="small" color="primary">
                                        {t("Post_button1")}
                                    </Button>
                                    <Button size="small" color="primary">
                                        {t("Post_button2")}
                                    </Button>
                                </CardActions>
                            </Card>
                            </Grid>
                        </Grid>
                    
                    </Container>
                </div>
                <div className={classes.container3}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4} className={classes.typography}>
                            <Grid item xs={12} sm={7}>
                                <Typography variant="h3"  align="left"  gutterBottom>
                                    {t("Service-title")}
                                </Typography>
                                <Typography variant="h5" align="left"  paragraph>
                                    {t("Service-content")}
                                </Typography>
                                <div className={classes.buttons}>
                                    <Grid container spacing={2} justify="left">
                                        <Grid item>
                                            <Link to="/login" style={{textDecoration: "none"}}>
                                                <Button className={classes.buttons2}>
                                                    {t("Service-button")}
                                                </Button>
                                            </Link>
                                        </Grid>
                                    </Grid> 
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                            
                            <CardMedia
                             component="img"
                             height="100%"
                             image="/static/img/responsive.png"
                             alt="home img"
                            />
                            
                            </Grid>
                        </Grid>
                        
                    </Container>
                </div>
                <div className={classes.contact_container}>
                    <Container maxWidth="sm">
                        <Typography variant="h3"  align="center"  gutterBottom>
                           {t('contact-title')}
                        </Typography>
                        <Typography variant="h5" align="center"  paragraph  gutterBottom>
                            {t('contact-content')}
                        </Typography>
                        <Grid container spacing={2} justify="center"> 
                        <a href="mailto:aberriche15@gmail.com" style={{textDecoration:"none"}}>
                            <Button
                            variant="outlined"
                            color="primary"
                            justify="center"
                            className={classes.contact_button}
                            >
                                {t('contact-button')}
                            </Button>
                         </a>
                        </Grid>
                    </Container>
                </div>
                <div className={classes.footer}>
                    <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.logoLg}>
                        <span className={classes.span}>Nov-</span>Translate
                    </Typography>
                    <Typography variant="h6" className={classes.logoSm}>
                        <span className={classes.span}>N</span>Translate
                    </Typography>
                    <div className={classes.footertext}>
                        <Typography variant="h7" className={classes.footertext}>
                          <Copyright/> ALL RIGHT ARE DESERVE | BERRICHE Amine
                        </Typography> 
                    </div>
                    <div className={classes.footericon}>
                        <Typography variant="h7" className={classes.footericon}>
                            <Facebook/>
                        </Typography>
                        <Typography variant="h7" className={classes.footericon}>
                            <LinkedIn/>
                        </Typography> 
                        <Typography variant="h7" className={classes.footericon}>
                            <Instagram/>
                        </Typography> 
                    </div>
                    </Toolbar>
                    </Container>
                </div>
        </main>
        </>
    );
}

export default Home