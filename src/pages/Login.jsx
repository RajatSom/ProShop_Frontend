import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(
      rgba(255,255,255,0.7),
      rgba(255,255,255,0.7)
    ),
    url("https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper=styled.div`
background-color: white;
width: 25%;
    padding: 20px;

`
const Form=styled.form`
    display: flex;
    flex-direction: column;
`
const Title=styled.h1`
    font-size:24px;
    font-weight: 300;
`
const Input=styled.input`
    flex:1;
    /* border-radius: 0%; */
    min-width: 40%;
    font-size:15px;
    margin: 10px 0px;
    padding: 10px;
`
const Button=styled.button`
    width: 100%;
    border-radius: 5px;
    border: none;
    background-color: teal;
    padding: 10px;
    color:white;
    cursor: pointer;
    &:hover{
        background-color: #119696;
    }
    margin-top: 10px;
    margin-bottom: 10px;
`
const Link=styled.a`
  margin-top:20px;
  color:teal;
  font-size:12px;
  text-decoration:underline;
  cursor: pointer;
`
const Links=styled.div`
width: 100%;
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
`
const BackHome=styled.a`
margin-top: 15px;
color:teal;
text-decoration: underline;
font-size:14px;
width: 100%;
display: flex;
justify-content: center;
cursor: pointer;
`
const Login = () => {
  const navigate=useNavigate()
  return (
    <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form>
                        <Input placeholder="username"></Input>
                        <Input placeholder="password"></Input>
                        {/* <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement> */}
                        <Button>SIGN IN</Button>
                        <Links>
                        <Link>FORGOT PASSWORD?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>
                        </Links>
                        <BackHome onClick={()=> navigate('..')}>Home Page</BackHome>
                    </Form>
                </Wrapper>
        </Container>
  )
}

export default Login
