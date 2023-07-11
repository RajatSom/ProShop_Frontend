import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import styled from "styled-components";
const Container=styled.div`
display: flex;
flex:1;
`
const Left=styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center=styled.div`
    flex:1;
    padding: 20px;
`
const Logo=styled.h1``
const Desc=styled.p`
margin:20px 0px;
`
const SocialContainer=styled.div`
display: flex;
`
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color:white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
`
const Right=styled.div`
flex:1;
padding: 20px;
`
const Title=styled.h3``
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem=styled.li`
width:50%;
margin-bottom: 10px;
`
const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment=styled.img`
width:50%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ProShop</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam nostrum libero dicta sit nisi quia pariatur consequuntur dolores esse commodi eaque eveniet asperiores hic, vitae sapiente, alias molestiae deleniti.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="1250FC">
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Sports Equipments</ListItem>
                    <ListItem>SportsWear - Men</ListItem>
                    <ListItem>SportsWear - Men</ListItem>
                    <ListItem>Trending</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms and Conditions</ListItem>
                </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>
                Plot 139 ProShop HQ, North Fortic India 120322
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>
                +91 2334 493 029
            </ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>
                ProshopMail@gmail.hotmail
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>

  )
}

export default Footer
