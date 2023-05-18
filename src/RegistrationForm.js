import React, { useContext,useEffect,useState } from "react";
import styled from 'styled-components';
import {useHttp} from './hooks/http.hook';
import {AuthContext} from './context/AuthContext';


export const Form = styled.form `
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
    margin: 10px 0;
    background-color: #4d533c ;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`;




export const RegistrationForm =  () => {
    const auth = useContext(AuthContext)
    const { loading,error, request,clearError}} = useHttp('');
    const [email,setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const [lastname, setLastName] = useState('');
    const [firstname, setFirstName] = useState('');
    const [clientID, setClientID] = useState('');

    useEffect (() => {
      console.log('Error', error,clearError)
      clearError() 
     }, [error,])


     
  const handleSubmit = async (e) => {
    e.preventDefault();
   
  
  }

  const loginSubmit  = async () => {
    try {
       let clientID = "3532b404-5b2e-4f76-a59a-30d0cf6a1c4a";
       const data = await request ('/auth/sign_up', 'POST', {email, password,clientID})
       auth.login(data.token,data.userId)
    } catch (e) {}
  }

   
    return (


      <Form onSubmit={handleSubmit}>
      <div>    
        <Label>
          Email
          <Input type="text" placeholder=" Email"  id="name" value={email} onChange={(event) =>setEmail(event.target.value)}  />
        </Label>
      </div>
      <div>
        <Label>
          Password:
          <Input type="text" placeholder="Password" id="password" value={password} onChange={(event ) => setPassword(event .target.value)} />
        </Label>
      </div>
      <div>
        <Label>
          Last Name:
        <Input type="text" id="Lastname" placeholder="Name" value={lastname} onChange={(event ) => setLastName(event .target.value)}  />
        </Label>
      </div>
      <div>
        <Label>
          First Name:
        <Input type="firstname" id="name" placeholder="Firstname"   value={firstname} onChange={(event ) => setFirstName(event .target.value)}  />
        </Label>
      </div>
      <div>
        <Label>
          clientID:
        <Input type="clientID" id="clientID" placeholder="clientID"   value={clientID} onChange={(event ) => setClientID(event .target.value)}  />
        </Label>
      </div>
      
        <Button onClick={loginSubmit} disabled={loading} variant="primary" type="submit">Sign in</Button>
      </Form>
    );  
    }; 
         
