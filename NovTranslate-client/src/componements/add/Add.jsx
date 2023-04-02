import React  from 'react';
import { Link } from 'react-router-dom';
import { Fab, Tooltip, makeStyles, Modal, Container, TextField, Button, Snackbar, Typography, Select, MenuItem, FormControl, InputLabel, Input } from "@material-ui/core";
import {Add as AddIcon} from"@material-ui/icons";
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) =>({
  fab: {
      position: "fixed",
      bottom: 20,
      right: 20,
  },
  container_form:{
    padding:theme.spacing(4.5),
    width:500,
    height:550,
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
}));

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


const Add = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  
  const [Langue, setLangue] = React.useState([]);

  const handleChange = (event) => {
    setLangue(event.target.value);
  };
  const [open,setOpen] = useState(false);
  const [openAlert,setOpenAlert] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  return  (
    <>
    <Tooltip title="Localize your project " aria-label="add" onClick={() => setOpen(true)}>
    <Fab color="primary" className={classes.fab}>
    <AddIcon />
    </Fab>
    </Tooltip>
    <Modal open={open}>
        <Container className={classes.container_form}>
            <Typography variant="h6" gutterTop>
                {t('add_title')} 
            </Typography>
            <form className={classes.form} autoComplete="off">
                <div className={classes.item}>
                <TextField 
                id="standard-basic" 
                label={t("Project_Name")}
                fullWidth
                />
                </div> 
                <div className={classes.item}>
                <TextField 
                id="standard-basic" 
                label={t("Company_Name")} 
                fullWidth
                />
                </div> 
                <div className={classes.item}>
                <TextField 
                id="standard-basic" 
                label={t("Email_Address")} 
                fullWidth
                />
                </div>
                <div className={classes.item}>
                <TextField 
                id="standard-basic" 
                label={t("Project_URL")}
                fullWidth
                />
                </div>
                <div className={classes.item}>
                <FormControl className={classes.formControl}>
                      <InputLabel id="demo-mutiple-name-label"> {t("Langue")}</InputLabel>
                      <Select
                        labelId="demo-mutiple-name-label"
                        id="demo-mutiple-name"
                        multiple
                        fullWidth
                        value={Langue}
                        onChange={handleChange}
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
                <div className={classes.item} onClick={()=> setOpen(false)}>
                  <Link to="/addcontent" style={{textDecoration:"none"}}>
                    <Button 
                     variant="outlined"
                     color="primary"
                     style={{marginRight: 20}}
                     onClick={()=> setOpenAlert(true)}
                     >
                        {t("Create")}
                    </Button>
                    </Link>
                    <Button 
                     variant="outlined"
                     color="secondary"
                     onClick={()=> setOpen(false)}
                     >
                        {t("Cancel")}
                    </Button>
                </div>
            </form>
        </Container>
    </Modal>
    <Snackbar 
     open={openAlert}
     autoHideDuration={2000}
     onClose={handleClose} 
     anchorOrigin= {{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert onClose={handleClose} severity="success">
        {t("alert_add")}
      </Alert>
    </Snackbar>
    </>
  );
  
};

export default Add;