
import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  font-family: sans-serif;
`;

export const LeftSection = styled.div`
  color: white;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

export const ImagemLogin = styled.img`
margin-bottom: 10px;
width: 300px;

`;

export const LoginBox = styled.div`
display: flex;
flex-direction: column;
  background-color: #000814;
  padding-top: 1px;
  padding-bottom: 70px;
  padding-left: 70px;
  padding-right: 70px;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  padding-bottom: 30px;
  font-size: 24px;
  color: white;
  font-family:  sans-serif;
  font-size: 30px;
  text-align: center;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  width: 280px;
  
  
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 20px;
  color: white;
  font-family: sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 50px;
  font-size: 14px;
`;

export const Button = styled.button`
 
  width: 50%;
  padding: 10px;
  background-color: #7789A5;
  border: none;
  border-radius: 50px;
  color: black;
  font-size: 18px;
  margin-left: 77px;
  margin-top: 40px;
  cursor: pointer;

  &:hover {
    background-color: #3333ff;
  }
`;

export const ErrorMessage = styled.div`
  color: #484d50;
  margin-bottom: 20px;
  font-family: 'Poppins' sans-serif;
`;

export const Text = styled.h1`
  margin-bottom: 20px;
  font-family:  sans-serif;
  font-size: 60px;
`;

export const Subtitulo = styled.p`
font-size: 30px;
font-family:  sans-serif;
font-weight: bold;
line-height: 0;
padding-top: 4px;
`;

