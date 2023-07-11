import React from 'react'
import { styled } from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
const Container = styled.div``
const Product = styled.div`

display: flex;
justify-content: space-between;
margin-top:30px;
margin-bottom:30px;
margin-left:30px;
`
const ProductDetail = styled.div`
 flex:2;
 display: flex;
 `
const Details = styled.div`
padding: 2px;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 30px;
`
const Image = styled.img`
width: 200px;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
    display: flex;
    flex-direction: row;
    `
const ProductColor1 = styled.div`
width: 20px;
height: 20px;
margin-left:5px;
background-color:#${props => props.color};
`
const ProductColor2 = styled.div`
width: 20px;
height: 20px;
background-color:#${props => props.color};
`
const ProductColor3 = styled.div`
width: 20px;
height: 20px;
background-color:#${props => props.color};
`
const PriceDetail = styled.span`
flex:1;
/* border-radius: 50%; */
/* max-width:270px; */
/* background-color: #f5f5f5; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    `
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;
    `
const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height: 2px;
    `
const ProductSize = styled.div`
    

`
// 2:36:00
const CartItem = ({ item }) => {
    return (
        <Container>
            <Product>
                <ProductDetail><Image src={item.ProdImg} />
                    <Details>
                        <ProductName><b>Product : </b>{item.ProdName}</ProductName>
                        <ProductColor><b>Color : </b>
                            <ProductColor1 color={item.ProdColor1} />
                            <ProductColor2 color={item.ProdColor2} />
                            <ProductColor3 color={item.ProdColor3} />
                        </ProductColor>
                        <ProductSize><b>Size : </b> {item.ProdSize}</ProductSize>
                        <ProductId><b>ID : </b>{item.ProdId}</ProductId>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                        <Remove />
                        <ProductAmount>{item.ProdQuantity}</ProductAmount>
                        <Add />
                    </ProductAmountContainer>
                    <ProductPrice>{item.ProdPrice}</ProductPrice>
                </PriceDetail>
            </Product>
            <Hr />
        </Container>
    )
}

export default CartItem
