
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background :'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: '#fff',
    padding: '30px 30px'
  }
})


function ButtonStyled (){
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 0
    }
  },
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[500]
    }
  }
})

function GridComponent() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xs">
          <div className="App" style={{backgroundColor: "#888"}}>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material UI
            </Typography>
            <Grid container spacing={2} justify="center">
              <Grid item xs={12} sm={6}>
                <Paper style={{ height: 75, width: '100%'}} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%'}} />
              </Grid>
              <Grid item xs={3} lg={6}>
                <Paper style={{ height: 75, width: '100%'}} />
              </Grid>
            </Grid>
            <br/>
            <ButtonStyled/>
            <br/><br/>
            <Button variant="contained" color="primary">
            Hello World
          </Button>
          <Button variant="contained" color="secondary">
            Hello World
          </Button>
          </div>
        </Container>
      </React.Fragment>
      
    </ThemeProvider>
  );
}

export default GridComponent;
