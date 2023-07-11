import React from 'react'
import { styled } from 'styled-components'
import CartItems from './CartItems'
import Navbar from '../components/navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-size: 50px;
font-weight: 300;
text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props => props.type === "filled" && "none"};
    background-color:${props => props.type === "filled" ? "black" : "transparent"};
    color:${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`

`
const TopText = styled.span`
text-decoration:underline;
cursor: pointer;
margin: 0px 10px;
font-size: 20px;
`
const Info = styled.div`
width: 100%;
    /* flex:3; */
`
const SummaryFlex=styled.div`
width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

`
const Summary = styled.div`
        /* flex:1; */     
        width: 30vw;
        margin-top: 30px;
        border:0.5px solid lightgray;
        border-radius: 10px;
        padding: 20px;
        height: 40vh;

`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    border:none;
    cursor: pointer;
    background-color: black;
    color:white;
    font-size:15px;
    font-weight: 500;
    &:hover{
        box-shadow:0px 5px 15px rgba(0,0,0,0.3);
    }
`
const Hr=styled.hr`
    background-color: #eee;
    border:none;
    height: 3px;
    `
const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(3)</TopText>
                        <TopText >Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECK OUT NOW</TopButton>
                </Top>
                    <Info>
                        <CartItems />
                    </Info>
                    <SummaryFlex>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>Rs. 9398</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>Rs. 459</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Rs. -400</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>Rs. 9457</SummaryItemPrice>
                        </SummaryItem>
                        <Button>VIEW ORDER</Button>
                    </Summary>
                    </SummaryFlex>
                    <Hr/>
            </Wrapper>
            <Footer />
        </Container >
    )
}

export default Cart
