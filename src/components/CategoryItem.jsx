import React from 'react'
import  styled from 'styled-components'
const Container=styled.div`
    margin:3px;
    height: 62vh;
flex:1;
position: relative;
margin-bottom: 100px;
`
const Image=styled.img`
width:100%;
height:100%;
object-fit: cover;
`
const Info=styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title=styled.h1`
    color: #789191;
    margin-bottom: 20px;
    
`
const Button=styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    /* font-size: large; */
    font-weight: 600;
    
`
const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>
                {item.title}
            </Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
