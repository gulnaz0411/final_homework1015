import React, { useContext,useEffect, useState } from "react";    
import { Container } from "react-bootstrap";
import styled from 'styled-components';
import {useHttp} from './hooks/http.hook';
import {AuthContext} from './context/AuthContext';




 
  
  export const Form = styled.form `
    width: 100%;
    padding: 20px;
    margin-top: 50px;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bootom: 5px;
    
  
  `;

  export const Label = styled.label`
      font-size:16px;
      margin-bottom: 8px;
      margin-right: 10px;
  
  `;
  export const Input = styled.input `
      display: flex;
      aligen-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 1px solid gray;
  `;

 export const Button = styled.button`
    padding: 10px 20px;
    background-color:#4d533c ;
    margin: 10px 0;
    border-radius: 5px;
    cursor: pointer;
    color:#fff;
 `;


 

 export const Login = () => { 
  const auth = useContext(AuthContext)
  const {loading, error, request, clearError} = useHttp()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect (() => {
    console.log('Error', error)
   }, [error,])




  const handleSubmit = async (e) => {
    e.preventDefault();
   
  
  }

  const loginSubmit  = async () => {
    try {
       const data = await request ('/api/auth/sign_in', 'POST', {email, password})
       auth.login(data.token,data.userId)
    } catch (e) {}
  }



    return (
      <Container >
       <Form  onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}  />
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <Input type="password" id="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}  />
          </div>
        
          <div>
          <Button onClick={loginSubmit} variant="primary" type="submit">
            Login
          </Button>
          </div>
            
        </Form>
      </Container>
    
  
  

 )};


  

  
  
    
  
  
   

 
 

