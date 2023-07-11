import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom'
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
width: 40%;
    padding: 20px;

`
const Form=styled.form`
    display: flex;
    flex-wrap:wrap;
`
const Title=styled.h1`
    font-size:24px;
    font-weight: 300;
`
const Input=styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement=styled.span`
    font-size:14px;
    margin: 20px 0px;
`
const Button=styled.button`
    width: 100%;
    border: none;
    border-radius:5px;
    background-color: teal;
    padding: 10px;
    color:white;
    cursor: pointer;
    &:hover{
        background-color: #119696;
    }
`
const Flex=styled.div`
width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top:20px;
    font-size:14px;
    justify-content: center;
`
const SignIn=styled.span`
    font-weight: 400;
`
const Anchor=styled.a`
font-weight: 500;
text-decoration:underline;
color: teal;
cursor: pointer;
margin-left:10px;
`
const BackHome=styled.a`
margin-top: 15px;
color:teal;
font-weight:400;
text-decoration: underline;
font-size:14px;
width: 100%;
display: flex;
justify-content: center;
cursor: pointer;
`
const Register = () => {
    const navigate= useNavigate()
    return (
        <Container>
            {/* <Navbar/> */}
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="name"></Input>
                        <Input placeholder="last name"></Input>
                        <Input placeholder="username"></Input>
                        <Input placeholder="email"></Input>
                        <Input placeholder="password"></Input>
                        <Input placeholder="confirm password"></Input>
                        <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                        <Button>CREATE</Button>
                        <Flex>
                        <SignIn>Alrady have an account? </SignIn><Anchor onClick={()=>navigate('/Login')}>LOGIN</Anchor>

                        </Flex>
                        <BackHome onClick={()=> navigate('..')}>Home Page</BackHome>
                    </Form>
                </Wrapper>
        </Container>
    )
}
// 2:00:15
export default Register
