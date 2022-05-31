import React, { useState,useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import { gql, useMutation } from '@apollo/client';
import {useNavigate} from 'react-router-dom'

function ValidationTextFields() {
  const navigate = useNavigate()
  const [error, setErrors] = useState({})
  const [values, setValues] = useState({ username: "", password: "", email: "", confirmPassword: "" })

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result) {
      console.log(result)
      navigate('/')
    },
    onError(err){
      console.log(err.graphQLErrors[0].extensions.exception.errors)
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
    variables:values 
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    addUser()
  }
  console.log(values)
  return (
    <Box sx={{ display: 'grid', placeItems: "center", height: "80vh" }}>

      <Stack justifyContent='center' alignItems='center'>
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <Box
          // component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          {loading ? (
            <h2>loading</h2>
          ):(
            <form onSubmit={handleSubmit}>
            <div>
              <TextField
                error={false}
                id="outlined-error"
                label="UserName"
                name="username"
                type='text'
                onChange={handleChange}
                helperText="Incorrect entry."
              />
              <TextField
                id="outlined-error-helper-text"
                label="email"
                name="email"
                type="email"
                onChange={handleChange}
                helperText="Incorrect entry."
              />
            </div>
            <div>
              <TextField
                label="password"
                name="password"
                variant="filled"
                type='password'
                onChange={handleChange}
                helperText="Incorrect entry."
              />
              <TextField
                label="confirmPassword"
                name="confirmPassword"
                type='password'
                onChange={handleChange}
                variant="filled"
                helperText="Incorrect entry."
              />
            </div>
            {/* <Button  sx={{backgroundColor:"blue",color:'white',width:"100%" ,"&hover":{backgroundColor:"blue"}}}>Submit</Button> */}
            <button style={{color:'white',width:"100%",backgroundColor:"blue",padding:"10px 0px",outline:"none"}}>Submit</button>
          </form>
          )}
        

        </Box>
      </Stack>
    </Box>

  );
}

const REGISTER_USER = gql`
  mutation register(
    $username:String!
    $email:String!
    $password:String!
    $confirmPassword:String!
  ){
    register(
      registerInput:{
        username:$username
        email:$email
        password:$password
        confirmPassword:$confirmPassword
      }
    ){
      id email username createdAt token
    }
  }
`

export default ValidationTextFields
