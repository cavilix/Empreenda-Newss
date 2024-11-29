
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import ImageL from "../../images/login.png"
import Foooter from './Footer.jsx';
import HeaderL from './HeaderL.jsx';
import {
  LoginBox,
  Title,
  InputGroup,
  Input,
  Button,
  ErrorMessage,
  Container,
  ImagemLogin,
  
  
} from '../styles/Login.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');  

    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, insira um email válido.');
      return;
    }

    alert('Login realizado com sucesso!');
    
    navigate('/home');  
  };

  return (
    <>
    <HeaderL/>
    <Container>
      
      <LoginBox>
      <ImagemLogin src={ImageL} alt="Logo" />
        <Title>LOGIN</Title>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <InputGroup>
          
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit" onClick={handleSubmit}>ENTRAR</Button>
      </LoginBox>
    </Container>
    <Foooter/>
    </>
  );
};

export default Login;
