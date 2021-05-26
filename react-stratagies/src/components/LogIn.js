// import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import GTranslateIcon from '@material-ui/icons/GTranslate';

import axios from 'axios';
import React, { useEffect } from 'react';
import { configure } from "queryparams";
// const { params } = configure({ visible: true, speed: 500});


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    // textAlign: 'center',
  },
  submit: {
    borderRadius: '50px',
    background: 'linear-gradient(to left, #0d47a1, #64b5f6)',
    margin: theme.spacing(2, 0, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
  a: {
    margin: theme.spacing(1),
  },
  Googlebutton: {
    // backgroundColor: '#DB4437',
    background: 'linear-gradient(to left, #c62828, #e57373)',
    borderRadius: '30px',
    margin: theme.spacing(1),
    marginLeft: '20px',
    // marginRight: '25px'
  },
  Facebookbutton: {
    textAlign: 'center',
    // backgroundColor: '#4267B2',
    background: 'linear-gradient(to left, #283593, #7986cb)',
    borderRadius: '30px',
    margin: theme.spacing(1,4),
  },
  LinkedInbutton: {
    // backgroundColor: '#0e76a8',
    background: 'linear-gradient(to left, #0d47a1, #64b5f6)',
    borderRadius: '30px',
    margin: theme.spacing(1,5.5),
  },
  GitHubbutton: {
      // backgroundColor: '#333',
      background: 'linear-gradient(to left, #212121, #757575)',
      borderRadius: '30px',
      margin: theme.spacing(1,7),
      marginRight: '15px'
  },
  
}));

export default function LogIn() {
  const classes = useStyles();
  
  // const handleSignIn = () => {}
  useEffect(() => {
    console.log(window.location.search, "hello");
    const { params } = configure({ visible: true, token: 'anand'});

  });


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            // variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            // variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            
          />
          {/* <PasswordField
            defaultValue='p4ssw0rd'
          /> */}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
            <p style={{display: 'flex', justifyContent: 'center'}}>or Sign in with</p>
            <GridList cellHeight={50} cols={5}>

            <a href="http://localhost:2020/google">
              <Button
                  variant="contained"
                  color="primary"
                  className={classes.Googlebutton}
                  startIcon={<GTranslateIcon />}
                  // onClick={handleGoogle}
              >    
              </Button>
            </a>

            <a href="http://localhost:2020/auth/facebook">
            <Button
                variant="contained"
                color="primary"
                className={classes.Facebookbutton}
                startIcon={<FacebookIcon />}
            >    
            </Button>
            </a>

            <a href="http://localhost:2020/auth/linkedin">
            <Button
                variant="contained"
                color="primary"
                className={classes.LinkedInbutton}
                startIcon={<LinkedInIcon />}
            >
            </Button>
            </a>

            <a href="http://localhost:2020/auth/github">
            <Button 
                variant="contained"
                color="primary"
                className={classes.GitHubbutton}
                startIcon={<GitHubIcon />}
            >
            </Button>
            </a>

            </GridList>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
