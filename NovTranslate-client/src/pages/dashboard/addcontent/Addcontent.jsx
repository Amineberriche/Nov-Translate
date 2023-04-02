import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import projectService from '../../../services/projects.service';
import langueService from '../../../services/langues.service';
import { Link, useParams } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Badge, Box, Card, CardContent, CardMedia, CircularProgress, Container, CssBaseline,  Divider,  Grid, Toolbar, Typography, Modal, TextField, Button, Select, MenuItem, FormControl, InputLabel, Snackbar, Input, Tooltip  } from "@material-ui/core";
import { CloudUpload, Language, Delete, Edit, MoreVert, PeopleAlt, PowerSettingsNew, Public, Settings } from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import Alert from '@material-ui/lab/Alert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import { withTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import useStyles from './Style';
import Validation from './Validation';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderRadius:"14px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
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


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = -18;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const langs = [
  /*{
    name:'Langue',
    value:''
  },*/
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

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
const Addcontent = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const [anchorEl1,setAnchorEl1] = useState(null);
  const [anchorEl2,setAnchorEl2] = useState(null);
  const [openModal,setOpenModal] = useState(false);
  const [openDeleteModal,setOpenDeleteModal] = useState(false);
  const [snackbaropen,setSnackbaropen] = useState(false);
  const [snackbardeleteopen,setSnackbardeleteopen] = useState(false);
  const [openModalEmail,setOpenModalEmail] = useState(false);
  const [openModalLangue,setOpenModalLangue] = useState(false);
  const [openModalLangueAtr,setOpenModalLangueAtr] = useState(false);
  const [projectName,setProjectName] = useState('');
  const [companyName,setCompanyName] = useState('');
  const [emailAdress,setEmailAdress] = useState('');
  const [projectUrl,setProjectUrl] = useState('');
  const [createdAt,setCreatedAt] = useState('');
  const [langueSrc,setLangueSrc] = useState([]);
  const [langueFile,setLangueFile] = useState('');
  const [project,setProject] = useState([]);
  const [langues,setLangues] = useState([]); 
  const [name,setName] = useState([]);
  const {id} = useParams();
  
  const [errors,setErrors] = useState({});


  function validateEmail(emailAdress) {
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(emailAdress);
  }


  const init2 = () => {
    projectService.get(id)
        .then(response => {
            console.log('Printing project data', response.data);
            setProject(response.data)
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })
}

useEffect(() => {
   init2();
}, []);

const saveLangue = (e) => {
  e.preventDefault();
  const langues = {name: name}
  //alert(id)
  langueService.createlangue(id,langues)
      .then(response => {
          console.log('Printing langue data', response.data);
          window.location.reload(false);
      })
      .catch(error => {
        alert("no")
          console.log('Something went wrong', error);
      })
}


  const updateProject = (e) => {
    e.preventDefault();
    setErrors(Validation(projectName,companyName,emailAdress,langueSrc));
    if (projectName.length>0 && companyName.length>0 && (validateEmail(emailAdress)) && langueSrc.length>0 ){
    const project = {projectName: projectName, companyName: companyName, emailAdress: emailAdress, projectUrl: projectUrl, langueSrc:langueSrc, langueFile:langueFile, id: id ,langues:langues};
    projectService.update(project)
      .then(response => {
        setSnackbaropen(true)
        console.log('project data updated successfully', response.data);
        window.location.href = `/addcontent/${response.data.id}`;
      })
      .catch(error => {
        console.log('Something went wrong' , error);
      });

    }
       
  }


  useEffect(() => {
    projectService.get(id)
      .then(project => {
        setProjectName(project.data.projectName);
        setCompanyName(project.data.companyName);
        setEmailAdress(project.data.emailAdress);
        setProjectUrl(project.data.projectUrl);
        setCreatedAt(project.data.createdAt);
        setLangueSrc(project.data.langueSrc);
        setLangueFile(project.data.langueFile);
        setLangues(project.data.langues);
      })
      .catch(error => {
        console.log('Something went wrong' , error);
      });
  }, [])


  const handleDelete = (id) => {
    console.log('Printing id', id);
    projectService.remove(id)
        .then(response => {
            setSnackbardeleteopen(true)
            console.log('project deleted successfully' , response.data);
            window.location.href = "/dash";
            
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })
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

const onChangeLangueFile = (event) => {
  setLangueFile(event.target.files[0]);
}

const onChangeName = (event) => {
  setName(event.target.value);
}


const snackbarClose = () => {
  setSnackbaropen(false);
}
const snackbardeleteClose = () => {
  setSnackbardeleteopen(false);
}


const onClickButton = (e) => {
  e.preventDefault();
  setAnchorEl1( null);
  setOpenModal(true)
}

const onCloseModal = ()=> {
  setOpenModal(false)
}

const onClickButtonDelete = (e) => {
  e.preventDefault();
  setAnchorEl1( null);
  setOpenDeleteModal(true)
}

const onCloseDeleteModal = ()=> {
  setOpenDeleteModal(false)
}

const onClickButtonEmail = (e) =>{
  e.preventDefault();
  setOpenModalEmail(true);
}

const onCloseModalEmail = () =>{
  setOpenModalEmail(false);
}

const onClickButtonLangue = (e) =>{
  e.preventDefault();
  setAnchorEl2( null);
  setOpenModalLangue(true);
}

const onCloseModalLangue = () =>{
  setOpenModalLangue(false);
}

const onClickButtonLangueAtr = (e) =>{
  e.preventDefault();
  setOpenModalLangueAtr(true);
}

const onCloseModalLangueAtr = () =>{
  setOpenModalLangueAtr(false);
}


const handleClick1 = (e) => {
  e.preventDefault();
  setAnchorEl1(e.currentTarget);
}

const handleClose1 = () =>{
  setAnchorEl1(null);
}

const handleClick2 = (e) => {
  e.preventDefault();
  setAnchorEl2(e.currentTarget);
};

const handleClose2 = ()=>{
  setAnchorEl2( null);
};
/*
  // State to store uploaded file
  const [file, setFile] = React.useState("");
  // Handles file upload event and updates state
  function handleUpload(event) {
      setFile(event.target.files[0]);
    // Add code here to upload file to server
    // ...
  };
*/
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 4));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);


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
                <Grid item xs={12} sm={12}>
                    <Typography variant="h7" className={classes.navtext}>
                       {projectName} 
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
        <Container className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                    <Card className={classes.card}>
                        <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={11}>
                            <Typography gutterBottom variant="h5" component="h2" >
                              {t("Name-of-the-Project")}
                            </Typography>
                            </Grid>
                            <div className={classes.box}>
                            <Grid item xs={1}>
                            <Typography className={classes.point} variant="h5" component="h2" onClick={handleClick1}>
                                <MoreVert/>
                            </Typography>
                            <StyledMenu
                              id="customized-menu"
                              anchorEl={anchorEl1}
                              keepMounted
                              open={Boolean(anchorEl1)}
                              onClose={handleClose1}
                            >
                              <StyledMenuItem 
                              onClick={onClickButton}>
                                <ListItemIcon className={classes.listicon}>
                                  <Edit fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={t("Update")}/>
                              </StyledMenuItem>
                              <StyledMenuItem 
                              onClick={onClickButtonDelete}>
                                <ListItemIcon className={classes.listicon}>
                                  <Delete fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={t("Delete")}/>
                              </StyledMenuItem>
                            </StyledMenu>
                            </Grid>
                            </div>
                            <Grid item xs={6}>
                            <Typography variant="h6" className={classes.text}>
                                {t('Addcontent-Name')}
                             </Typography> 
                             </Grid>
                             <Grid item xs={6}>
                                <Typography variant="h6" className={classes.text2}>
                                    {projectName} 
                                </Typography> 
                             </Grid>
                             <Grid item xs={6}>
                              <Typography variant="h6" className={classes.text}>
                                  {t('Addcontent-Company')}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h6" className={classes.text2}>
                                  {companyName} 
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <Typography variant="h6" className={classes.text}>
                              {t('Addcontent-ProjectID')}
                            </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h6" className={classes.text2}>
                                {id}
                              </Typography>
                             </Grid>
                            <Grid item xs={6}>
                            <Typography variant="h6" className={classes.text}>
                                {t('Addcontent-Created')}
                            </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h6" className={classes.text2}>
                                  {createdAt.substring(0, 10)} {createdAt.substring(11, 16)}  
                              </Typography>
                             </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" className={classes.text}  > 
                                  {t('Addcontent-language')}
                                </Typography>
                             </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h6" className={classes.text2}>
                                {langueSrc}
                              </Typography>
                             </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Modal open={openModal}>
                        <Container className={classes.container_form}>
                            <Typography variant="h6" gutterTop>
                                {t('edit_title')} 
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
                                    <InputLabel id="demo-mutiple-name-label"> {(t("Langue_source")+" *")}</InputLabel>
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
                                    onClick={(e) => updateProject(e)}
                                    >
                                        {t("Create")}
                                    </Button>
                                    <Button 
                                    variant="outlined"
                                    color="secondary"
                                    //onClick={refreshPage}
                                    onClick={onCloseModal}
                                    >
                                        {t("Cancel")}
                                    </Button>
                                </div>
                            </form>
                        </Container>
                    </Modal>
                    <Dialog 
                    open={openDeleteModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClick={onCloseDeleteModal}
                    //aria-labelledby="alert-dialog-slide-title"
                    //aria-describedby="alert-dialog-slide-description"
                    >
                        
                        <DialogTitle >
                          {t("delete_title")}
                          <CardMedia
                             component="img"
                             className={classes.deleteimg}
                             image="/static/img/mark.png"
                             alt="exclamation mark img"
                            /></DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                          {t("delete_content")}
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions >
                        <div className={classes.deleteButtons}>  
                                <Button 
                                //variant="outlined"
                                color="primary"
                                style={{marginRight: 20}}
                                onClick={onCloseModalLangue}
                                >
                                  {t("Cancel")}
                                </Button>
                                <Button 
                                //variant="contained"
                                color="secondary"
                                onClick={(e) => {handleDelete(id)}}
                                >
                                  {t("Delete")}  
                                </Button>
                        </div>
                      </DialogActions> 
                    </Dialog>
                    <Card className={classes.card2}>
                        <CardContent>
                        <Grid container spacing={1}>
                        <Grid item xs={11}>
                            <Typography gutterBottom variant="h5" component="h2" >
                              <Language/> {t('version-Languages')}
                            </Typography>
                        </Grid>
                        <div className={classes.box}>
                            <Grid item xs={1}>
                            <Typography className={classes.point} variant="h5" component="h2" onClick={handleClick2}>
                                <MoreVert/>
                            </Typography>
                            <StyledMenu
                              id="customized-menu"
                              anchorEl={anchorEl2}
                              keepMounted
                              open={Boolean(anchorEl2)}
                              onClose={handleClose2}
                            >
                              <StyledMenuItem onClick={onClickButtonLangue}>
                                <ListItemIcon className={classes.listicon}>
                                  <Edit fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={t("Update")}/>
                              </StyledMenuItem>
                              <StyledMenuItem>
                                <ListItemIcon className={classes.listicon}>
                                  <Delete fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={t("Delete")}/>
                              </StyledMenuItem>
                            </StyledMenu>
                            </Grid>
                            </div>
                            <Grid item xs={12}>
                            <Divider variant="middle"/><br />
                            </Grid>
                            <Grid item xs={2}>
                            <Typography gutterBottom variant="h7" color="textSecondary" >
                              {t('Addcontent-language')}
                            </Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography gutterBottom variant="h7" color="textSecondary" >
                              {t("langue-translate")}
                            </Typography>
                            </Grid>
                            <Grid item xs={7}>
                            <Typography gutterBottom variant="h7" color="textSecondary" >
                              
                            </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.box}>
                            <Typography gutterBottom variant="h7" color="textSecondary" className={classes.lngsrc} >
                               {langueSrc} 
                            </Typography>
                            {langueFile ? (
                            <div>
                            <CircularProgressWithLabel value={progress} />
                          </div>
                            ) : (
                          <div>
                          <Box position="relative" display="inline-flex">
                              <CircularProgress variant="determinate" value={100} className={classes.progress}/>
                              <Box
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <Typography variant="caption" component="div" color="textSecondary"> ..%</Typography>
                              </Box>
                          </Box>
                          </div>
                          )}
                          <Divider orientation="vertical" className={classes.divider} />
                          </Grid>
                          <Grid item xs={3} className={classes.box}>
                            {project.langues &&
                            project.langues.map((langue,index)=>
                          <div className={classes.box}>
                          <Link style={{textDecoration:"none"}}to={`/editlangue/${langue.id}`}>
                          <Tooltip title={t("Update")} arrow >
                            <Typography 
                              className={classes.point}
                              gutterBottom
                              variant="h7"
                              color="textSecondary"
                            >
                               {langue.name} 
                            </Typography>
                          </Tooltip>
                          </Link>
                            <Link style={{textDecoration:"none"}}to={`/view/${langue.id}`}>
                            <Box position="relative" display="inline-flex">
                              <CircularProgress variant="determinate" value={100} className={classes.progress} />
                              <Box
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <Typography variant="caption" component="div" color="textSecondary"> ..%</Typography>
                              </Box>
                          </Box>
                          </Link>
                          </div>
                         )}
                          <Avatar className={classes.avatarbox} onClick={onClickButtonLangueAtr}>+</Avatar>
                          </Grid>
                          <Grid item xs={7} className={classes.button}>
                          <input
                            onChange={onChangeLangueFile}
                            accept="application/json"
                            className={classes.input}
                            id="contained-button-file"
                            type="file"
                            //onClick={(e) => updateProject(e)}
                          />
                          <label htmlFor="contained-button-file" >
                          {langueFile ?(
                          <div className={classes.button}>
                          <Button 
                            onChange={onChangeLangueFile}
                            variant="outlined" 
                            color="primary" 
                            component="span"
                            className={classes.button}
                            startIcon={<CloudUpload />}
                          >
                           {langueFile.name}
                          </Button>
                        </div>
                            ) : (
                          <div className={classes.button}>
                            <Button 
                              onChange={onChangeLangueFile}
                              variant="outlined" 
                              color="primary" 
                              component="span"
                              className={classes.button}
                              startIcon={<CloudUpload />}
                            >
                             {t('version-button')} 
                            </Button>
                          </div>
                        )}
                          </label>
                          </Grid>
                          </Grid>
                        </CardContent>
                        <Modal open={openModalLangue}>
                        <Container className={classes.containermodal}>
                        <Typography variant="h6" gutterTop>
                            {t('edit_title')} 
                        </Typography>
                        <form className={classes.form} autoComplete="off">    
                          <div className={classes.item}>
                            <FormControl className={classes.formControl}>
                                  <InputLabel id="demo-mutiple-name-label">{t("Langue_source")}</InputLabel>
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
                            <div className={classes.item} onClick={onCloseModalLangue}>
                            <Link to="/view" style={{textDecoration:"none"}}>
                                <Button 
                                variant="outlined"
                                color="primary"
                                style={{marginRight: 20}}
                                onClick={(e) => updateProject(e)}
                                >
                                    {t("Create")}
                                </Button>
                                </Link>
                                <Button 
                                variant="outlined"
                                color="secondary"
                                //onClick={refreshPage}
                                onClick={onCloseModalLangue}
                                >
                                    {t("Cancel")}
                                </Button>
                            </div>
                        </form>
                      </Container>
                    </Modal>
                    <Modal open={openModalLangueAtr}>
                        <Container className={classes.containermodal}>
                        <Typography variant="h6" gutterTop>
                            {t("Add_language_to_translate")}
                        </Typography>
                        <form className={classes.form} autoComplete="off">    
                          <div className={classes.item}>
                            <FormControl className={classes.formControl}>
                                  <InputLabel id="demo-mutiple-name-label">{t("Language_to_translate")}</InputLabel>
                                  <Select
                                    labelId="demo-mutiple-name-label"
                                    id="demo-mutiple-name"
                                    fullWidth
                                    value={langues.name}
                                    onChange={onChangeName}
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
                            <div className={classes.item} onClick={onCloseModalLangueAtr}>
                                <Button 
                                variant="outlined"
                                color="primary"
                                style={{marginRight: 20}}
                                onClick={(e) => saveLangue(e)}
                                >
                                    {t("Create")}
                                </Button>
                                <Button 
                                variant="outlined"
                                color="secondary"
                                //onClick={refreshPage}
                                onClick={onCloseModalLangueAtr}
                                >
                                    {t("Cancel")}
                                </Button>
                            </div>
                        </form>
                      </Container>
                    </Modal>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <Card className={classes.card}>
                        <CardContent> 
                          <Grid container spacing={1}>
                          <Grid item xs={11}>
                            <Typography gutterBottom variant="h5" component="h2" >
                              <PeopleAlt/> {t('Addcontent-Users')}
                            </Typography>
                            </Grid>
                            <div className={classes.box}>
                            <Grid item xs={1}>
                            <Typography className={classes.point} variant="h5" component="h2" >
                                <MoreVert/>
                            </Typography>
                            </Grid>
                            </div>
                            <Grid item xs={12}>
                            <Divider variant="middle"/><br />
                            </Grid>
                              <Grid item xs={1}>
                                <Typography variant="h6" gutterBottom>
                                    <Avatar >{emailAdress.substring(0,1).toUpperCase()}</Avatar>
                                </Typography> 
                              </Grid>
                              <Grid item xs={11}>
                                <Avatar onClick={onClickButtonEmail}><Settings/></Avatar>
                              </Grid>
                            </Grid>
                        </CardContent>
                        <Modal open={openModalEmail}>
                        <Container className={classes.containermodal}>
                            <Typography variant="h6" gutterTop>
                                {t('edit_title')} 
                            </Typography>
                            <form className={classes.form} autoComplete="off">
                                <div className={classes.item}>
                                <TextField 
                                id="standard-basic" 
                                label={t("Email_Address")} 
                                value={emailAdress}
                                onChange={onChangeEmailAdress}
                                fullWidth
                                />
                                {errors.emailAdress && <p className={classes.error}>{errors.emailAdress}</p>}
                                </div>
                                <div className={classes.item}>
                                    <Button 
                                    type='submit'
                                    variant="outlined"
                                    color="primary"
                                    style={{marginRight: 20}}
                                    onClick={(e) => updateProject(e)}
                                    >
                                        {t("Update")}
                                    </Button>
                                    <Button 
                                    variant="outlined"
                                    color="secondary"
                                    //onClick={refreshPage}
                                    onClick={onCloseModalEmail}
                                    >
                                        {t("Cancel")}
                                    </Button>
                                </div>
                            </form>
                        </Container>
                    </Modal>
                    </Card>
                        <CardMedia
                             component="img"
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
        <Alert onClose={snackbarClose} severity="success" color="success">
          {t("alert_update")}
        </Alert>
        </Snackbar>
        <Snackbar 
        open={snackbardeleteopen}
        autoHideDuration={4000}
        onClose={snackbardeleteClose} 
        anchorOrigin= {{ vertical: 'bottom', horizontal: 'left' }}
        >
        <Alert onClose={snackbardeleteClose} severity="success" color="success">
          the project has bein deleted
        </Alert>
        </Snackbar>
    </main>
    </>
  )

}


export default Addcontent