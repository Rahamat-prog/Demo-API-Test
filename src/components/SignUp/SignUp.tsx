import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';
import{ useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const theme = createTheme();

 function SignUp() {
  //data declare by abd
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //till here
  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // })

  const handleSubmit = (e:any) => {
    e.preventDefault();
    //try to use alert for input invail gmail id and password
  //   if (email === '' || password === '') {
  //     setError(true);
  // } else {
  //     setError(false);
  //     axios.post('./login',{
  //         email,password
  //     }).then(function (res) {
  //          console.log(res);
  //         if(res.request.status === 200){
  //            setCredentialError('')
  //             navigate(`/profile/${res.data.name}`);
  //         }else{
  //             setCredentialError('Credential Error (please enter correct email or password)')
  //         };
  //     });
  // }
    // if not input email id or password its show enter email id and password
    if(!email && !password){
      alert('Enter email and password')
    }
    if(isSignup){
      if(!name){
        alert("enter a name to continue")


      }
      dispatch(SignUp({name, email, password}, navigate))
      
    }
    
  };

  // const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
  //   const data = new FormData(event.currentTarget);
  //   var formdata :any = {
  //     name: data.get('name'),
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   }
  //   setState(formdata)
  // }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  // onChange={handleChange}
                  onChange={(e) => {setName(e.target.value)}}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {setEmail(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => {setPassword(e.target.value)}}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}

export default SignUp
