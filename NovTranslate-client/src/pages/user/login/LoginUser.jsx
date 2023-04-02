import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Container, CssBaseline, Divider, Grid, TextField, Typography } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import { AccountCircle, Facebook, Visibility, VisibilityOff } from '@material-ui/icons';
import Form from "react-validation/build/form";
import AuthService from '../../../services/auth.service';
import { Alert } from '@material-ui/lab';
import useStyles from "./Style";
import Validation from './Validation';






const LoginUser = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    const [usernameOrEmail,setUsernameOrEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState("");
    const [errors,setErrors] = useState({});

  
  const onChangeUsernameOrEmail = (e) => {
      setUsernameOrEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleClickShowPassword = () => {
    setShowPassword( !showPassword);
  };


  const handleLogin = (e) => {
      e.preventDefault();
      setMessage("");
      setLoading(true);
      setErrors(Validation(usernameOrEmail,password));

      //this.form.validateAll();

      if (usernameOrEmail.length>0 && password.length>0){
          AuthService.login(usernameOrEmail,password).then(
              () => {
                  window.location.href = "/dash";
                  //this.props.history.push("/profile");
                  
              },
              error => {
                  const resMessage = 
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                  
                    setLoading(false);
                    setMessage(resMessage);

              }
          );
      } else {
          setLoading(false);
      }
  }

        return (
            <>
            <CssBaseline/>
            <div className={classes.container}>
                <Container maxWidth="sm">

                    <Typography variant="h3"  align="center"  gutterBottom>
                        {t('login-title')}
                    </Typography>
                    <Typography variant="h5" align="center"  paragraph>
                        {t('login-content')}
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
                        onSubmit={(e) => handleLogin(e)}
                    >
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {t('username-or-email')} *:
                    </Typography>
                    <TextField
                    value= {usernameOrEmail}
                    onChange={onChangeUsernameOrEmail}
                    placeholder={t("username-or-email-label")}
                    fullWidth
                    gutterBottom
                    variant="outlined"
                    />
                    {errors.usernameOrEmail && <p className={classes.error}>{errors.usernameOrEmail}</p>}
                    <Typography className={classes.title}  color="textSecondary" gutterBottom>
                        {t('login-password')}
                    </Typography>
                    <TextField
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={onChangePassword}
                    placeholder={t("password-label")}
                    fullWidth
                    gutterBottom
                    variant="outlined"
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
                    <Grid container spacing={2} justify="center">   
                    <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    justify="center"
                    onclick="window.location.href='www.google.com'"
                    disabled={loading}
                    className={classes.buttonLogin}
                    >
                        {loading && (
                            <span></span>
                        )}
                        {t('login-button')} 
                    </Button>
                    </Grid>
                    {message && (
                        <div className="form-group">
                        <Alert severity="error" role="alert">
                                {message}
                        </Alert>  
                        </div>
                    )}
                    </Form>
                    </div>
                    </CardContent>
                    </Card>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {t('login-content2')} <Link to="/register"> {t('login-content3')}</Link>
                    </Typography>
                </Container>
            </div>
            </>
        )
    
}

export default LoginUser; 