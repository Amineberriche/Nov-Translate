import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AppBar, Badge, Button, CardMedia, CircularProgress, Container, CssBaseline, Divider, Fab, Fade, Grid,  InputBase, LinearProgress, Paper, Popover, TextField, Toolbar, Typography  } from "@material-ui/core";
import { BugReport, CheckCircle, CloudDownload, CloudUpload, Description, Error, GTranslate, Language, NewReleases, PowerSettingsNew, Public, RemoveCircleTwoTone, Search, Visibility } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';
import { useTranslation } from "react-i18next";
//import { withTranslation } from 'react-i18next';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//import projectService from '../../../services/projects.service';
import langueService from '../../../services/langues.service';

import useStyles from './Style';


const Globalview = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    const [langue,setLangue] = useState('');
    const {id} = useParams();


    const init2 = () => {
        langueService.getlangue(id)
            .then(response => {
                console.log('Printing langue data', response.data);
                setLangue(response.data)
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
   
    useEffect(() => {
       init2();
    }, []);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [anchorEl3, setAnchorEl3] = React.useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const handlePopoverOpen2 = (event) => {
       setAnchorEl2(event.currentTarget);
    };
    
    const handlePopoverClose2 = () => {
        setAnchorEl2(null);
    };

    const handlePopoverOpen3 = (event) => {
        setAnchorEl3(event.currentTarget);
     };
     
     const handlePopoverClose3 = () => {
         setAnchorEl3(null);
     };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);  
  
  // State to store uploaded file
  const [file, setFile] = React.useState("");
  // Handles file upload event and updates state
  function handleUpload(event) {
    clearTimeout(timerRef.current);

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');
    timerRef.current = window.setTimeout(() => {
      setQuery('success');
      setFile(event.target.files[0]);
    }, 6000);
    
    // Add code here to upload file to server
    // ...
  };
  //const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState('idle');
  const timerRef = React.useRef();

  const handleClickQuery = () => {
    clearTimeout(timerRef.current);

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');
    timerRef.current = window.setTimeout(() => {
      setQuery('success');
    }, 8000);
  };

      
  return (
    <>
    <CssBaseline/>
    <main className={classes.main}>
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
                        {t("view-title")}
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
                <Grid item xs={4}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <Search />
                        </div>
                        <InputBase
                        placeholder={t("Search")}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        />
                    </div>
                    <Paper elevation={0} className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={10}>
                            <div>
                                <Typography variant="h6" gutterBottom className={classes.text}>
                                    <Language className={classes.icon}/>{langue.name} 
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={2} className={classes.iconlang}>
                            <Typography variant="h6" gutterBottom className={classes.text}>
                                <ArrowDropDownIcon/> 
                            </Typography>
                        </Grid>
                        
                        </Grid>
                        {file ?(
                        <div>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            <Description className={classes.icon}/>{file.name}
                        </Typography>
                            </div>  
                            ) : (
                            <div>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            <Description className={classes.icon}/> -----
                        </Typography>
                            </div>    
                        )}
                    </Paper>
                    <Paper elevation={0} className={classes.paper}>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            <CheckCircle style={{ color: green[500] }} className={classes.icon}/> {t("Translated")}
                        </Typography>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            <Visibility color="primary" className={classes.icon}/> {t("review_pending")}
                        </Typography>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            <BugReport style={{ color: yellow[600] }} className={classes.icon}/> {t("fuzzy")}
                        </Typography>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            <NewReleases style={{ color: orange[500] }} className={classes.icon}/> {t("warnings")}
                        </Typography>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            <NewReleases color='secondary' className={classes.icon}/> {t("errors")}
                        </Typography>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            <RemoveCircleTwoTone className={classes.icon}/> {t("untranslated")}
                        </Typography>
                        <Divider variant="middle"/>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            {t("changed_last_7_days")}
                        </Typography>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            {t("changed_last_14_days")}
                        </Typography>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            {t("changed_last_30_days")}
                        </Typography>
                        <Divider variant="middle"/>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            {t("pending_changes")}
                        </Typography>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            {t("pending_add")}
                        </Typography>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            {t("pending_delete")}
                        </Typography>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            {t("created_by_missing_API")}
                        </Typography>
                    </Paper>    
                </Grid>
                <Grid item xs={8}>
                {file ?(
                    <div>
                    <Paper elevation={0} className={classes.paper2}>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            {t("ADD_TO_translate")}
                        </Typography>
                        <TextField
                            id="outlined-full-width"
                            placeholder={t("my_first_key")}
                            className={classes.input}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-full-width"
                            placeholder={t("Tapez_you_first_value")}
                            className={classes.input}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <div className={classes.button}>
                            <Button color="primary">{t("ADD")}</Button>
                        </div>
                    </Paper>
                    <Paper elevation={0} className={classes.paper2}>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            {t("ADD_TO_translate")}
                        </Typography>
                        <TextField
                            id="outlined-full-width"
                            placeholder={t("my_first_key")}
                            className={classes.input}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-full-width"
                            placeholder={t("Tapez_you_first_value")}
                            className={classes.input}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <div className={classes.button}>
                            <Button color="primary">{t("ADD")}</Button>
                        </div>
                    </Paper>
                    <Paper elevation={0} className={classes.paper2}>
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            {t("ADD_TO_translate")}
                        </Typography>
                        <TextField
                            id="outlined-full-width"
                            placeholder={t("my_first_key")}
                            className={classes.input}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-full-width"
                            placeholder={t("Tapez_you_first_value")}
                            className={classes.input}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <div className={classes.button}>
                            <Button color="primary">{t("ADD")}</Button>
                        </div>
                    </Paper>
                    </div>
                    ) : (
                    <div>
                    <Paper elevation={0} className={classes.paper2}>
                        <Typography variant="h6" gutterBottom className={classes.text_title}>
                           Nov-Translate : localize vos documents
                        </Typography>
                        <CardMedia
                             component="img"
                             className={classes.imgupload}
                             image="/static/img/upload.png"
                             alt="uapload mark img"
                             //onClick={handleClickQuery}
                            />
                        <Typography variant="h6" gutterBottom className={classes.text}>
                            Importez  document à traduire dans un espace centralisé. Gérez le processus de traduction de tous vos documents externes depuis le tableau de bord Nov-Translate.
                        </Typography>
                        {query === 'success' ? (
                            <Typography></Typography>
                            ) : (
                            <Fade
                                in={query === 'progress'}
                                style={{
                                transitionDelay: query === 'progress' ? '800ms' : '0ms',
                                }}
                                unmountOnExit
                            >
                                <LinearProgress className={classes.progress}/>
                            </Fade>
                            )}
                        <Divider variant="middle" className={classes.divider}/>
                        <Typography variant="h6" color="textSecondary"  className={classes.text}> 
                            Pour Importez votre  fichier, cliquez sur le bouton bleu en bas de la page.  
                        </Typography>
                    </Paper>
                    </div>    
                    )}
                </Grid>
            </Grid>
        </Container>
        {file ?(
        <div>
        <Fab 
             variant="extended"
             className={classes.fab}
             aria-owns={open ? "mouse-over-popover" : undefined}
             aria-haspopup="true"
             onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose}
             >  
                 <CloudUpload className={classes.fabIcon}/>
                 
         </Fab>
         <Popover
         id="mouse-over-popover"
         className={classes.popover}
         classes={{
           paper: classes.fabText1
         }}
         open={open}
         anchorEl={anchorEl}
         anchorOrigin={{
           vertical: "center",
           horizontal: "left"
         }}
         transformOrigin={{
           vertical: "center",
           horizontal: "left"
         }}
         onClose={handlePopoverClose}
         disableRestoreFocus
       >
         <Typography>
            {t("file_exist")}<Error color='secondary' className={classes.iconfile}/> 
        </Typography>
       </Popover> 
       </div>
        
      ) : (
        <div>
        <Fab 
            variant="extended"
            className={classes.fab}
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            >  <div>
                <input accept="application/json" className={classes.inputfile} id="icon-button-file" type="file" onChange={handleUpload}/>
                <label htmlFor="icon-button-file" className={classes.labelIcon} >
                <CloudUpload
                className={classes.fabIcon} 
                onChange={handleUpload} 
                />
                </label>
                </div>
        </Fab>
        <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.fabText1
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>{t('version-button')} </Typography>
      </Popover>
      </div>
      )}
        <Fab 
        variant="extended"
        className={classes.fab2}
        aria-owns={open2 ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen2}
        onMouseLeave={handlePopoverClose2}
        >
            {/*<MenuOpen className={classes.fabIcon} />*/}
            <CloudDownload className={classes.fabIcon} />
        </Fab>
        <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.fabText2
        }}
        open={open2}
        anchorEl={anchorEl2}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        onClose={handlePopoverClose2}
        disableRestoreFocus
      >
        <Typography>Download file </Typography>
      </Popover>
        <Fab 
        variant="extended"
        className={classes.fab3}
        aria-owns={open3 ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen3}
        onMouseLeave={handlePopoverClose3}
        >
            <GTranslate className={classes.fabIcon} />
        </Fab>
        <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.fabText3
        }}
        open={open3}
        anchorEl={anchorEl3}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        onClose={handlePopoverClose3}
        disableRestoreFocus
      >
        <Typography>Google Api </Typography>
      </Popover>
    </main>
    </>
   );
};


export default Globalview; 