import React from 'react'
import  styled  from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import Newsletter from '../components/Newsletter'
import { Add, Remove } from '@material-ui/icons'
const Container=styled.div`
`
const Wrapper=styled.div`
padding: 50px;
display: flex;
`
const ImgContainer=styled.div`
flex:1;

`
const Image=styled.img`
width: 100%;
height: 80vh;
object-fit: cover;
`
const InfoContainer=styled.div`
flex:1;
padding: 0px 50px;
`
const Title=styled.h1`
font-weight: 200;
`
const Desc=styled.p`
margin: 20px 0px;
font-size:20px;
font-weight:300;
`
const Price=styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer=styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  width: 50%;
  margin: 30px 0px;
`
const Filter=styled.div`
  display: flex;
  align-items: center;
  /* margin-bottom: 40px; */
`
const FilterTitle=styled.span`
  font-size:20px;
  font-weight:200;
`
const FilterColor=styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* padding-left: 20px; */
  margin: 0px 5px;
  background-color: ${props=>props.color};
  cursor: pointer;
`
const AddContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`
const AmountContainer=styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount=styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  font-size:15px;
  padding: 5px;
  border:2px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button=styled.button`
  padding: 10px;
  border:2px solid gray;
  background-color: white;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 500;
  font-size:15px;

  &:hover{
    background-color: #f8f4f4;
  }
`
// function low_num(){
//   (document.getElementById("myNum").value)--;
// }
// function high_num(){
//   (document.getElementById("myNum").value)++;
// }
const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
            <Image src="https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVubmlzJTIwcmFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
        </ImgContainer>
        <InfoContainer>
            <Title>Yonex Tennis Racket</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, facilis debitis saepe, ea dolore quisquam sed vero eveniet a placeat minus alias ipsum temporibus aperiam possimus culpa exercitationem officia vel!</Desc>
            <Price>Rs. 3899/-</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Colors </FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="gray"/>
                    <FilterColor color="blue"/>
                    {/* <FilterColor color="lightgreen"/>
                    <FilterColor color="cyan"/> */}
                </Filter>
                {/* <Filter>
                    <FilterTitle>Price</FilterTitle>
                    <FilterPrice>
                        <FilterPriceOption>Under 1899</FilterPriceOption>
                        <FilterPriceOption>1899-3999</FilterPriceOption>
                        <FilterPriceOption>3999-8999</FilterPriceOption>
                        <FilterPriceOption>Above 8999</FilterPriceOption>
                    </FilterPrice>
                </Filter> */}
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove style={{cursor:"pointer"}}/>
                <Amount >1</Amount>
                <Add style={{cursor:"pointer"}}/>
              </AmountContainer>
              <Button>Add to Cart</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
