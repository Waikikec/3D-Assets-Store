import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { mobile } from '../utils/responsive';
import { green, red } from '@mui/material/colors';
import { publicRequest, userRequest } from '../utils/requestMethods';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })};
`;

//Image Container
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 75vh;
    object-fit: contain;
    ${mobile({ height: "40vh" })};
`;

//Model Information
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px 50px;
    ${mobile({ padding: "10px" })};
`;
const ModelTitle = styled.h1`
    font-weight: 300;
`;
const ModelAuthor = styled.p`
    font-weight: 600;
    margin: 10px;
    color: grey;
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-weight: 300;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const ModelDetails = styled.div`
    width: 100%;
    margin: 30px 0px 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const ModelItem = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ModelProperty = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

const ModelPropInfo = styled.span`
    padding-left: 10px;
    font-size: 16px;
    font-weight: 300;
    display: flex;
    justify-content: flex-end;
`;

const ModelColor = styled.div`  
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
`;

const ModelSpan = styled.span`
    padding-left: 10px;
    font-size: 16px;
    font-weight: 300;
    display: flex;
    justify-content: flex-end;
`;

const Hr = styled.hr`
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05));
`;

//Description Container
const ModelDesc = styled.div`
    font-size: 16px;
    font-weight: 300;
    width: 80%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    ${mobile({ width: "100%" })};
`;

const ModelTitleSection = styled.div`
    font-size: 20px;
    font-weight: 600;
    padding: 20px 0px;
`;

//Edit & Delete Buttons Container
const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    cursor: pointer;
`;

const Error = styled.div`
    margin: 5px;
    color: red;
`;

const SinglePage = () => {
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const user = useSelector(state => state.user.currentUser);
    const [error, setError] = useState('');
    const [product, setProduct] = useState({});
    const isAuthor = user.username === product.author;

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/models/' + id);
                setProduct(res.data);
            } catch (error) { }
        }
        getProduct();
    }, [id]);

    const handleDelete = async () => {
        try {
            await userRequest.delete('/models/' + id);
            window.location.replace('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.imageUrl} />
                </ImgContainer>
                <InfoContainer>
                    <ModelTitle>{product.title}</ModelTitle>
                    <ModelAuthor>Author: {product.author}</ModelAuthor>
                    <Price>$ 7</Price>
                    <ModelDetails>
                        <ModelItem>
                            <ModelProperty>Platform:</ModelProperty>
                            <ModelPropInfo>{product.software}</ModelPropInfo>
                        </ModelItem>
                        <Hr />
                        <ModelItem>
                            <ModelProperty>Render:</ModelProperty>
                            <ModelPropInfo>{product.render}</ModelPropInfo>
                        </ModelItem>
                        <Hr />
                        <ModelItem>
                            <ModelProperty>Date:</ModelProperty>
                            <ModelPropInfo>
                                {new Date(product.createdAt).toLocaleDateString('en-US', DATE_OPTIONS)}
                            </ModelPropInfo>
                        </ModelItem>
                        <Hr />
                        <ModelItem>
                            <ModelProperty>Style:</ModelProperty>
                            <ModelPropInfo>{product.style}</ModelPropInfo>
                        </ModelItem>
                        <Hr />
                        <ModelItem>
                            <ModelProperty>Material:</ModelProperty>
                            <ModelPropInfo>
                                {product.material?.map((t) => (
                                    <ModelSpan>{t}</ModelSpan>
                                ))}
                            </ModelPropInfo>
                        </ModelItem>
                        <Hr />
                        <ModelItem>
                            <ModelProperty>Color:</ModelProperty>
                            <ModelPropInfo>
                                {product.color?.map((c) => (
                                    <ModelColor color={c} key={c} />
                                ))}
                            </ModelPropInfo>
                        </ModelItem>
                        <Hr />
                        <ModelItem>
                            <ModelProperty>Category:</ModelProperty>
                            <ModelPropInfo>{product.category}</ModelPropInfo>
                        </ModelItem>
                    </ModelDetails>
                    <ModelTitleSection>DESCRIPTION</ModelTitleSection>
                    <ModelDesc>{product.description}</ModelDesc>
                    <ModelTitleSection>TAGS</ModelTitleSection>
                    <ModelDesc>
                        {product.tags?.map((t) => (
                            <ModelSpan>{t}</ModelSpan>
                        ))}
                    </ModelDesc>
                    {
                        isAuthor
                            ? (
                                <Button>
                                    <Link to={`/edit/${product._id}`}>
                                        <EditIcon sx={{ color: green[500], fontSize: 30, paddingLeft: 3 }} />
                                    </Link>
                                    <DeleteIcon
                                        sx={{ color: red[500], fontSize: 30, paddingLeft: 3 }}
                                        onClick={handleDelete}
                                    />
                                </Button>
                            )
                            : (<></>)
                    }
                    {error && <Error>Somethng went wrong!</Error>}
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default SinglePage
