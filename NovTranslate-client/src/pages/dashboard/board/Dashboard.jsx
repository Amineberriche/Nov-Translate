import React from 'react'
import { useState } from 'react';
import projectService from '../../../services/projects.service';
import { Link } from 'react-router-dom';
import { AppBar, Badge, Card, CardContent, CardMedia, Container, CssBaseline,  Divider,  Grid, Toolbar, Typography  } from "@material-ui/core";
import { Fab, Tooltip, Modal, TextField, Button, Snackbar, Select, MenuItem, FormControl, InputLabel, Input } from "@material-ui/core";
import {Add as AddIcon} from"@material-ui/icons";
//import MuiAlert from '@material-ui/lab/Alert';
import Alert from '@material-ui/lab/Alert';
import { PowerSettingsNew, Public } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useTranslation } from "react-i18next";
//import { withTranslation } from 'react-i18next';
//import { withStyles } from "@material-ui/core/styles";

import useStyles from './Style';
import Validation from './Validation';



  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 18;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  
  const langs = [
    {
      name:'en - English',
      value:'en'
    },
    {
      name:'fr - Français',
      value:'fr'
    },
    {
      name:'es - Espanol',
      value:'es'
    },
    {
      name:'hi - Hindi',
      value:'hi'
    },
    {
      name:'de - deutch',
      value:'de'
    },
    {
      name:'ru - Russian',
      value:'ru'
    },
    {
      name:'Ar - Arabe',
      value:'ar'
    },
    {
      name:'Pr - Portuguese',
      value:'pr'
    },
  ]
  

