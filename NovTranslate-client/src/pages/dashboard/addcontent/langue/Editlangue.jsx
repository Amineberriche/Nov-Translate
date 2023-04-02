import React, { useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom';
import langueService from '../../../../services/langues.service';
import { AppBar, Badge, Card, CardContent, CardMedia, Container, CssBaseline,  Divider,  Grid, Toolbar, Typography  } from "@material-ui/core";
import { Fab, Tooltip, Modal, TextField, Button, Snackbar, Select, MenuItem, FormControl, InputLabel, Input } from "@material-ui/core";
import { PowerSettingsNew, Public, DeleteForever } from '@material-ui/icons';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useTranslation } from "react-i18next";
import useStyles from './Style';
import { withStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ITEM_HEIGHT = 30;
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

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -10,
      top: 5,
      //border: `1px solid ${theme.palette.background.paper}`,
      //backgroundColor:'#f1f1f1',
      padding: '6px 0px 6px 0px',
    },
  }))(Badge);
  

function Editlangue() {
    const { t } = useTranslation();
    const classes = useStyles();

    //const [langue,setLangue] = useState('');
    const [name,setName] = useState([]);
    const [snackbaropen,setSnackbaropen] = useState(false);
    const [openDeleteModal,setOpenDeleteModal] = useState(false);
    const {id} = useParams();


    const onChangeName = (event) => {
      setName(event.target.value);
    }

    const snackbarClose = () => {
      setSnackbaropen(false);
    }

    const onClickButtonDelete = (e) => {
      e.preventDefault();
      setOpenDeleteModal(true)
    }
    
    const onCloseDeleteModal = ()=> {
      setOpenDeleteModal(false)
    }

    useEffect(() => {
      langueService.getlangue(id)
        .then(langue => {
          setName(langue.data.name);
        })
        .catch(error => {
          console.log('Something went wrong' , error);
        });
    }, [])

    const update = (e) => {
      e.preventDefault();
      const langue = {name: name ,id: id};
      langueService.updatelangue(langue)
        .then(response => {
          setSnackbaropen(true)
          console.log('langue data updated successfully', response.data);
          window.location.reload();
        })
        .catch(error => {
          console.log('Something went wrong' , error);
        });
         
    }

    const langueDelete = (id) => {
      alert('Printing id', id);
      langueService.removelangue(id)
          .then(response => {
              console.log('langue deleted successfully' , response.data);
              window.location.href = "/dash";
              
          })
          .catch(error => {
              console.log('Something went wrong', error);
          })
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
                <Grid item xs={12} sm={12}>
                    <Typography variant="h7" className={classes.navtext}>
                        Edit language | Page
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
                <Grid item xs={12} sm={12} md={5}>
                <Card className={classes.card}>
                        <CardContent>
                        <Grid container spacing={3}>
                        <Grid item xs={6} 
                              container
                              alignItems="center"
                              >
                              <Typography variant="h6" className={classes.navtext} >
                                  {t("Language_to_translate")}
                             </Typography> 
                          </Grid>
                        <Grid item xs={6} 
                              container
                              justifyContent="flex-end"
                              alignItems="center"
                              >
                              <Typography variant="h6" className={classes.text2} color="textSecondary">
                                {name}
                              </Typography>  
                          </Grid>
                          </Grid> 
                        </CardContent>
                    </Card>
                    <Card className={classes.card2}>
                        <CardContent>
                            <Typography variant="h6" className={classes.navtext}  >
                                {t("Edit_language_to_translate")} :
                             </Typography> 
                             <form className={classes.form} autoComplete="off">    
                          <div className={classes.item}>
                            <FormControl className={classes.formControl}>
                                  <InputLabel id="demo-mutiple-name-label">{t("Language_to_translate")}</InputLabel>
                                  <Select
                                    labelId="demo-mutiple-name-label"
                                    id="demo-mutiple-name"
                                    fullWidth
                                    value={name}
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
                            <div className={classes.item}>
                                <Button 
                                variant="outlined"
                                color="primary"
                                style={{marginRight: 20}}
                                onClick={(e) => update(e)}
                                >
                                    {t("Update")}
                                </Button>
                                <Button 
                                variant="outlined"
                                color="secondary"
                                >
                                    {t("Cancel")}
                                </Button>
                            </div>
                            </form>
                        </CardContent>
                    </Card>
                    <Card className={classes.card2}>
                        <CardContent>
                        <Grid container spacing={3}>
                        <Grid item xs={12}>
                              <Typography variant="h6" className={classes.navtext}> 
                                {t("Delete_language_to_translate")}
                              </Typography>
                        </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h6" className={classes.text2} color="textSecondary">
                                {name}
                              </Typography>
                            </Grid> 
                            <Grid item xs={6} 
                              container
                              justifyContent="flex-end"
                              alignItems="center"
                              >
                                <Button 
                                variant="outlined"
                                color="secondary"
                                startIcon={<DeleteForever />}
                                onClick={onClickButtonDelete}
                                >
                                    {t("Delete")}
                                </Button>
                          </Grid>
                          </Grid>
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
                                >
                                  {t("Cancel")}
                                </Button>
                                <Button 
                                //variant="contained"
                                color="secondary"
                                onClick={(e) => {langueDelete(id)}}
                                >
                                  {t("Delete")}  
                                </Button>
                        </div>
                      </DialogActions> 
                    </Dialog>
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
    </main>
    </>
  )
}

export default Editlangue