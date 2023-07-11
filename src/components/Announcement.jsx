// import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
margin: 0;
    height:30px;
    background-color: #2db994;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: white;
`
const Announcement = () => {
  return (
    <div>
      <Container>
        Exciting Offer! Free Shipping on Orders worth over Rs.599
      </Container>
    </div>
  )
}

export default Announcement
