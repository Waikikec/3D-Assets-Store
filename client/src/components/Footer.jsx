import React from 'react'
import styled from 'styled-components'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';

import { mobile } from '../utils/responsive';

const Container = styled.div`
    display: flex;
    background-color: whitesmoke;
    margin-top: auto;
    ${mobile({ flexDirection: "column" })};
`;

// Left Part of Footer
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    color: white;
    cursor: pointer;
`;

// Central Part of Footer
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })};
`;

const Title = styled.h3`
    margin-bottom: 15px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 5px;
    cursor: pointer;
`;

// Right Part of Footer
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "whitesmoke" })};
`;

const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const Room = styled.div``;
const Phone = styled.div``;
const Mail = styled.div``;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>CG STORE</Logo>
                <Desc>FOLLOW US TO GET LATEST UPDATES!</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999"><FacebookIcon /></SocialIcon>
                    <SocialIcon color="E4405F"><InstagramIcon /></SocialIcon>
                    <SocialIcon color="55ACEE"><LinkedInIcon /></SocialIcon>
                    <SocialIcon color="2A5777"><YouTubeIcon /></SocialIcon>
                    <SocialIcon color="E60023"><PinterestIcon /></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>FAQ</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                    <ListItem>Privacy Policy</ListItem>
                    <ListItem>Content Policy</ListItem>
                    <ListItem>Contact and support</ListItem>
                </List>
            </Center>
            <Right>
                <Title>CONTACT</Title>
                <ContactItem>
                    <LocationOnRoundedIcon />
                    <Room style={{ marginRight: "10px" }} />Sofia, Bulgaria
                </ContactItem>
                <ContactItem>
                    <PhoneIcon />
                    <Phone style={{ marginRight: "10px" }} />+359 886 123 456
                </ContactItem>
                <ContactItem>
                    <AlternateEmailIcon />
                    <Mail style={{ marginRight: "10px" }} />contact@gmail.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
