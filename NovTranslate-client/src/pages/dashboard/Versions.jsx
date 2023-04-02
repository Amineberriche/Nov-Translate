import React from 'react'
//import { useState } from "react";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Badge, Box, Button, Card, CardContent, CardMedia, CircularProgress, Container, CssBaseline,  Divider,  FormControl,  Grid,  Input,  InputLabel, MenuItem, Modal, Select, Snackbar, TextField, Toolbar, Typography  } from "@material-ui/core";
import { Delete, Edit, CloudUpload, Language, MoreVert, PeopleAlt, PowerSettingsNew, Public, Settings , } from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import { useTranslation } from "react-i18next";
import { withTranslation } from 'react-i18next';
import MuiAlert from '@material-ui/lab/Alert';

const styles = (theme) => ({
  navbar:{
      backgroundColor:"#3fafdd",
      marginTop: "61px",
  },
  toolbar:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    color:"white",
  },
  container:{
      padding: theme.spacing(12, 0, 6), 
      marginTop: theme.spacing(9), 
  },
  card:{
      borderRadius:"14px",
  },
  card2:{
    borderRadius:"14px",
    marginTop:theme.spacing(3),
  },
  input: {
    display: 'none',
  },
  text:{
    display:"flex",
    alignItems:"center",
    fontSize:"18px",
    color:"#6e6d6d",
    fontWeight:"400",
  },
  text2:{
    display:"flex",
    alignItems:"center",
    placeContent:"end",
    fontSize:"18px",
    fontWeight:"400",
  },
  button:{
    display:"flex",
    placeContent:"end",
  },
  containermodal:{
    padding:theme.spacing(4.5),
    width:500,
    height:246,
    backgroundColor:"white",
    borderRadius:"15px",
    position:"absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin:"auto",
    [theme.breakpoints.down("xs")]:{
        width:"100vw",
        height:"100vh",
        borderRadius:"0%",
    }
  },
  form:{
    padding:theme.spacing(2),  
  },
  item:{
    marginBottom:theme.spacing(3.5),
  },
  formControl: {
    minWidth: "100%",
    maxWidth: "100%",
  },
  box:{
    display:"flex",
    alignItems:"center",
  },
  listicon:{
    minWidth:"32px"
  },
  point: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"40px",
    height:"40px",
    //color:'#65676B',
    '&:hover': {
      borderRadius:"100%",
      border:'1px solid white',
      backgroundColor:'#f1f1f1',
      color:'#3997bd',
  },
  }

});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

class Versions extends React.Component {
  constructor(props) {
    super(props); 

        this.state={
          anchorEl1 : null,
          anchorEl2 : null,
          openModal : false,
          openModalEmail : false,
          openModalLangue : false,
          Langue: [],
  }

}
handleChange = e =>{
  e.preventDefault()
  this.setState({
    Langue: e.target.value
  });
  };
  onClickButton = e =>{
    e.preventDefault()
    this.setState({openModal : true})
  }
  
  onCloseModal = ()=>{
    this.setState({openModal : false})
  }
  
  onClickButtonEmail = e =>{
    e.preventDefault()
    this.setState({openModalEmail : true})
  }
  
  onCloseModalEmail = ()=>{
    this.setState({openModalEmail : false})
  }
  
  onClickButtonLangue = e =>{
    e.preventDefault()
    this.setState({openModalLangue : true})
  }
  
  onCloseModalLangue = ()=>{
    this.setState({openModalLangue : false})
  }
  
  handleClick1 = e => {
    e.preventDefault()
    this.setState({anchorEl1: e.currentTarget});
  };
  
  handleClose1 = ()=>{
    this.setState({anchorEl1 : null})
  }
  
  handleClick2 = e => {
    e.preventDefault()
    this.setState({anchorEl2: e.currentTarget});
  };
  
  handleClose2 = ()=>{
    this.setState({anchorEl2 : null})
  }
  
