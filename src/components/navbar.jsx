import {Badge }from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import logo from './Proshop-logo-circle.png'
import {mobile} from "../responsive"
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
    height:60px;
    width: 100%;
    ${mobile({ height:"50px",flex:1})}
    // background-color:black;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({padding :"10px 0px"})}
`;
const Left= styled.div`
flex:0.9;
display:flex;
align-items:center;
`;
const Center=styled.div`
display:flex;
justify-content: center;
flex:1;
text-align: center;
`;
const Right=styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2,justifyContent:"center"})}
`;
const Language = styled.div`
 font-size:14px;
 cursor:pointer;
 ${mobile({display:"none"})}
`;
const SearchContainer=styled.div`
    border:1px solid lightgray;
    display:flex;
    align-items:center; 
    margin-left:25px;
    padding:5px;
`;
const Input=styled.input`
    border:none;
    ${mobile({display:"none"})}
`;
const Logo=styled.h1`
padding-left:10px;
    font-weight:bold;
    ${mobile({fontSize:"24px"})}
`;
const MenuItem=styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
`
const Logoimg=styled.img`
    height:38.4px;
`
const CartClick=styled.span`
`
const navbar = () => {
    const navigate= useNavigate()
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{fontSize:16,color:"gray"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logoimg src={logo}></Logoimg>
                <Logo>ProShop</Logo>
            </Center>
            <Right>
                <MenuItem onClick={()=>navigate('Register')}>REGISTER</MenuItem>
                <MenuItem onClick={()=>navigate('Login')}>SIGN IN</MenuItem>
                <MenuItem>
                <CartClick onClick={()=>navigate('Cart')}>.</CartClick>
                <Badge badgeContent={1 } color="primary" >
                    <ShoppingCartOutlined />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>

    </Container>
  )
}
export default navbar
