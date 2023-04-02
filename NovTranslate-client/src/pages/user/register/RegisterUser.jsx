import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Container, CssBaseline, Divider, Grid,TextField, Typography, InputAdornment } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import { AccountCircle, Facebook, Visibility, VisibilityOff } from '@material-ui/icons';
import Form from 'react-validation/build/form';
import AuthService from '../../../services/auth.service';
import userService from '../../../services/user.service';
import { Alert } from '@material-ui/lab';
import useStyles from "./Style";
import Validation from './Validation';




const Registeruser = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);
    const [confirmshowPassword,setConfirmshowPassword] = useState(false);
    const [confirmpassword,setConfirmpassword] = useState("");
    const [successful,setSuccessful] = useState(false);
    const [message,setMessage] = useState("");
    const [errors,setErrors] = useState({});           

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onChangeConfirmpassword = (e) => {
        setConfirmpassword(e.target.value);
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleClickConfirmshowPassword = () => {
        setConfirmshowPassword(!confirmshowPassword);
    };

    const ckeckUsername = () => {
  

        userService.ckeckUsername()
            .then(response => {
                console.log('username alredy existe', response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    useEffect(() => {
    ckeckUsername();
   }, []);
    
   const ckeckEmail = () => {
  

    userService.ckeckEmail()
        .then(response => {
            console.log('email alredy existe', response.data);
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })
    }
    useEffect(() => {
    ckeckEmail();
    }, []);

    function validateEmail(emailAdress) {
        var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return re.test(emailAdress);
    }

    const handleRegister = (e) => {
            e.preventDefault();
            setMessage("");
            setSuccessful(false);
            setErrors(Validation(name,username,email,password,confirmpassword));


        if ( name.length>0 && username.length>0 && (validateEmail(email)) && password==confirmpassword) {
            AuthService.register(
                name,
                username,
                email,
                password
            ).then(
                response => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                    
                },
                error => {
                    alert("no")
                    const resMessage = 
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                        setSuccessful(false);
                        setMessage(resMessage);
                    
                }
            );
        }
    }
        return (
            <>
            <CssBaseline/>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Typography variant="h3"  align="center"  gutterBottom>
                    {t('register-title')}
                    </Typography>
                    <Card  variant="outlined">
                    <CardContent>
                    <Grid container spacing={2} justify="center">   
                    <Grid item>
                        <Button
                        variant="outlined"
                        color="primary"
                        justify="center"
                        
                        className={classes.buttonG}
                        startIcon={<AccountCircle />}
                        >
                            {t('login-Gbutton')} 
                        </Button>
                        </Grid> 
                    <Grid item>
                    <Button
                        variant="outlined"
                        color="primary"
                        justify="center"
                        
                        className={classes.buttonF}
                        startIcon={<Facebook />}
                        >
                        {t('login-Fbutton')} 
                        </Button> 
                    </Grid>
                    </Grid>
                    <Grid container spacing={1} justify="center" className={classes.or}> 
                        <Grid item xs={5} sm={5}>
                                <Divider variant="middle" />
                            </Grid>
                            <Grid item xs={1} sm={1} align="center">
                                Or
                            </Grid>
                            <Grid item xs={5} sm={5}>
                                <Divider variant="middle" />
                            </Grid>
                    </Grid>
                    <div className={classes.formulaire}>
                    <Form 
                        onSubmit={(e) => handleRegister(e)}
                    >
                        {!successful && (
                        <div>
                    <Typography className={classes.title}  color="textSecondary" gutterBottom>
                        {t('Full-name')} * :
                    </Typography>
                    <TextField
                    id="outlined-basic"
                    placeholder={t('Full-name-label')}
                    fullWidth
                    gutterBottom
                    variant="outlined"
                    value={name}
                    onChange={onChangeName}
                    />
                    {errors.name && <p className={classes.error}>{errors.name}</p>}
                    <Typography className={classes.title}  color="textSecondary" gutterBottom>
                        {t('Username')} * :
                    </Typography>
                    <TextField
                    id="outlined-basic"
                    placeholder={t('Username-label')}
                    fullWidth
                    gutterBottom
                    variant="outlined"
                    value={username}
                    onChange={onChangeUsername}
                    />
                    {errors.username && <p className={classes.error}>{errors.username}</p>}
                    <Typography className={classes.title}  color="textSecondary" gutterBottom>
                        {t('Email_Address')} * :
                    </Typography>
                    <TextField
                    id="outlined-basic"
                    placeholder={t('email-label')}
                    fullWidth
                    gutterBottom
                    variant="outlined"
                    value={email}
                    onChange={onChangeEmail}
                    />
                    {errors.email && <p className={classes.error}>{errors.email}</p>}
                    <Typography className={classes.title}  color="textSecondary" gutterBottom>
                    {t('login-password')} * :
                    </Typography>
                    <TextField
                    id="outlined-basic"
                    placeholder={t('password-label')}
                    fullWidth
                    gutterBottom
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    value={password}
                    onChange={onChangePassword}
                    />
                    <Grid container>
                    <Grid item xs={12}  className={classes.gridbutton}>
                    <Button
                    className={classes.showpassword}
                    onClick={handleClickShowPassword}
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </Button>
                    </Grid>
                    </Grid>
                    {errors.password && <p className={classes.error}>{errors.password}</p>}
                    <Typography className={classes.title}  color="textSecondary" gutterBottom>
                    {t('confirm-password')} * :
                    </Typography>
                    <TextField
                    id="outlined-basic" 
                    placeholder= {t('confirm-password-label')}
                    fullWidth
                    gutterBottom
                    type={confirmshowPassword ? 'text' : 'password'}
                    variant="outlined"
                    value={confirmpassword}
                    onChange={onChangeConfirmpassword}
                    />
                    <Grid container>
                    <Grid item xs={12}  className={classes.gridbutton}>
                    <Button
                    className={classes.showpassword}
                    onClick={handleClickConfirmshowPassword}
                    >
                        {confirmshowPassword ? <Visibility /> : <VisibilityOff />}
                    </Button>
                    </Grid>
                    </Grid>
                    {errors.confirmpassword && <p className={classes.error}>{errors.confirmpassword}</p>}
                    <Grid container spacing={2} justify="center">   
                    <Button
                    variant="outlined"
                    color="primary"
                    justify="center"
                    className={classes.buttonLogin}
                    type="submit"
                    >
                        {t('register-button')}
                    </Button> 
                    </Grid>
                    </div>
                    )}

                    {message && (
                        <div className="form-group">
                        <Alert severity={
                            successful
                                ? "success"
                                : "error"
                            }
                            role="alert"
                            >
                                {message}
                        </Alert>  
                        </div>
                    )}
                    </Form>
                    </div>
                    </CardContent>
                    </Card>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {t('register-content1')}  <Link to="/login"> {t('register-content2')}</Link>
                    </Typography>
                </Container>
            </div>
            </>
        )
    }


export default Registeruser; 