const Dashboard = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const [openModal,setOpenModal] = useState(false);
  const [snackbaropen,setSnackbaropen] = useState(false);
  const [langueSrc,setLangueSrc] = useState([]);
  const [projectName,setProjectName] = useState('');
  const [companyName,setCompanyName] = useState('');
  const [emailAdress,setEmailAdress] = useState('');
  const [projectUrl,setProjectUrl] = useState('');
  const [errors,setErrors] = useState({});

  
  const snackbarClose = () => {
    setSnackbaropen(false);
  }

  const onChangeProjectName = (event) => {
    setProjectName(event.target.value);
  }

  const onChangeCompanyName = (event) => {
    setCompanyName(event.target.value);
  }

  const onChangeEmailAdress = (event) => {
    setEmailAdress(event.target.value);
  }


  const onChangeProjectUrl = (event) => {
    setProjectUrl(event.target.value);
  }


  const onChangeLangueSrc = (event) => {
    setLangueSrc(event.target.value);
  }

  function validateEmail(emailAdress) {
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(emailAdress);
  }

  const saveProject = (e) => {
    e.preventDefault();
    setErrors(Validation(projectName,companyName,emailAdress,langueSrc));
    if (projectName.length>0 && companyName.length>0 && (validateEmail(emailAdress)) && langueSrc.length>0 ){
    const project = {projectName: projectName, companyName: companyName, emailAdress: emailAdress, projectUrl: projectUrl, langueSrc:langueSrc};
    projectService.create(project)
      .then(response => {
        setSnackbaropen(true)
        console.log('Project data added successfully', response.data);
        window.location.href = `/addcontent/${response.data.id}`;
      })
      .catch(error => {
        console.log('Something went wrong' , error);
      });
    }
       
  }


  const onClickButton = (e) => {
    e.preventDefault();
    setOpenModal(true)
  }

  const onCloseModal = ()=> {
    setOpenModal(false)
  }
    
  return (
      <>
      <CssBaseline/>
      <main>
        <AppBar className={classes.navbar}>
         <Container maxWidth="lg" >
            <Toolbar className={classes.toolbar}> 
                <Link to="/dash" style={{textDecoration:"none",color:"white"}}>
                  <Public/>
                </Link>
                <div className={classes.navtext}>
                <Grid container alignItems="center">
                <Grid item xs={6} sm={6}>
                    <Typography variant="h7" className={classes.navtext}>
                        <DashboardIcon/>
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Typography variant="h7" className={classes.navtext}>
                        {t('dash-title')}
                    </Typography>
                </Grid>
                </Grid> 
                </div>
                <div className={classes.icon}>
                    <Badge className={classes.badge}>
                        <PowerSettingsNew />
                    </Badge>
                </div>
            </Toolbar>
         </Container>
        </AppBar>
        <Tooltip title="Localize your project " aria-label="add" onClick={onClickButton}>
        <Fab color="primary" className={classes.fab}>
        <AddIcon />
        </Fab>
        </Tooltip>
        <Modal open={openModal}>
            <Container className={classes.container_form}>
                <Typography variant="h6" gutterTop>
                    {t('add_title')} 
                </Typography>
                <form className={classes.form} autoComplete="off">
                    <div className={classes.item}>
                    <TextField 
                    id="standard-basic" 
                    label={(t("Project_Name")+" *")}
                    value={projectName}
                    onChange={onChangeProjectName}
                    fullWidth
                    />
                    {errors.projectName && <p className={classes.error}>{errors.projectName}</p>}
                    </div> 
                    <div className={classes.item}>
                    <TextField 
                    id="standard-basic" 
                    label={(t("Company_Name")+" *")} 
                    value={companyName}
                    onChange={onChangeCompanyName}
                    fullWidth
                    />
                    {errors.companyName && <p className={classes.error}>{errors.companyName}</p>}
                    </div> 
                    <div className={classes.item}>
                    <TextField 
                    id="standard-basic" 
                    label={(t("Email_Address")+" *")} 
                    value={emailAdress}
                    onChange={onChangeEmailAdress}
                    fullWidth
                    />
                    {errors.emailAdress && <p className={classes.error}>{errors.emailAdress}</p>}
                    </div>
                    <div className={classes.item}>
                    <TextField 
                    id="standard-basic" 
                    label={t("Project_URL")}
                    value={projectUrl}
                    onChange={onChangeProjectUrl}
                    fullWidth
                    />
                    </div>
                    <div className={classes.item}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-name-label"> {(t("Langue")+" *")}</InputLabel>
                        {errors.langueSrc && <p className={classes.error}>{errors.langueSrc}</p>}
                        <Select
                            labelId="demo-mutiple-name-label"
                            id="demo-mutiple-name"
                            fullWidth
                            value={langueSrc}
                            onChange={onChangeLangueSrc}
                            input={<Input />}
                            MenuProps={MenuProps}
                        >
                            {langs.map(({name,value}) => (
                            <MenuItem key={name} value={value}>
                                {name}
                            </MenuItem>
                            ))}
                        </Select>
                        </FormControl>
                    </div>
                    <div className={classes.item}>
                        <Button 
                        type='submit'
                        variant="outlined"
                        color="primary"
                        style={{marginRight: 20}}
                        onClick={(e) => saveProject(e)}
                        >
                            {t("Create")}
                        </Button>
                        <Button 
                        variant="outlined"
                        color="secondary"
                        onClick={onCloseModal}
                        >
                            {t("Cancel")}
                        </Button>
                    </div>
                </form>
            </Container>
        </Modal>
        
        <Container className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={5}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                {t('dash-content-title1')}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                {t('dash-content1')}
                             </Typography> 
                             <Typography variant="h6"  gutterBottom> 
                                {t('dash-content2')}
                            </Typography>
                            <Typography variant="h6"  gutterBottom> 
                                {t('dash-content3')} 
                            </Typography>
                            <Divider variant="middle" />
                            <Typography variant="h6" color="textSecondary" gutterBottom > 
                                {t('dash-content4')}  
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                        <CardMedia
                             component="img"
                             height="100%"
                             image="/static/img/loclize.png"
                             alt="home img"
                            />
                </Grid>
            </Grid>
        </Container>
        <Snackbar 
        open={snackbaropen}
        autoHideDuration={3000}
        onClose={snackbarClose} 
        anchorOrigin= {{ vertical: 'bottom', horizontal: 'left' }}
        >
        <Alert onClose={snackbarClose} severity="success" color="info">
            {t("alert_add")}
        </Alert>
        </Snackbar>
    </main>
    </>
  )

}
export default Dashboard