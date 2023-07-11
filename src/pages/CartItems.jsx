import React from 'react'
import { styled } from 'styled-components'
import { orderlist } from '../data'
import CartItem from './CartItem'
const Container=styled.div``
const CartItems = () => {
  return (
    <Container>
      {orderlist.map(item=>
        <CartItem item={item} id={item.id}/>)}
    </Container>
  )
}
export default CartItems