  render(){
    const { t } = this.props;
    const { classes } = this.props;
 
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
                    <Link to="/addcontent" style={{color:"white"}}> Name of the project </Link> | Versions
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
                                {t('Addcontent-Latest')}
                            </Typography>
                            </Grid>
                            <div className={classes.box}>
                            <Grid item xs={1}>
                            <Typography className={classes.point} variant="h5" component="h2" onClick={this.handleClick1}>
                              <MoreVert/>
                            </Typography>
                            <StyledMenu
                              id="customized-menu"
                              anchorEl={this.state.anchorEl1}
                              keepMounted
                              open={Boolean(this.state.anchorEl1)}
                              onClose={this.handleClose1}
                            >
                              <StyledMenuItem onClick={this.onClickButton}>
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
                            <Grid item xs={6}>
                            <Typography variant="h6" className={classes.text}>
                                {t('Addcontent-Name')} 
                             </Typography> 
                             </Grid>
                             <Grid item xs={6}>
                                <Typography variant="h6" className={classes.text2}>
                                  {t('Addcontent-Latest')}
                                </Typography> 
                             </Grid>
                             <Grid item xs={6}>
                              <Typography variant="h6" className={classes.text}>
                                 {t('version-Last-Published')}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h6" className={classes.text2}>
                                (autopublished)
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <Typography variant="h6" className={classes.text}>
                                 {t('version-Publish-trigger')}
                            </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h6" className={classes.text2}>
                                  auto
                              </Typography>
                             </Grid>
                            <Grid item xs={6}>
                            <Typography variant="h6" className={classes.text}>
                                {t('version-Publish-mode')}
                            </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h6" className={classes.text2}>
                                  standard 
                              </Typography>
                             </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" className={classes.text}  > 
                                  {t('version-Cache-duration')}
                                </Typography>
                             </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h6" className={classes.text2}>
                                  not set
                              </Typography>
                             </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Modal open={this.state.openModal}>
                    <Container className={classes.containermodal}>
                            <Typography variant="h6" gutterTop>
                                {t('add_namespace')} 
                            </Typography>
                            <form className={classes.form} autoComplete="off">
                                <div className={classes.item}>
                                <TextField 
                                id="standard-basic" 
                                label={t("version")} 
                                fullWidth
                                />
                                </div>
                                <div className={classes.item} onClick={this.onCloseModal}>
                                <Link to="/versions" style={{textDecoration:"none"}}>
                                    <Button 
                                    type='submit'
                                    variant="outlined"
                                    color="primary"
                                    style={{marginRight: 20}}
                                    //onClick={this.handleOpenAlert}
                                    >
                                        {t("Create")}
                                    </Button>
                                    </Link>
                                    <Button 
                                    variant="outlined"
                                    color="secondary"
                                    onClick={this.onCloseModal}
                                    >
                                        {t("Cancel")}
                                    </Button>
                                </div>
                            </form>
                        </Container>
                    </Modal>
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
                            <Typography className={classes.point} variant="h5" component="h2" onClick={this.handleClick2}>
                                <MoreVert/>
                            </Typography>
                            <StyledMenu
                              id="customized-menu"
                              anchorEl={this.state.anchorEl2}
                              keepMounted
                              open={Boolean(this.state.anchorEl2)}
                              onClose={this.handleClose2}
                            >
                              <StyledMenuItem onClick={this.onClickButtonLangue}>
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
                            <Typography gutterBottom variant="h6" color="textSecondary" >
                              en :
                            </Typography>
                            </Grid>
                            <Grid item xs={1}>
                            <Box position="relative" display="inline-flex">
                              <CircularProgress variant="determinate" value={100} />
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
                                <Typography variant="caption" component="div" color="textSecondary"> ..%
                                </Typography>
                              </Box>
                          </Box>
                          </Grid>
                          <Grid item xs={3}>
                          <Avatar onClick={this.onClickButtonLangue}>+</Avatar>
                          </Grid>
                          <Grid item xs={8}>
                          <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                          />
                          <label htmlFor="contained-button-file">
                          <div className={classes.button}>
                            <Button 
                              variant="outlined" 
                              color="primary" 
                              component="span"
                              className={classes.button}
                              startIcon={<CloudUpload />}
                            >
                             {t('version-button')} 
                            </Button>
                          </div>
                          </label>
                          </Grid>
                          </Grid>
                        </CardContent>
                        <Modal open={this.state.openModalLangue}>
                        <Container className={classes.containermodal}>
                        <Typography variant="h6" gutterTop>
                            {t("Add_langue")}
                        </Typography>
                        <form className={classes.form} autoComplete="off">    
                          <div className={classes.item}>
                            <FormControl className={classes.formControl}>
                                  <InputLabel id="demo-mutiple-name-label">{t("Langue")}</InputLabel>
                                  <Select
                                    labelId="demo-mutiple-name-label"
                                    id="demo-mutiple-name"
                                    multiple
                                    fullWidth
                                    value={this.state.Langue}
                                    onChange={this.handleChange}
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
                            <div className={classes.item} onClick={this.onCloseModalLangue}>
                            <Link to="/view" style={{textDecoration:"none"}}>
                                <Button 
                                variant="outlined"
                                color="primary"
                                style={{marginRight: 20}}
                                //onClick={()=> setOpenAlert(true)}
                                >
                                    {t("Create")}
                                </Button>
                                </Link>
                                <Button 
                                variant="outlined"
                                color="secondary"
                                onClick={this.onCloseModalLangue}
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
                            <Typography  variant="h5" component="h2" >
                                <MoreVert/>
                            </Typography>
                            </Grid>
                            </div>
                            <Grid item xs={12}>
                            <Divider variant="middle"/><br />
                            </Grid>
                              <Grid item xs={1}>
                                <Typography variant="h6" gutterBottom>
                                    <Avatar>A</Avatar>
                                </Typography> 
                              </Grid>
                              <Grid item xs={11}>
                                <Avatar onClick={this.onClickButtonEmail}><Settings/></Avatar>
                              </Grid>
                            </Grid>
                        </CardContent>
                        <Modal open={this.state.openModalEmail}>
                        <Container className={classes.containermodal}>
                            <Typography variant="h6" gutterTop>
                                {t('edit_title')} 
                            </Typography>
                            <form className={classes.form} autoComplete="off">
                                <div className={classes.item}>
                                <TextField 
                                id="standard-basic" 
                                label={t("Email_Address")} 
                                fullWidth
                                />
                                </div>
                                <div className={classes.item} onClick={this.onCloseModalEmail}>
                                    <Button 
                                    type='submit'
                                    variant="outlined"
                                    color="primary"
                                    style={{marginRight: 20}}
                                    //onClick={this.handleOpenAlert}
                                    >
                                        {t("Update")}
                                    </Button>
                                    <Button 
                                    variant="outlined"
                                    color="secondary"
                                    onClick={this.onCloseModalEmail}
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
        
        {/*<Snackbar 
          open={openAlert}
          autoHideDuration={2000}
          onClose={handleClose} 
          anchorOrigin= {{ vertical: 'bottom', horizontal: 'left' }}
          >
            <Alert onClose={handleClose} severity="success">
              {t("alert_add_langue")}
            </Alert>
          </Snackbar>*/}
    </main>
    </>
  )
}
}

export default withStyles(styles) (withTranslation()(Versions));  